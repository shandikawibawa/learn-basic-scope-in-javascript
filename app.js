// Scope in Javascript refers to the current context of code, which determines the accesibility of variables to JavaScript
// There are two types of scopes in JavaScript.
// Global Scope variables are those declared outside of a black.
// Local Scope variables are those declared inside of a black.


let textMessage = "This is global variable"; // global variable

{
    let textMessage = "This is local variable"; // local variable
}


console.log(textMessage);

//================================================//


function showMessage() {
    let textMessage = "This is local variable";
    console.log(textMessage);
}

showMessage();

for (let i = 0; i < 5; i++) {
    console.log(i)
    
}

//===============================================//

//function greet() {
//    return `Hello, my name is ${person.name} & i am ${person.age} years old. `
//}


//const person = {
//    name: "Shandika",
//    age: 18,
//    greet,
//};

//console.log(person.greet());

//================================================//

const person1 = {
    name: "Shandika",
    age: 18,
    greet: function () {
        return `Hello, my name is ${person1.name} & I am ${person1.age} years old.`;
    }
}

console.log(person1.greet());

//================================================//

const person = {
    name: "Shandika",
    age: 18,
    email: "sh@gmail.com",
    isSubscribed: true,
    hobbies: ["Music", "Gaming", "Sing a song"],
    address: {
        city: "Badung",
        idk: true,
    },
};

// JSON.stringify()
const jsonString = JSON.stringify();