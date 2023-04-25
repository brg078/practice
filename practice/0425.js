//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

//my initial solution, too clunky
// function solution(number){
//     let sumTotal = 0;
//     let numberChecker = number -1 ;
//     moduloChecker();

//     function moduloChecker(){
//         //console.log('numberChecker: ', numberChecker);
//         if (numberChecker <= 0) {
//             //console.log('numberChecker should be 0: ', numberChecker);
//             //console.log('sumTotal: ', sumTotal);
//             return sumTotal;
//         } else if (numberChecker %3 === 0 || numberChecker %5 === 0){
//             sumTotal = sumTotal + numberChecker;
//             //sumTotal += numberChecker;
//         } else {
//             sumTotal = sumTotal;
//         }
//         numberChecker--;
//         //console.log('numberChecker: ', numberChecker);
//         //console.log('sumTotal: ', sumTotal);
//         moduloChecker();
//     }

//     return sumTotal;
// }

//submitted solution, could be setup with ternary?
function solution(number){
    let sumTotal = 0;
    for (let i = 0; i < number; i++) {
        if (i %3 === 0 || i %5 === 0) {
            sumTotal += i;
        } else {
            continue;
        }
    }
    return sumTotal;
}

console.log(solution(10786));
console.log(solution(8));
console.log(solution(6));