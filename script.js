// console.log("something"); //To print normal message
// console.error("ERROR"); //To print error message

//Variable names can only contain letters, digits,underscores, and dollar signs.
// let b1;

//Allowed symbols in the start for naming a variable
// let $a;
// let _a;

// let @a; //Not allowed

// Variable names cannot start with a digit
// let 1b; //Not allowed

//Variables names are case-sensitive
// let a;
// let A;

// var,let,const

// var (global scope) - Redeclare and ReIntialize
// let (block scope)- Can't Redeclare but ReIntialize (can only be declared without initializing)
// const (block scope)- Neither Redeclare nor ReIntialize (have to be declared and initialized)

// var variableVar = "VAR";
// console.log(variableVar);

// var variableVar = "VAR2";
// console.log(variableVar);

// let variableLet = "LET";
// console.log(variableLet);

// variableLet = "LETNEW";
// console.log(variableLet)

// let variableLet = "LET2";
// console.log(variableLet);

// const variableConst = "CONST";
// console.log(variableConst);

// variableConst = "NEWCONST";
// console.log(variableConst);

// const variableConst = "CONST";
// console.log(variableConst);

// {
//   const z = 10;
// }

// console.log(z);

// Primitive Data types
// Numbers (e.g. 10, 3.14)
// Strings (e.g. "hello", 'world')
// Booleans (e.g. true, false)
// Null (a special value that represents an absence of value)
// Undefined (a special value that represents an uninitialized variable)
// Symbol

// Non primitive Data types
// Object
// Array
// Regex Exp

// Arithmetic operators (e.g. +, -, *, /, %, **)
// Comparison operators (e.g. >, <, >=, <=, ==, ===, !=,!==)
// Loose Equality and Strict Equality.
// Logical operators (e.g. &&, ||, !)
// Assignment operators (e.g. =, +=, -=, *=, /=)
// Conditional (ternary) operator (e.g. ?,:)

// FALSY Values
// false
// 0 (zero)
// "", '', `` (empty strings)
// null
// undefined
// NaN (not a number)

// Note : Empty array ([]) or object ({}) is not falsy.

//Primitive data types
// let str = "String";
// let num = 10;
// let bool = false;
// let undef = undefined;
// let nullVal = null;

// console.log("value: " + str, "type: " + typeof str);
// console.log("value: " + num, "type: " + typeof num);
// console.log("value: " + bool, "type: " + typeof bool);
// console.log("value: " + undef, "type: " + typeof undef);
// console.log("value: " + nullVal, "type: " + typeof nullVal);

//Non-primitive data types
// let obj = { name: "string" };
// let arr = [1,2,3];

// console.log("value: " + obj.name, "type: " + typeof obj);

// console.log("value: " + arr, "type: " + typeof arr);

// let a = 10; //type number
// let b = "10"; //type string

// //Loose Equality
// console.log(a == b); //true

// //Strict Equality
// console.log(a === b); //false (also checking for data type)

// let a = ""; //false

// if (a) {
//   console.log("a is not empty");
// } else {
//   console.log("a is empty");
// }

// let arr = []; //true

// let b = "";
// console.log(!!b);

// console.log(!!arr)

// let abc = false;

// if (abc) {
//   console.log("abc is true");
// } else {
//     console.log("abc is false");
// }

// let age = -1;

// if (age > 0 && age < 10) {
//   console.log("Age is valid");
// } else if (age >= 10 && age < 14) {
//     console.log("You are kid");
// } else if (age >=14 && age < 18) {
//     console.log("You are not a kid but you can't drive.");
// } else if (age >=18) {
//     console.log("You can drive")
// } else {
//     console.log("Age is not valid");
// }

//for loops
// for (traditional)
// for in
// for of
// forEach

// let arr1 = ["one", "two", "three", "four"];

//traditional for loop
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// for in loop
// for (let key in arr1) {
//   const value = arr1[key];
//   console.log(key);
//   console.log(value);
// }

// for in loop
// for (let val of arr1) {
//   console.log(val);
// }

// forEach loop
// arr1.forEach(function(value,i) {
//     console.log(value,i)
// });

// while loop
// let x = 0;
// while (x<10) {
//     console.log("x is less than 10");
//     x++;
// }

// do {
//     console.log("x is less than 2")
//     x++;
// } while (x<2);

//functions
// let a, b, c;

// function sum(a, c,b = 5) {
//   const sum = a + b + c;
//   return sum;
// }

// const sum = (a, c, b = 5) => {
//   const sum = a + b + c;
//   return sum;
// };

