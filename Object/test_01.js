//<================OBJECTS=================>
    /**
     * We can declare objects by two methods 1->like literals
     *                                       2->like constructor(it is singleton if we declare it like constructor)
     *                                              object.create
     */
    // Object literals//
    
//Object =>collection of key and value pair
let mysymbol=Symbol("cpu")
let obj={
    name:"Subhasis",
    age:22,
    email:"subhasisbehera001@gmail.com",
    "full name":"Subhasis Behera",
    mysymbol:"cpu1",//wrong way of declaring a symbol type in object if we want to fetch the datatype of this it would give "String"
    [mysymbol]:"cpu2"

}//like literals
console.log(obj.email)
console.log(obj["email"])
console.log(obj["full name"])
console.log(typeof obj.mysymbol)//String
console.log( obj[mysymbol])//cpu2
//how to change the value
obj.email="subasisbehera002@gmail.com"
console.log(obj["email"])
//if you don't want any one to change the object value
//Object.freeze(obj)
//obj.email="subasisbehera003@gmail.com"
console.log(obj)
obj.n1=function()
{
    console.log(`Hello ${this["full name"]}`)//here this keyword refers to the object
}
console.log(obj.n1())
