//katas


// TODO: Refactor and shorten the function
//* https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

// function describeAge(age) {
//     if (age <= 12) {
//         return "You're a(n) kid";
//     } else if (age >= 13 && age <= 17) {
//         return "You're a(n) teenager";
//     } else if (age >= 18 && age <= 64) {
//         return "You're a(n) adult";
//     } else {
//         return "You're a(n) elderly";
//     }
// }

// first attempt
// function describeAge(age) {
//     return age <= 12 ? "You're a(n) kid"
//         : age <= 17 ? "You're a(n) teenager"
//         : age <= 64 ? "You're a(n) adult"
//         : "You're a(n) elderly"
//     ;
// }

function describeAge(age) {
    return `You're a(n) ${age <= 12 ? "kid" : age <= 17 ? "teenager": age <= 64 ? "adult" : "elderly"}`
}



//console.log(describeAge(31));

//--


// TODO: Please write a function that sums a list, but ignores any duplicate items in the list.

// function sumNoDuplicates(numList) {
//     let sum = 0;
//     if (numList.length === 0) {
//         return sum;
//     } else {
//         // let uniqueNumList = numList.filter((c, index) => {return numList.indexOf(c) === index});
//         // let sumUniqueNumList = uniqueNumList.reduce( (a,b) => {return a + b});
//         // return sumUniqueNumList;

//         // let sortedList = numList.sort((a,b) => {return a-b});
//         // let duplicateRemoved = sortedList

//         for (num of numList) {
//             for (n of numList){
//                 if (num = n){
//                     console.log('duplicate', num);
//                 } else {
//                     console.log('not duplicate', num);
//                 }
//             }
//         }

//         return sum;
//     }
// }

// const numList = [1,1,2,3];
// const empty = [];
// console.log(sumNoDuplicates(numList));

function sumNoDuplicates(numList) {
    //filters out based on if the first index is also the last
    const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index);
    //adds the remaining array values
    return uniqueArr.reduce((x,y)=>x+y,0);
    }