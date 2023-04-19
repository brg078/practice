//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

//my passed attempt
function toCamelCase(str){
    if (str === ''){
        return '';
    } else {
        const camel = str.split(/-|_/);
        let returner = [camel[0]];
        for (i=1; i<camel.length; i++){
            returner.push(camel[i].charAt(0).toUpperCase() + camel[i].slice(1));
        }
        return returner.join('');
    }
}


//best answer
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}


console.log(toCamelCase(''));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));