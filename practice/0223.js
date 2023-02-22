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



console.log(describeAge(31));

//--