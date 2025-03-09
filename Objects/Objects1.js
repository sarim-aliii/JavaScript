// singleton
// Object.create


// object literals
// const jsUser = {
//     name : "Sarim",
//     "full name" : "Sarim Ali",
//     age : 20,
//     location : "Bangalore",
//     email : "sarim@gmail.com",
//     isLoggedIn : false
// }

// console.log(jsUser.email)        // Not Recommend
// console.log(jsUser["email"])

// // console.log(jsUser.full name)        // Error : Bcz keys are treated as strings thats why '.' is not recommend
// console.log(jsUser["full name"]) 



// Use Symbol as key  -- IMPORTANT

// Wrong
// const mySym = Symbol("key")

// const jsUser = {
//     name : "Sarim",
//     "full name" : "Sarim Ali",
//     age : 20,
//     location : "Bangalore",
//     email : "sarim@gmail.com",
//     isLoggedIn : false,
//     mySym : "myKey"
// }

// console.log(typeof jsUser.mySym)    // string but we want it as Symbol

// Correct
// const mySym = Symbol("key")

// const jsUser = {
//     name : "Sarim",
//     "full name" : "Sarim Ali",
//     age : 20,
//     location : "Bangalore",
//     email : "sarim@gmail.com",
//     isLoggedIn : false,
//     [mySym] : "myKey"
// }

// console.log(jsUser[mySym])



// Functions in Objects
const jsUser = {
    name : "Sarim",
    "full name" : "Sarim Ali",
    age : 20,
    location : "Bangalore",
    email : "sarim@gmail.com",
    isLoggedIn : false,
}

jsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(jsUser);
// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingTwo());