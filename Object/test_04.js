//<===========================  FUNCTIONS  =============================>

function Myname(){
    console.log("Subhasis Behera")
}
Myname//refference
Myname()//execution
            // ____________>Parameters
          // /
function add(a,b)                                                         
{
    console.log(a+b)
}

add(3,3)
    // \_______>Arguements


function sub(c,d){
    console.log(c-d)
}

let res=sub(5-3)
console.log(res)//it will print undefined because the function didn't return anything that we possibly could store in the res variable
//if we didn't pass any value as arguement to the function then it would return "undefined" as result.
