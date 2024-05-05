"use strict";                                       // is used so that your code must follow new standard.


const accountId = 144453;
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
let accountCity = "jaipur";

console.table([accountEmail, accountId, accountPassword, accountCity])


// Types of datatypes 
// Primitive --> String number boolean null undefined Symbol BigInt     (are call by value)
// non-primitive  --> Objects Arrays Functions (are call by refrence)

// Stack            or           Heap Memory

// Stack  --> Primitive data types are stored in Stack  --> stack returns value.
// head   --> non-primitive are store in heap --> heap memory return refrences.



// String Interpolation :- ` the data written inisde backticks is known as String interpolation write the variable in ${} `


//  slice and splice 

const value = "This is a string"

const usingSlice = value.slice(0,9);

console.log(usingSlice + "  --> " + value);

// const usingSplice = value.(0,4);
