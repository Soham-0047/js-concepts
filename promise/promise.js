
//how the promise will work
//promises are handled by microtask queue...
//simple promise usin API implementation...

function fecthDataPromise(){
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
}

fecthDataPromise();

const fetchDataAny = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err =>  console.log(err))
}
fetchDataAny();
//diff types of promises
//Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()

//Promises are handled in a microtask queue
