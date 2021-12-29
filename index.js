// Code your solutions in this file

//const names = ["Charlie", "Samip", "Ali"];
//const celebration = "birthday";
const names = [];
const celebration = "";
const thankYou = [];

function writeCards(names, celebration) {
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
        debugger;
    }
    return thankYou;
}

writeCards(names, celebration);

const number = "";

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(number);