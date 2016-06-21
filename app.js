//Hillary and Brian, June 21st, Peer Challenge!!

var provided = 'Hello World!';

console.log(Number(new Boolean(provided)));//Step 1
console.log(Number(provided));//Step 2
console.log(provided.substring(0,5).split(''));//Step 3
console.log(typeof provided);//Step 4
console.log(provided.substring(0,9).length);//Step 5
console.log(provided.charAt(1));//Step 6
console.log(provided.toUpperCase());//Step 7
console.log(provided.replace('!', '?'));//Step 8

//HARD MODE
console.log(provided.substring(0,5).replace("H","'"));//Step 9
console.log(provided.split('').reverse().join(''));//Step 10

console.log(provided.substring(0,4).replace('Hell', '1111'));//Step 11
console.log(provided.substring(0,4).split('').map(function(num){return num = '1';}).join(''));//Step 11 (again!)

console.log(provided.split(' '));//Step 12
