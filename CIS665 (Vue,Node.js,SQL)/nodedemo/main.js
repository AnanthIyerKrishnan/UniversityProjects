function greet() {
    console.log("greetings,earthling");
}
greet();
console.log(module);

// bringing in the function from myFiles
const myHiFunction = require("./myFiles.js");
const thatFile = require("./otherFiles.js")

// bringing in the function from myFiles 
console.log(thatFile.addTwoNums(2, 8));
console.log(thatFile.myGreeting("Tom Cruise"));

const myAddFunction = require("./otherFiles.js").addTwoNums;
console.log(myAddFunction(2, 8));

// 2.accessing node's file system capabilities
const fileSystem = require('fs');
fileSystem.writeFile("helloWorld.txt", "hi world!", () => {
    console.log("file written as planned")
});

// 3. Externally sourced NPM modules
// step 1 is to write an npm init
// step 2 is to npm i <packageName>
// step 3 is const <var>=require('packageName');
const jokesnquotes = require('jokesnquotes');
 
console.log(jokesnquotes.getRandomQuote());