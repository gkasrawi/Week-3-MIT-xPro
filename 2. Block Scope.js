2. Block Scope. 
//Block scope refers to variables which are declared using the keyword let.
//and are only available inside the block of code inside the function in which they are declared.

function hey(){
    var bar = 1;            //variable declaration 
    if(bar < 10){           //arithmetic  expression 
        let baz = "hello!"  //variable with "if" statement declared; only available within this function
    console.log(baz);       //logging to the console variable (baz)
    console.log(baz);       //logging to the console variable (baz)
    bar++;                  // ++ refers to the increment notion of passing variable "bar" to see if it is (< 10).
}else(
    let baz = "goodbye."    // else portion of statement method, having variable "baz" hold a string value of "goodbye." 
    console.log(baz);       //logging to the console variable (baz)
    }
}
>>hello!                   //variable let baz = hello! within "if" statement declared earlier successfully logged into console. 

function hey(){             //function declaration 
    var bar = 10;           //variable declaration 
        if(bar < 10){       //arithmetic  expression if variable bar is less than ten pass into console string value of "hello!"
        let baz = "hello!"  //variable with "if" statement declared; only available within this function  
        console.log(baz);   //logging to the console variable (baz)
        bar++;              // ++ refers to the increment notion of passing variable "bar" to see if it is (< 10).
    }else{
        let baz = "goodbye."// else portion of statement method, having variable "baz" hold a string value of "goodbye."  
        console.log(baz);   //logging to the console variable (baz)
    }
}

>>goodbye.                  //variable let baz = goodbye. within "else" statement declared in second part of function successfully logged into console.