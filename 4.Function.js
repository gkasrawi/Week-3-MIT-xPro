4.Function
//Function (or local) scope refers to data stored in variables that are declared inside of a function and are only avaiable to be accessed inside of said function.
//Functions allow us to run the same peice of code from multiple places in JavaScript without having to copy and paste into a function w/ ease of assigning a simple name.

function getCars(){                    // function declared
    var cars = ["Audi", "BMW", "FOrd"] // variable var cars = ["Audi", "BMW", "FOrd"] accessable within function get cars.
    console.log("cars");               //logging to the console variable (cars)
}

getCars();                             // function expressed in editor, only available within said local scope. 
>>["Audi", "BMW", "Ford"];

console.log("cars");                                //logging to the console variable (cars) 
>>uncaught ReferenceError: cars is not defined      //logging to the console variable (cars) resulted in Reference error as said variable could only be accessed within previous function expression.