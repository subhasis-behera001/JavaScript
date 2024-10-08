//==============Scopes=================
if(true){
    let a=29;
    const b=84;
    var c=82;
}

//console.log(a)          this two gives error bcz we declare the variable inside the if condition but trying to use it outside the if block
//console.log(b)
console.log(c)  // it should also give error but it didn't 

// The variables declared within the {} is comes under the block scope and except that all are comes under the global scope
