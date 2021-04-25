
// ****************Calculator************************


// var num1 = parseInt(prompt("Enter the first value"));
// var num2 = parseInt(prompt("Enter the second value"));
// var sign = prompt("Enter the sign for calculation");



// if (sign === "+"){
//     alert(num1 + num2);
// }else if(sign === "-"){
//     alert(num1 - num2);
// }else if (sign === "*"){
//     alert(num1 * num2);
// }else if (sign === "**"){
//  alert(num1 ** num2);
// }else{
//     alert("worng sign");
// }



// **********************Percentage Calculator*****************


var course1 = parseInt(prompt("Enter score: course 1"));
var course2 = parseInt(prompt("Enter score: course 2"));
var course3 = parseInt(prompt("Enter score: course 3"));
var course4 = parseInt(prompt("Enter score: course 4"));
var course5 = parseInt(prompt("Enter score: course 5"));


var obtainedScore = (course1 + course2 + course3 + course4 + course5) ;
alert(obtainedScore);
var totalScore = obtainedScore * 100 / 500;
// alert(totalScore);

alert("Total Score in percentage = " + totalScore);

