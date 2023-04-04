//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Examples
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     let numArray = l.filter(e => typeof e === 'number');
//     return numArray;
// }

// console.log(filter_list([1,2,'aasf','1','123',123]));

//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
//The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//Examples
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



function duplicateCount(text){
    const sorted = text.toLowerCase().split("").sort();
    let dupCounter = 0;
    for (let i = 0; i < sorted.length; i++){
        if (sorted[i] == sorted [i+2]){
            dupCounter;
            //console.log('skip!');
        } else if (sorted[i] == sorted[i+1]) {
            dupCounter++;
            //console.log('duplicate!');
        } else {
            dupCounter;
            //console.log('no duplicate!');
        }
    }
    //console.log(dupCounter);
    return dupCounter;
}

duplicateCount("abbccddd");