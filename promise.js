
const cart = ["shoes", "socks", "watches" ]

const promise = createOrder(cart);
console.log(promise);

promise.then((orderId)=>{
    console.log(orderId);
    return orderId;

}).catch(function (err){
    console.log(err.message);
})
.then((orderId)=>{
    return proccedToPayment(orderId);
}).then(function(paymentInfo){
    console.log(paymentInfo)
})


//  how to create a promise

function createOrder( cart){

    const promise = new Promise((resolve, reject)=>{

        if(!validateCart(cart)){

            const err = new Error("Cart is not validated");
            reject(err);
        }

        setTimeout(function(){
            resolve(orderId);
        }, 5000);
        const orderId = "12344";

        
    })

    return promise;
}


function validateCart(cart){
    return false;
}

function proccedToPayment(orderId){

    const promise = new Promise(function(resolve, reject){

        if(false){

            reject(new Error("Error is in procced payment"));
        }

        const ans = "some string";
        resolve(ans);
    })

        return promise;
    
}
