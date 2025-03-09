// const marvelHeros = ["spiderman", "thor", "ironman"]
// const dcHeros = ["batman", "flash", "superman"]

// marvelHeros.push(dcHeros);       // make changes to original array
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


// Merge - Using Spreading Technique
// const allHeros = [...marvelHeros, ...dcHeros]
// console.log(allHeros);


// const nums1 = [1, 2, 3, [4,5,6], 7, [6, 7, [4, 5]]]
// const nums2 = nums1.flat(Infinity)    // Take depth
// console.log(nums2)


// console.log(Array.isArray("Sarim"))
// console.log(Array.from("Sarim"))
// console.log(Array.from({name : "Sarim"}))     // Interesting Case


const n1 = 100, n2 = 200, n3 = 300
console.log(Array.of(n1, n2, n3))