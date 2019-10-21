import { slowMath } from '/async-math.js'


// const promises = slowMath.add(6, 2)
//     .then(a => {
//     console.log(a);   //8
//     return slowMath.multiply(a, 2);
//     }).then(a => {
//         console.log(a);
//         return slowMath.divide(a, 4)
//     }).then(a => {
//         console.log(a);
//         return slowMath.subtract(a, 3);
//     }).then(a => {
//         console.log(a);
//         return slowMath.add(a, 98)
//     }).then(a => {
//         console.log(a);
//         return slowMath.remainder(a, 2)
//     }).then(a => {
//         console.log(a);
//         return slowMath.multiply(a, 50);
//     }).then(a => {
//         console.log(a);
//         return slowMath.remainder(a, 40);
//     }).then(a => {
//         console.log(a);
//         return slowMath.add(a, 32);
//     }).then(a => {
//         console.log(`The final result is ${a}`)
//     }).catch((error) => {
//         console.error(error)
//     })


async function doMath(a, b) {
    try {
        let math = await slowMath.add(a, b);
        console.log(math)
        let math2 = await slowMath.multiply(math, 2);
        console.log(math2)
        let math3 = await slowMath.divide(math2, 4);
        console.log(math3)
        let math4 = await slowMath.subtract(math3, 3);
        console.log(math4)
        let math5 = await slowMath.add(math4, 98);
        console.log(math5)
        let math6 = await slowMath.remainder(math5, 2);
        console.log(math6)
        let math7 = await slowMath.multiply(math6, 50)
        console.log(math7)
        let math8 = await slowMath.remainder(math7, 40)
        console.log(math8);
        let math9 = await slowMath.add(math8, 32)
        console.log(`the final result is ${math9}`)
    } catch (error) {
        console.error(error)
   }
} 





doMath(6, 2)