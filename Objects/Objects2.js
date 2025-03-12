// const tinderUser = new Object()    // singleton

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUSer));
// console.log(Object.values(tinderUSer));
// console.log(Object.entries(tinderUSer));                   // returns array of key,value pair
// console.log(tinderUSer.hasOwnProperty('isLoggedIn'));     // to check existence of a key



// Nesting Of Objects
// const regularUser = {
//     emnail : "some@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Sarim",
//             lastname : "Ali"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);



// Merging of objects
// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "c", 4 : "d"}

// // const mergeObj = {obj1, obj2}
// // const mergeObj = Object.assign(obj1, obj2)
// // const mergeObj = Object.assign({}, obj1, obj2)
// const mergeObj = {...obj1, ...obj2}

// console.log(mergeObj);



const users = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "def@gmail.com"
    },
    {
        id : 3,
        email : "ghi@gmail.com"
    }
]

console.log(users[1].id);
console.log(users[1].email);
for(let user in users){
    console.log(user);
}
