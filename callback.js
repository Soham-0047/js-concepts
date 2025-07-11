//continue with callbacks concept
//callback is just a function which is passed as argument to another function

function parentFunction(callbackCalling){
    console.log("Parent Function");
    callbackCalling();
}
function callbackCalling(){
    console.log("Callback Function");
}
parentFunction(callbackCalling);

//callback with timeout series 
//callback inside callback and deeply nested 
function parentCallback(callback,
    anotherCllback = (
        another2callback = () => {
            console.log("3");
        }
    ) => {
        console.log("2");
        another2callback();
    }
){
    console.log("1");
    setTimeout(() => {
        //callback called
        callback();
        anotherCllback();
    },2000)
}

function callback(){
    console.log("Function calling....")
}
parentCallback(callback);

// promise: promise is an object that represnt completion or failure of  an asynchronous function

//state of the promis:  pending, fulfilled, rejected....

//create promise
const promise = new Promise((resolve,reject) => {
    let isSuccess = true;
    if(isSuccess){
        resolve("Promise is fulfilled");
    } else {
        reject("Error in promise");
    }
})
