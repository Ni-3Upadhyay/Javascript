const radius = [2,3,4,5];
const areaArray = [];

const calculateArea = function (radius){
    return Math.PI * radius * radius;
}

const calculateCircumfrence = function (radius){
    return 2* Math.PI * radius;
}

 function area (radius, calculate){
    for(let i = 0; i< radius.length; i++){
        areaArray.push(Math.floor(calculate(radius[i])));
    }
}

area(radius, calculateCircumfrence);

console.log(areaArray);