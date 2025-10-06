// const jobprofile = {
//     prfofile_name : "SDE",
//     location: "ARM",
//     year: 2023,
//     Education:"Btech"
// }
// let profile = jobprofile.prfofile_name;

//profile = "Web Developer";

// console.log(profile);
// let {prfofile_name:var1,location:var2,...restprops} = jobprofile;
// console.log(var1,var2);
// console.log(restprops);
//Object destructuring amin concepts,

//* Objects insides array

const users = [
  { userid: 1, fname: "Sm", gender: "male" },
  { userid: 2, fname: "Ts", gender: "male" },
  { userid: 3, fname: "Kl", gender: "female" },
];

// for(let i of users){
//     console.log(i);
// }

//* Nested destructuring

const [a1, a2, a3] = users;
console.log(a1);
//Now let's another level of destructuring

const [{ fname }, , { gender: diff_variable_name }] = users;
console.log(fname, diff_variable_name);

//Just for practice another declare
const student = [
  { student_id: 1, student_name: "ASR", student_age: 18 },
  { student_id: 2, student_name: "PSG", student_age: 25 },
];

const [{ student_id: id }, ...rest] = student;
console.log(id);
console.log(rest);
