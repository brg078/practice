//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript


//my working solution
function spinWords(string){
    let joinWords = [];
    let splitWords = string.split(" ");
    for (let word of splitWords) {
        if (word.length > 4) {
            let reverseWord = word.split("").reverse().join("");
            joinWords.push(reverseWord);
        } else {
            joinWords.push(word);
        }
    }
    return joinWords.join(" ");
}


//TODO returns "This is rehtona test"
spinWords( "This is another test" );


//tidier solution:
function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}