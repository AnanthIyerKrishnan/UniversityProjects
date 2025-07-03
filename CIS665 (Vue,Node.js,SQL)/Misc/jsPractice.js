// JS Practice File
function runCode() {
    const person = {
        firstName: "Tom", lastName: "Cruise", age: 60,
        quote: function () {
            console.log("That's right, Iceman, I am dangerous");
        }
    };
    console.log(person);
    console.log(person.lastName);
    person.quote();
    // 2d array
    const someItems = [
        ["Tom", "Jodie", "Mel", "Ryan", "Bert"],
        ["Bird", "Mouse", "Dog"],
        ["cheese", "Tacos", "oranges", "salad"]
    ];
    console.log(someItems[2][3]); // prints "salads",row index 2, column 3
    let canine = someItems[1][2]; // copies "dog" into canine variable

    // simpler array for looping 
    const students = ["Alex", "Jackie", "Sam"];
    for (let i = 0; i < students.length; i++) {
        console.log("Hello", students[i]);
    }
    // now cruise through the 2d array
    for (let i = 0; i < someItems.length; i++) {
        for (j = 0; j < someItems[i]; j++) {
            console.log(someItems[i][j]);
        }
    }
    // using forEach to define function for each array item
    students.forEach(function (student) {
        console.log("Howdy, ", student);
    });
    const greet = function (theName) {
        console.log("Greetings,", theName);
    }
    someItems.forEach(greet);

    // More objects & object arrays
    const aMovie = {
        name: "Avengers",
        year: 2012,
        liked: true,
    };
    // now do array of movie objects
    const someMovies = [
        {
            name: "Avengers",
            year: 2012,
            liked: true
        },
        {
            name: "Black Panther",
            year: 2018,
            liked: true
        },
        {
            name: "Toy Story 4",
            year: 2019,
        },
        {
            name: "Jaws",
            year: 1975
        }
    ];

    for (let i = 0; i < someMovies.length; i++) {
        if (someMovies[i].year < 2015) {
            console.log(someMovies[i], "is a classic!");
        }
    }
    // alternatively:
    someMovies.forEach(function (aMovie) {
        if (aMovie.year < 2015) {
            console.log(aMovie, "is a classic!");
        }
    });
    const films = [
        {
            name: "Avengers",
            year: 2012,
            liked: true,
            actors: [
                { firstName: "Chris", lastName: "Hemsworth" },
                { firstName: "Scarlett", lastName: "Johansson" },
                { firstName: "Chris", lastName: "Evans" },
            ]
        },
        {
            name: "Black Panther",
            year: 2018,
            liked: true,
        },
        {
            name: "Toy Story 4",
            year: 2019,
            sayQuote: function () {
                console.log("To infinity and beyond");
            }
        },
        {
            name: "Jaws",
            year: 1975
        }
    ];
    //console log Johansson
    console.log(films[0].actors[1].lastName);
    // say the quote from toy story
    films[2].sayQuote();

} // end code