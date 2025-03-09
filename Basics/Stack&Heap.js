// Primitive DataTypes -> Stack
// Non-Primitive DataTypes -> Heap


// Stack Memory
// let name1 = "Sarim"
// let name2 = name1
// name2 = "Ali"

// console.log(name1)
// console.log(name2)


// Heap - Provide Reference
const user1 = {
    name : "Sarim",
    age : 20
}
const user2 = user1

user2.name = "Ali"

console.log(user1)