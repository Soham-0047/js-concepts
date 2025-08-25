//Temporal dead zone
//Let and const also hoisted in browse

//So bascially when we write let or const then also some memory allocate for variable. But not in global space, it's allocate in different memory location and we can't access it until we assign some value in it.

//Time between the let variable hoisted and time when intialize it's value known  as temporal dead zone


// u = u*678;       //[ TEMPORAL 
// console.log(u); //[ DEAD ZONE
// let u=58;


// let g =56; // can not be accesible by windo.g == undefine

// var r=56; // can be accesed with window object

// let u;

// const u1 = 54;
// console.log(u1)

// const u2 =78;
// u2 =98; //type-error



