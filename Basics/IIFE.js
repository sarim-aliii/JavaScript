// Immediately invoked function expression

(function chai(){
    console.log("DB CONNECTED");
})();                                 // ; is important bcz without this the below code will not execute


( () => {
    console.log("DB CONNECTED");
} )();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )("Sarim")