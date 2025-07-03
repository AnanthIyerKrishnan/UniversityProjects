function addTwoNums(num1,num2){
    return (num1+num2);
}

function greetPerson(name){
    return "greetings," +name;
}

// export both of these
module.exports={addTwoNums:addTwoNums,myGreeting:greetPerson};
