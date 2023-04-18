// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    return string.toLowerCase().includes(
        "a" && "b" && "c" && "d" && "e" && "f" && "g" && "h" && "i" && "j" && "k" && "l" && "m" && "n" && "o" && "p" && "q" && "r" && "s" && "t" && "u" && "v" && "w" && "x" && "y" && "z"
    ) && string.length >= 26;
}

//console.log(isPangram("AB"));

//-----
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    return words.split(" ").sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));