//  Form needs a submit type event it.

const form = document.querySelector('form');

// we got the form element, now when someone submits it. It will be sent with the URL.
// so we need to prevent the default behaviour of the form.

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');
    // console.log(typeof (height.value));         // we got string type of value here input returns the value in string.
    // so by using parseInt we have converted the values to integer.
    
    console.log(height, weight);
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please provide a valid height";
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;
    }


})