// const sumVal = sum(a = 10 , b = 6, c = 7);
// const sumVal = sum(10, 9);
// console.log(sumVal);
// console.log(sum.length);

// function regularFunc (cb) {
//     console.log("regular function");
//     cb();
// }

// regularFunc(function callBAckFunc(){
//     console.log("callback function");
// });

//closure
// function outerFunct() {
//   let x = 1;
//   console.log("Outer function", x);
//   return function innerFunct() {
//     console.log("inner function", x);
//   };
// }

// const innerFunct = outerFunct();
// innerFunct();

// variable hoisting vs function hoisting

// console.log(hoistedVariable);

// var hoistedVariable = "something";
// let hoistedVariable = "something";
// const hoistedVariable = "something";
// console.log(hoistedVariable);

// const data = hoistedFunc();
// console.log(data);

// function hoistedFunc () {
//     return 10;
// }

//String in detail
// let str1 = "abc";
// let str2 = 'def';
// let str3 = `xyz`;

// let str4 = "I'm";
// let str5 = 'I'm'; //Not correct
// let str5 = 'I\'m';

//escape sequence characters
// \'
// \"
// \\
// \/
// \f
// \n
// \r
// \t
// \v
// \b

// const v = "good"
// const strLiteral = `I'm ${v}`;
// console.log(strLiteral)

// const uc = str1.toUpperCase();
// console.log(uc);
// console.log(str1);

// const sliced = str1.slice(0,2);
// console.log(sliced);

// let str5 = "abc def ghi";
// console.log(str5.split(" "))

//Array in detail
// const arr1 = [];

// arr1[0] = "abc";
// arr1[1] = "def";
// arr1[2] = "ghi";

// const arr2 = ["abc", "def", "ghi"];

// console.log(arr2);

// const arr3 = new Array();
// const arr4 = new Array(4);
// const arr5 = new Array("abc", "def", "ghi");

// arr2[0] = "new Value";
// console.log(arr2);

// arr2.push("new Value");
// console.log(arr2);

// arr2.pop();
// console.log(arr2);

// arr2.unshift("new Value");
// console.log(arr2);

// arr2.shift();
// console.log(arr2);

// const arr = [1, 2, 3];

// const zeroIdx = arr[0];
// const firstIdx = arr[1];
// const secondIdx = arr[2];

// const arr4 = [zeroIdx, firstIdx, secondIdx];

// const arr4 = [...arr];

//Map,filter,reduce -> returns a new array

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array);
// const newArr = array.map(function (value) {
//   return value * 2;
// });

// console.log(newArr);

//filter
// const filteredArray = array.filter((value) => {
//   return value > 5;
// });

// console.log(filteredArray);

//reduce
// const reducedArray = array.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(reducedArray);

//Object in detail
// const obj1 = {};

// obj1.name = "Aniket";

// console.log(obj1);

// const obj2 = {
//   name: {
//     firstName: "Aniket",
//     lastNAme: "Raj",
//   },
//   phone: 1234,
// };

// console.log(obj2.name);

//Value (Primitive Data types) vs Reference (Non Primitive Data types)
// let a = 10;

// let b = a; // value Copy

// console.log("A: " + a);

// console.log("B: " + b);

// b = 20;

// console.log("NEW A: " + a);

// console.log("NEW B: " + b);

//Shallow Clone vs Deep Clone
// let array1 = [1, 2, 3];

// let array2 = array1; //Reference Copy

// let array2 = [...array1]; //1st method -> Value Copy
// let array2 = array1.slice(0); //2nd method -> Value Copy

// array2.push(4);

// console.log("ARRAY1: " + array1);
// console.log("ARRAY2: " + array2);

// let object1 = {
//   name: {
//     firstName: "Aniket",
//     lastNAme: "Raj",
//   },
//   phone: 1234,
// };

// let object2 = {...object1}; //1st method -> Shallow cloning
// let object2 = Object.assign({}, object1); //2nd method

// let object2 = {name : {...object1.name} , ...object1}; //1st method -> Deep cloning
// let object2 = JSON.parse(JSON.stringify(object1)); //2nd method -> Deep cloning

// console.log("NEW OBJECT1: " + JSON.stringify(object1));
// console.log("NEW OBJECT2: " + JSON.stringify(object2));

// object2.phone = 676987; //main field of object2
// object2.name.firstName = "John"; //new field of object2
// console.log("OBJECT1: " + JSON.stringify(object1));
// console.log("OBJECT2: " + JSON.stringify(object2));
