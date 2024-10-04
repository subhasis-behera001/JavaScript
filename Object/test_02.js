//============OBJECTS===========


//through constructor
//const obj1=new Object()//singleton objecct



const obj2={}//non-singleton object
console.log(obj2)
obj2.name1="sipu"
obj2.age1=21
obj2.email1="subhasisbeherasipu@gmail.com"                      //(Nested object)
//console.log(obj2)
let obj={
    name:"Subhasis",
    age:22,
    email:"subhasisbehera001@gmail.com",
    "full name":"Subhasis Behera",
   

}
//let obj3=Object.assign({},obj,obj2)
let obj4={...obj,...obj2}//sprad operator
//console.log(obj4)

//========================IMPORTANT=============================

console.log(Object.keys(obj))//the datatype of the output is array type so we can pick the elements by using the indexes
console.log(Object.values(obj))//output datatype is also an array type
console.log(Object.entries(obj))//output datatype is also an array type

//Array of objects
let obj5=[
    {
        name2:"taian"
    },
    {
        age2:10
    },
    {
        hobby:"playing cricket"
    }
]
console.log(obj5[0].name2)
console.log(obj5[1].age2)
console.log(obj5[2]["hobby"])


//if we have to check that the specific object has the specific property or not
console.log(obj5.hasOwnProperty(2))