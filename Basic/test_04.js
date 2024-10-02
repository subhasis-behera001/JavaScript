/*
conversion and operations
 */
let num=69
console.log(typeof num)
let str=String(num)
console.log(typeof str)
let num1="256a"
let str1=Number(num1)
console.log(typeof str1)
console.log(str1)
//NaN stands for Not a Number (if we want to convert non number type to number type then in the output of its type is given as NaN(ex-undefined->Number))
//"69"=>69
//"sipu"=>NaN


/*
truthy value-when we convert any type to the boolean type if it gives true then its a truthy value.
falsy value -when we convert any type to the boolean type if it giver false then we call it as falsy value.(false,0,"",NaN,undefined ,null)
*/

/*
type conversion-manually converting one datatype to another datatype.
type coercion-automaticallu converts one datatype to another.
*/