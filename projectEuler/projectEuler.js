// Not actually a project Euler problem
// Instructions:
// write a loop to console.log all of the 
// even numbers between 1 and 100
// if odd do nothing


var evenOnly = function () {
    for(var i = 1; i <= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

// The famous Fizz buzz challenge

var fizzBuzz = function (i) {
     if (i % 15 === 0) {
       console.log("Fizz buzz");
   } else if (i % 3 === 0) {
       console.log("Fizz");
   } else if (i % 5 === 0) {
       console.log("buzz");
   }

}