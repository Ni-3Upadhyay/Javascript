
const array = [1,21,13,4,5];

const output = array.map((val)=> val*2
      
)

console.log(array);
console.log(output);


const ans = array.filter((val)=> {
    return (val%2==0);
})


console.log(ans);
console.log(array);

const sum = array.reduce((val, ans)=>{
     if(ans > val){
        val = ans;
     }
    return val;
},0)

console.log(array)
console.log(sum)

const studentData = [
    {name : "rahul", class : 30, lname : "joshi"},
    {name : "vikas", class : 40, lname : "joshi"},
    {name : "rahul", class : 10, lname : "joshi"},
    {name : "vivek", class : 50, lname : "joshi"},
    {name : "rohit", class : 10, lname : "joshi"},
]

const name = studentData.map((val)=>{
    return val.name + ' ' + val.lname;
})

console.log(name);

const age = studentData.filter((val)=>{
    return val.class > 30
}).map((val)=>val.name + val.lname);

console.log(age);


const age_no = studentData.reduce((accumulator, current)=>{
    
    if(accumulator[current.class]){
        ++accumulator[current.class]
    }else{
        accumulator[current.class] = 1;
    }
    
    return accumulator;
}, {})

console.log(age_no);


const cart = ["object1", "object2"];

// api.createOrder(cart, function(){

//     api.proceedToPyament(function(){

//         api.showOrderSummary(function(){
//             api.updateWallet();
//         })
//     })
// }){

// }


function data(cart, another){
    console.log(cart);
    another();

}

function cart4val(varl) {
    console.log("is this function running")
    varl();
}


 data(cart ,()=>{
    console.log("is it runs");
    cart4val(()=>{
        console.log("cart is printed or not");
    })
} )


