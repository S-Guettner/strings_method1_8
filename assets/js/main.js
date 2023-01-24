const text = "Sam is going to codingschool";
let changedText = text.replace("codingschool","school")

let upperCase = changedText.toUpperCase();
console.log(upperCase);

let lowerCase = changedText.toLowerCase();
console.log(lowerCase);

let firstUpper = changedText.slice(0,3).toUpperCase();
let lastUpper = changedText.slice(16,23).toUpperCase();
let middle = changedText.slice(4,15)
console.log(middle);
console.log(firstUpper);
console.log(lastUpper);

let firstLastUpper =  `${firstUpper} ${middle} ${lastUpper}`
console.log(firstLastUpper);

let middleUpper = `${firstUpper.toLowerCase()} ${middle.toUpperCase()} ${lastUpper.toLowerCase()}`
console.log(middleUpper);

/* let letterI = changedText.charAt(4).toUpperCase();
console.log(letterI);
let letterG = changedText.charAt(7).toUpperCase();
console.log(letterG);
let letterT = changedText.charAt(13).toUpperCase();
console.log(letterT);
 */
let firstCharUpper = text.slice(0,3) + ' ' + text.slice(4, 5).toUpperCase() + text.slice(5, 6) + ' ' + text.slice(7, 8).toUpperCase() + text.slice(8, 12) + ' ' + text.slice(13, 14).toUpperCase() + text.slice(14, 15) + ' ' + text.slice(16, 17).toUpperCase() + text.slice(17,23);
console.log(firstCharUpper);






