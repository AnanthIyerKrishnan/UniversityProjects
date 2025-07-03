// main API file
const express = require('express');
const cors = require('cors');
const db = require('./dbConnectExec.js');
const bcrypt = require('bcryptjs');
const port = 5555;
const config = require('./config.js');
const jwt = require('jsonwebtoken');
const auth=require('./middleware/authenticate.js');
const app = express();

// end main declarations
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log("App is running on port", port);
});

app.get("/", (req, res) => {
    res.send("API up and running");
});

//now let's do a simple hello world
app.get("/hi", (req, res) => {
    res.send("hello world!");
});
//now, get endpoint that returns all films with ratings
app.get("/films", (req, res) => {
    db.executeQuery(`SELECT Film.*,FilmRating.Rating FROM Film INNER JOIN
FilmRating ON Film.RatingFK=FilmRating.RatingPK;`).then((theResults) => {
        res.status(200).send(theResults);
    })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Contact server admin");
        });
});
// now we wnat to build a endpoint/route to query a single film
app.get("/films/:pk", (req, res) => {
    let pk = req.params.pk; // extract the pk from the req object
    console.log(pk); // optional
    let myQ = `SELECT Film.*,FilmRating.Rating FROM Film INNER JOIN
FilmRating ON Film.RatingFK=FilmRating.RatingPK
WHERE Film.FilmPK=${pk};`
    db.executeQuery(myQ)
        .then((result) => {
            if (result[0]) { // if a result was generated
                res.send(result[0]);
            }
            else {
                res.status(404).send("bad request, check param value");
            }
        })
        .catch((err) => {
            console.log("error in /films/pk", err);
            res.status(500).send();
        });
});
// now for a post endpoint to create a new user
app.post("/contacts", async (req, res) => {
    let nameFirst = req.body.nameFirst;
    let nameLast = req.body.nameLast;
    let email = req.body.email;
    let password = req.body.password;

    // make sure these are all populated
    if (!nameFirst || !nameLast || !email || !password) {
        return res.status(400).send("bad request, missing values in required inputs");
    }
    // if you make it this far, you conclude all values are populated
    // we need to replace single quotes in first & last name with double single quotes
    nameFirst = nameFirst.replace("'", "''");
    nameLast = nameLast.replace("'", "''");
    // check the db to see if email already exists
    let emailCheckQuery = `SELECT email from Contact WHERE email='${email}'`;
    let existingUser = await db.executeQuery(emailCheckQuery);
    // if we get results, that means don't create a new user
    if (existingUser[0]) {
        return res.status(409).send("duplicate email found");
    }
    // if we make it this far, we're ready to proceed with creating the contact
    let hashedPW = bcrypt.hashSync(password); // hash it and assign to hashedPW

    // build insert query
    let insertQ = `INSERT INTO Contact(FirstName,LastName,Email,UserPassword)
    VALUES ('${nameFirst}','${nameLast}','${email}','${hashedPW}')`;
    db.executeQuery(insertQ)
        .then(() => {
            res.status(201).send();
        }).catch((err) => {
            console.log("error in POST /contacts", err);
            res.status(500).send();
        });
})
//end signup endpoint
//now begin login process
app.post("/contacts/login", async (req, res) => {
    // 1. light data validation
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(400).send("Bad request,missing required fields");
    }
    // 2. Check to ensure the user exists in DB
    let query = `SELECT * FROM Contact WHERE Email='${email}'`;
    let result;
    try {
        result = await db.executeQuery(query);
    }
    catch (err) {
        console.log("Error in /contacts/login", err);
        return res.status(500).send();
    }
    console.log("results:", result);
    // 3. for users that exists , check password
    if (!result[0]) {
        return res.status(401).send("Invalid credentials");
    }
    let user = result[0];
    if (!bcrypt.compareSync(password, user.UserPassword)) {
        return res.status(401).send("Invalid password");
    }
    // 4. generate json web token
    let token = jwt.sign({ pk: user.ContactPK }, config.JWT, { expiresIn: "60 minutes" });
    // sign takes 3 args: userPK,secret code,expiresIn data
    // 5. Save the token in the db, send back response
    let setTokenQuery = `UPDATE Contact SET Token='${token}'
    WHERE ContactPK=${user.ContactPK}`;
    try {
        await db.executeQuery(setTokenQuery);
        res.status(200).send({
            token: token,
            user: {
                FirstName: user.FirstName,
                LastName: user.LastName,
                Email: user.Email,
                ContactPK: user.ContactPK
            }
        });
    }
    catch (err) {
        console.log("error setting up token", err);
        res.status(500).send("token setup error");

    }
});
// authenticated endpoint/route /reviews
app.post("/reviews",auth,async(req,res)=>{
    try{
        // validating the inputs
        let filmFK=req.body.filmFK;
        let summary=req.body.summary;
        let rating=req.body.rating;

        if(!filmFK || !summary || !rating||!Number.isInteger(rating)){
            return res.status(400).send("Bad request");
        }
        // fix the summary to escape single quotes
        summary=summary.replace("'","''");//prevent sql errors
        console.log("here is the auth contact:",req.contact);
        // now build the insert query for FilmReview
        let insertQ=`INSERT INTO FilmReview(ReviewSummary,ReviewRating,FilmFK,ContactFK) 
OUTPUT inserted.ReviewPK,inserted.ReviewSummary,inserted.ReviewRating,inserted.FilmFK
VALUES ('${summary}',${rating},${filmFK},${req.contact.ContactPK});`;
let insertedReview=await db.executeQuery(insertQ);
// console log goes here
res.status(201).send(insertedReview[0]);
    }
    catch(err){
        console.log("error inserting review",err);
        res.status(500).send("error inserting review");
    }
});
//////////////////////////////
//contacts/me -- takes auth token sent in and returns user info
app.get("/contacts/me",auth,(req,res)=>{
    try{
        res.send(req.contact);
    }
    catch{
        res.status(500).send("error fetching current session");
    }
});
// Logout
app.post("/contacts/logout",auth,(req,res)=>{
    let updateQ=`UPDATE Contact SET Token=NULL
    WHERE ContactPK=${req.contact.ContactPK}`
    db.executeQuery(updateQ)
    .then(()=>{
        res.status(200).send("Logout successful");
    })
    .catch((err)=>{
        console.log("error in post /contacts/logout");
        res.status(500).send();
    });
});
//next we want to get the current user's review
app.get("/reviews/me",auth,async(req,res)=>{
let selQ=`SELECT Film.MovieTitle,FilmReview.ReviewSummary,FilmReview.ReviewRating 
FROM Film INNER JOIN FilmReview 
ON Film.FilmPK=FilmReview.FilmFK
WHERE FilmReview.ContactFK=${req.contact.ContactPK}`;
try{
    let results=await db.executeQuery(selQ);
    // 3. send the reviews back via response object
    res.status(200).send(results);
}
catch{
    res.status(500).send("Error getting current user's reviews");
}

});