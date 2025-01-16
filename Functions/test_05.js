//<=============== FUNCTIONS ==================>

//if we want to pass multiple number of arguement
function multNum(...num)
{
    return num
}

console.log(multNum(9,3,2))//[9,3,2]


let student={
    name:"sipu",
    rollno:1
}

function studentInfo(obj)
{
    console.log(`Student name is ${obj.name} and has roll no.${obj.rollno}`)
}
studentInfo(student)
//or
studentInfo({
    name:"cpu",
    rollno:2
})
//same goes for the array also