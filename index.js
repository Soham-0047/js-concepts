//define immediately invoked function
const funcImmInvoked  = (() => {
    console.log("Immediately Invoked Function");
    let newVar = 23;
    return newVar;
})();

console.log(funcImmInvoked);
