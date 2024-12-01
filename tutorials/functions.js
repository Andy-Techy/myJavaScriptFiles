function sayMyName(){
    console.log('Mitch')
};
// sayMyName();

//this is a function called sayMyName2, with no arguments and logs your name.
function sayMyName2(name){
    console.log(name)
};
// sayMyName2('Andy');

//this is a function called greeting with 1 argument and logs a greeting to a name.
function greeting(name){
    // console.log("Hi " + name + " nice to meet you.")
    console.log(`Hi  ${name}, nice to meet you!`)
}
// greeting('Mitch');

function sum(a,b){
    return a + b
};
// sum(5, 2)
// num1 = sum(5, 2)
// console.log(num1);

function FoodAndTipCalculator(food, tip){
    tipPercentage = tip / 100
    tipAmount = food * tipPercentage
    total  =  sum(food, tipAmount)
    return total
};
// console.log(FoodAndTipCalculator(200, 30));

//ES6
// A-R-R-0-W   F-U-N-C-T-I-0-N-S
//explicit arrow function - return inclusive
const sumArrowFunction = (a, b) => {
    return a + b
};

//implicit arrow function  - return is removed
const sumArrowFunctionImplicit = (a, b) => a + b;
// console.log(sumArrowFunctionImplicit(10, 20));

const add = (a, b) => {
    return a + b
};

// console.log(add(30, 20));

//this function takes an array of numbers and multiplies it by 2 to get results
const numbDouble = (numbers) => {
    let result = []
    for (const number of numbers) { 
        result.push(number * 2)
    }
    return result
};
// console.log(numbDouble([1,2,3,5,6,7,8,9,10]));

const exponent = (numbs) => {
    let expoResult = []
    for (const each of numbs){
        expoResult.push(each ** 2)
    }
    return expoResult
};
// console.log(exponent([2,4,6]));
// console.log(exponent([1,2,3,4,5,6,7]));

//const 
const letterCount = (phrase) => {
    let totalLetter = 0;
    for (let letter in phrase){

        totalLetter = letter ++
    }
    console.log(`result: ${totalLetter}`)
}
console.log(letterCount('hey'));

/*this is a function that takes numbers as an argument,
    computes the square and cube and store it in array */
console.log('*****************************************')
const numbsManipulate = (numbers) => {
    let squaredNumbers = []
    let cubicNumbers = []
    for (const each of numbers) { 
        squaredNumbers.push(each ** 2)
        cubicNumbers.push(each ** 3)
    };  
    // console.log(squaredNumbers)
    // console.log(cubicNumbers)   
};
// console.log(numbsManipulate([10, 20, 30, 40, 50]))
console.log('*****************************************')

/* this is a function that takes numbers as arguments, 
    adds them and return their total */
const sumNumbs = (numbers) => { 
    let result = 0; 
    for (const each of numbers){
        // console.log(each)
        result = result + each
    }
    console.log('****************')
    return  `result: ${result}`
}
// console.log(sumNumbs([1,2,3,4,6]))
console.log('****************')

/* this function takes numbers as arguments, 
    and displays the biggest number */
const findingMaxNumb = (numbers) => {
    let isMax = numbers[0]
    for (const each of numbers){
        if(each > isMax){  
            isMax = each 
        }
    }
    console.log(`isMax: ${isMax}`)
}
// findingMaxNumb([50,45,55,40,60,35,65,30,70])
// findingMaxNumb([-1, 1, -2, 2])
findingMaxNumb([-1, -2])

//just like the findingMaxNumb function, this function takes
//numbers as arguments and and displays the least number.
const findMinNumb = (numbers) => {
    isMin = numbers[0]
    for (const each of numbers){ 
        if (each < isMin){
            isMin = each
        }
    }
    console.log(`isMin: ${isMin}`)
}
// findMinNumb([50,45,55,40,60,35,65,30,70])
// findMinNumb([-1, 1, -2, 2])
findMinNumb([-1, -2])

const letterOccur = (tense) => {
    let occurence = {}
    for (const each of tense){
        if (each in occurence){
            occurence ++
        }else{
            occurence += 1
        }
    }
    console.log(occurence)
}
letterOccur('I am a great software engineer')
 
//HIGHER ORDER FUN CTIONS
//map()-- loops and returns an array
//filter() -- loops and returns an array with matching conditions.
//reduce()  --  takes in a function as an argument and gives you back the accumulator

 










