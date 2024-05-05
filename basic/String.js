let str = `This is a string and here comes the concept of String Interpolation`

// Length is the first method you must know.

console.log(str.length)

// to insert a double quote or single quote in a String 

console.log("this way you can use double quote \"double quote\"")

console.log(str.charAt(3));
console.log(str.charCodeAt(3));
console.log(str.at(3));
console.log(str[3]);


// to extract part of String we have 3 methods      slice()  substr()   substring()

slice = str.slice(2,8);         // with single parameter it will provide the string in b/w
slice2 = str.slice(8);          // now it will give the string after 8 th parameter
slice3 = str.slice(-8)          // it will return the last 8 digit
slice4 = str.slice(-8, -5);     // if the values are -ve returns the values in b/w other wise does not give any value.

console.log(slice)
console.log(slice2)
console.log(slice3)
console.log(slice4)

console.log(str)

substr = str.substring(2,8);            // substring and slice are same but in substring -ve values are not treated
console.log(substr)
console.log(str)

substring = str.substr(2,8);            // substr is similar but the second parameter tells the no. of character after the first index (length)
console.log(substring)
console.log(str)


//  toUpperCase   toLowerCase   concat     trim     trimStart   trimEnd     

let padStar = slice.padEnd(4, "1");      // to give padding at the start.
console.log(padStar);  


//  repeat   replace    replaceAll  split 

let split = str.split(" ");         // returns an array
console.log(split);



// indexOf()        lastIndexOf()      search()   includes  match   startsWith      endsWith


