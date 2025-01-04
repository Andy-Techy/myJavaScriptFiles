
const names = ["Papa", "kev", "Keisha", "Jake", "Emmett"];

for (const name of names) { 
    // console.log(name)
};

const numbers = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10] // create an array of numbers 
for (number of numbers) { 
   // console.log(number ) displays each number
    //console.log(number * 2 ) //displays each number times 2
};

//array of numbers that displays and array of numbers that displays an array of numbers * 2
const numbs = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10] 

const newNumbs = [] //empty array to hold new set of numbers
for (numb of numbs) {   
    // console.log(numb * 2)
    newNumbs.push(numb * 2)
};

// console.log(newNumbs)
/* this code takes the number 2,4,6 computes the square and cube 
    and puts it pushes it into an empty array */
// console.log('*****************************************')
const numbs1 = [2 , 4, 6]
let squaredNumbers = []
let cubicNumbers = []
for (const each of numbs1) { 
    squaredNumbers.push(each ** 2)
    cubicNumbers.push(each ** 3)
};
// console.log(`the square of the numbers is [${squaredNumbers}]`)
// console.log(cubicNumbers)
// console.log('*****************************************')

/* this loop takes an array of numbers and displays the total*/
const addNumbs = [1,2,3,4]
let counter = 0;

for (const each of addNumbs) { 
    // console.log(each)
    counter = counter + each
}
// console.log(`result: ${counter}`)

/* finding the greatest number */
const isMax = [5,8,4,9,0,10,2,15]
let maxNumb = isMax[0]
for (const each of isMax){
    if(each > maxNumb){
        maxNumb = each
    }    
    // }else{
    //     maxNumb = maxNumb
    // }
}

// console.log(`maxNumb: ${maxNumb}`)
//this loop takes an array of numbers and outputs the mininum...
const numbArray = [30,15, 45,10] //create an array of numbers
let isMin = numbArray[0]  // create variable isMin and assigns it to the index of the first number which is 30
for (const each of numbArray){ //loops through numbArray
    if (each < isMin){  //if the first number(30) is less than isMin which is 30
        isMin = each //isMin is now 30
    }
}
// console.log(`isMin: ${isMin}`)

const letterOccur = ('I am a great software engineer')
let occurence = {}
for (const each of letterOccur){
    if (each in occurence){
        occurence[each] ++
    }else{
        occurence[each] = 1
    }
}

// console.log(occurence)

const wordOccurence = ('yo yo sup')
let wordOccur = {}
let words = wordOccurence.split(' ')
for (const each of words){
    // console.log(each)
    if (each in wordOccur){
        wordOccur[each] ++
    }else{
        wordOccur[each] = 1
    }
}
// console.log(wordOccur)

//displays random numbers
// console.log(Math.floor(Math.random() * 5))

const randomCast = (names) => {
    const rand = Math.floor(Math.random() * names.length)
    // console.log(rand)
    return names[rand]
}
let  belAirCast  = ["Amira", "Jazz", "Hilary", "Will", "Cornnor", "Carlton"]
console.log((randomCast(belAirCast)))
