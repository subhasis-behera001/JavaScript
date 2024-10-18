// Immediately invoked fuction expression (IIFE)

(function js()
{
    console.log("sleep properly!!!!!!!!!!!!!")
})();
// the fuction which is executed immediately after the declaration can be called as IIFE
// to remove the global scope var/idf polution we use the IIFE.
// to end the IIFE we should put a ';' at the end.
((name)=>{
    console.log(`hello ${name}`)
})("subhasis");