//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript


//my working solution
function domainName(url) {
    const urlCheck = url.toLowerCase();
    if (urlCheck.includes("http") && urlCheck.includes("www")) {
        console.log(urlCheck.split("//")[1].split(".")[1]);
        return urlCheck.split("//")[1].split(".")[1];
    } else if (urlCheck.includes("http")){
        console.log(urlCheck.split("/")[2].split(".")[0]);
        return urlCheck.split("/")[2].split(".")[0];
    } else if(urlCheck.includes("www")) {
        console.log(urlCheck.split(".")[1]);
        return urlCheck.split(".")[1];
    } else {
        console.log(urlCheck.split(".")[0]);
        return urlCheck.split(".")[0];
    }
}


//highest ranked solution
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};


//tests
domainName("hTtp://gitHub.com/carbonfive/raygun");
domainName("www.Xakep.Ru/test");
domainName("http://www.Xakep.Ru/test");
domainName("Xakep.Ru/test");



//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"