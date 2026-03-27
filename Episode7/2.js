const crypto=require("crypto")
console.log("Hello world")
var a=8, b=9;
//pbkdf2 -Password base key derivative function
//Syncronous method blocks the thread so dont use it
crypto.pbkdf2Sync("password","salt",500000,50,"sha512");
console.log("First key generated")

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("Second key is generated")
})
function add(a,b){
    console.log(a+b)
}
add(a,b)