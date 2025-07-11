//modern loops 
const arrayItems = ["param1","parma2","param3"];
const numberItems = [12,32,43,23,12];

//now for iterate over the array of strings
for(const item of arrayItems){
    // console.log(item);
}

//advanced loop concept
let filteredItems = arrayItems.filter((item) => item === "param");
filteredItems = numberItems.sort((a,b) => b-a);
// console.log(filteredItems);

//fetch some data from api

//right now it only create promise... due to asynchronous nature of javascript

const fetchData = async() => {
    const response =  await fetch("https://reqres.in/api/users?page=2");

    const data = await response.json();
    const fullData = data.data;
    console.log(fullData);
}
fetchData(); //calling the function

//callstack, event loop, and web API
//Single threaded-> Javascript can do one thing at a time

function stack1(){
    console.log("Stack 1");
}

function stack2(){
    console.log("Stack 2");
}
setTimeOutFunction() //asynchronous non blocking behavior   
stack1();
stack2();
//one after another function execution synchronous nature

//setTimeout use
//after 2 sec callback will push the code in callback queue.
function setTimeOutFunction(){
    setTimeout(() => {
        console.log("Set Time Out Function");
    },2000)
}
