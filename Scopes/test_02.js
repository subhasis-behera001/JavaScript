//child block can use the varibles of the parent block but vice versa is not possible
//addone(3) it gives error bcz of hoisting
const addone=function(num)
{
    return num+1;
}
//addone(4) it didn't give any error
console.log(addone(3))//4

