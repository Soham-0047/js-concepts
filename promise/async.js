import axios from "axios";

//example of async code
async function globalCalling(){
    //await pauses execution until it got settled
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const responseJson = await response.json();
    console.log(responseJson);

}
// globalCalling();

//now example of chaining the API calls

const multipleAiCalls = async() => {
    try{
        const allUsers = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!allUsers.ok) throw new Error ("Error in fetching data");
        const userJsonData = await allUsers.json();
        console.log(userJsonData);
        
        const fetchbyId =  await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userJsonData.id}`);
        const fetchbyIdJson = await fetchbyId.json();
        console.log(fetchbyIdJson);
    } catch(error){
        console.log(error);
    }
}

// multipleAiCalls();

//parallel API calls requests:

// const getParallelRequests = async() => {
//     try {
//         //array destructring
//         const [user, posts] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/1"), fetch("https://jsonplaceholder.typicode.com/posts?userId=1")]);
//         if(!user.ok || !posts.ok) throw new Error("Error in fetching data");

//         const userJson = await user.json();
//         const postsJson = await posts.json();
//         console.log(userJson, postsJson);
//     } catch(error) {
//         console.log(error);
//     }
// }

// getParallelRequests();

//use axios

const axiosAllPromises = async() => {
    const [user,posts] = await Promise.all([axios.get("https://jsonplaceholder.typicode.com/users/1"), axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")]);
    console.log(user.data, posts.data);
}

// axiosAllPromises();

//axios bascially promise HTTP client 
//diff http methods for axios 
// PUT- update the full resource, PATCH- update the partieal resource out of it.
// HEAD - get the response headers 

//POST request
const postAxios = async() => {
    try {
        const axiosReponse =  await axios.post("https://jsonplaceholder.typicode.com/posts", {title: "foo", body: "bar", userId: 1});
        console.log(axiosReponse.data);
    } catch(error) {
        console.log(error)
    }
}

//Another way for POST request
function anotherAxios() {
    axios.post("https://jsonplaceholder.typicode.com/posts", {title: "foo", body: "bar", userId: 1,any: 34}).then(res => console.log(res.data)).catch(err => console.log(err));
}

// anotherAxios();
// postAxios();

