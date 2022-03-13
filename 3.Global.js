3.Global Scope
// Global scope refers to data stored in variables that are accessible anywhere in your program. 
// Globally scoped variables are declared outside of a function, but are of are avaiable inside any of the functions in  your program.
// The variables serve as a name to a value, undefined will return when the command doesnt return a value. 
// The three types of variable scope we've dicussed in Javascript are global, function, and block. 
var cars = ["Audi", "BMW", "Ford"];      // variable var cars = ["Audi", "BMW", "Ford"] accessable within function get cars.
console.log("cars");                     //logging to the console variable (cars)
function getCars () {                    // function declared getCars
    console.log(cars);                   //logging to the console  to express variable (cars) within said function of getCars
}
getCars();                               // function getCars expressed to the editor. 
>>["Audi", "BMW", "Ford"]                // resulting string value["Audi", "BMW", "Ford"]  of expressed function getCars.
console.log(cars);                       //logging to the console variable (cars)  
>>["Audi", "BMW", "Ford"]                // resulting string value["Audi", "BMW", "Ford"]  of previously expressed variable cars is still accessable outside of local scope.  
