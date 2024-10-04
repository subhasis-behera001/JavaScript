//<-------------Array------------->
let arr=[0,1,1,2,34,343]
//console.log(arr)
let myarr=new Array(3,3,32,2,435,21,7)
//console.log(myarr)
/**
 * push()
 * pop()
 * shift()
 * unshift()
 * includes()
 * indexof()
 * join()---->converts the array into string
 * slice()-->it does not manupulate the original array and includes the starting range ,doesn't includes the ending range
 * splice()--->it manupulate the original array and includes both starting and ending range
 * concat()--->combines 2 array and gives a new array
 * spread operator ...arr1,...arr2 and it combines the 2 array
 * flat()--> [9,4,3,2,1,[4,3,6],5]==>[9,4,3,2,1,4,3,6,5]
 * isArray()-->checks if it is a array or not 
 * from()==>converts a string to an array
 * Array.of()-->converts into a new array from a set of elements(like variables,arrays,etc.)
 */
let arr2=[0,3,2,1,4,5,6,7]
//console.log(arr2.slice(0,3))//0,3,2
//console.log(arr2)//original array
let a=arr2.slice(1,3)
console.log(a)//3,2
console.log(arr2)//original array
let b=arr2.splice(1,3)
console.log(b)//3,2,1
console.log(arr2)//[0,4,5,6,7]

