// const user = {
//     username : "Sarim",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// // user.welcomeMessage()
// // user.username = "Ali"
// // user.welcomeMessage()

// console.log(this);



// function chai(){
//     console.log(this);
// }
// chai()


// ***************** IMPORTANT 
// function chai(){
//     let username = "Sarim"
//     console.log(this.username);      // undefined
// }
// chai()


// const chai = () => {
//     let username = "Sarim"
//     console.log(this.username);
//     console.log(this);
// }
// chai()



// Implicit Return 
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(4, 3));


// Parenthesis is Recommended
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(4, 3));