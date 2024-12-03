//this tool is the basics of array operations

//creation of array
const chiCast = ["Kev", "Jemma", "Jake", "Papa", "Emmett", "Keisha"];

//this code 👉 kev
console.log(chiCast[0]);
//this code 👉 Jemma
console.log(chiCast[1]);
//this code 👉 Jake
console.log(chiCast[2]);
//this code 👉 Papa
console.log(chiCast[3]);
//this code 👉 5
console.log(chiCast.length);

//this codes adds Dom to the array from the end
chiCast.push("Dom");
console.log(chiCast[6]);

//this codes takes of Jemma
chiCast.pop("Jemma");

//ARRAY METHODS
// pop, push, slice, indexOf, length

// slice - starts from the first to the last minus 1
console.log(chiCast.slice(0, 4)); // 👉 0 to 3
console.log(chiCast.slice(3, 6)); // 👉 3 to 5
console.log(chiCast.slice(1, 4)); // 👉 1 to 3

//indexOf - logs the index of the specified item in the array
console.log(chiCast.indexOf('Papa'));


//LOOPING OVER ARRAYS  ********FOR OF ************
// const colors = ['red', 'blue', 'green'];
// for (var color of colors ) {
//     console.log(color);
// }


//MULTILINE STRINGS
// var multiline = `
//     This
//     is 
//     goin'
//     to be
//     a good 
//     semester.
// `;
// console.log(multiline);
// console.log("*******************************************************************")






















