// ...x - Rest Operator

// function calcCartPrice(...itemPrice){
//     return itemPrice
// }
// console.log(calcCartPrice(200, 400, 500))

// function calcCartPrice(val1, val2, ...itemPrice){
//     return itemPrice
// }
// console.log(calcCartPrice(200, 400, 500, 300))



// Handling Objects in Functions
// const user = {
//     username : "Sarim",
//     price : 199
// }

// function handleObjects(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }

// handleObjects(user)
// handleObjects({username : "Sarim", price : 199})



// Handling Arrays in Functions
// const nums = [200, 400, 500]

// function handleArrays(arr){
//     return arr[2]
// }

// console.log(handleArrays(nums));



// Scope Level
// function one(){
//     const username = "Sarim"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }

//     console.log(website);
//     two()
// }

// one()


// Mini Hoisting

console.log(addOne(5));
function addOne(num){
    return num + 1
}

console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}