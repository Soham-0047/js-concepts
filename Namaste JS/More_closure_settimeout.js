let i1 =12;

var a1 = 34;

// function z(){
// setTimeout( ()=>{
//     console.log(i);
// },1000);
// console.log("Doglus Makers");
// }
// z();
// console.log(34);

//Now for the another example of closure
//It will run the loop again 
//

// function k(){
//     //Now replace the var with let
//     //let create separate block copy and print different every times 

//      for(let i=1;i<=5;i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }

//     console.log("This is a scope based closure"); 
// }
// k();


//Now using closure
//Let's create a function which implement closure
//In this case we don't use let but use var 
//So if someone wan to print the i iteratively the they should be provid ethe function within the a loop
//suppose deifne the function like as

function s(){

    for(var i=1;i<=5;i++){

        //Declare a close function which will take he i and each time when the loop will be called then it will crate a separate blok each time 

        function close(p){

            //Now declare the setTimeout function 

            setTimeout(()=>{
                console.log(p)
            },p*1000)
        }

        close(i)
    }
    console.log("prints the same thing");
}

s();

    



