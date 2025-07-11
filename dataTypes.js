//there are two types of data types in javaascript
// var - function scoped, let- block scoped, const- block scoped not mutable
//temporal dead zone initialize before assign
console.log({outSideVar},"Temp Dead Zone");
var outSideVar = 12;
const outSideConst = 923;
function tmpFunction1(){
    let insideLet = 13;
    console.log({outSideVar},{insideLet},{outSideConst},"Calling From Inside Function");
    return;
}
//calll function here
tmpFunction1();
console.log("Calling From Outside Function",{outSideVar});


