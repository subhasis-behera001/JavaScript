//FOR OF LOOP
let ar=[1,2,3,4,5,5,6,7]
for (const i of ar) {
    //console.log(i)
}
//works for arrays ,strings,etc.

//map (same as of the object but with no duplicate values)

const map=new Map();
map.set('IN',"INDIA")
map.set('CHN',"CHINA")
for (const key of map) {
    //console.log(key)
    
}
//FOR OF LOOP DOES NOT WORK FOR THE OBJECTS FOR OBJECTS WE HAVE TO USE THE FOR IN LOOP
//================FOR IN========================
let myobj={
    'j':"java",
    'CPP':"c plus plus",
    'py':"python"
}
for (const key in myobj) {
    //console.log(`for the key ${key} the value is ${myobj[key]}`);
}
//

for (const key in ar) {
    //console.log(ar[key]);//we have to specify the array name then the key to print the values,other wise it only prints the key not the values.
}
//for in loop does not work for maps because the maps are not itteratable.



//==============FOR EACH LOOP=============

const arr=["js","java","python","sql"]
arr.forEach(element => {
    //console.log(element)
});
//or
arr.forEach(function(i){
    //console.log(i);
})
//or 
arr.forEach((i,index,arr)=>{
    console.log(i,index,arr)
})