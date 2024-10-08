//=================  Arrow functions  ========================
// this reffers to the current contex 

let school={
    sname:"Synergy",
    "reg no":2001230029,
    fn:function nm()
    {
        console.log(this.sname)
    }
}
school.fn()//Synergy
school.sname="Bhargabi"
school.fn()//Bhargabi


// Practice the use of "this" keyword in function declaration, normal funtion and arrow function 

// syntax of arrow function let/const varible_name= () =>{ contex } 
//implicit , explicit return in arrow function