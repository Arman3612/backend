console.log("Hello world")
var a=4,b=8;
setTimeout(()=>{
    console.log("Print asap")
},0)
setTimeout(()=>{
    console.log("Print after 3 sec")
},3000)
function ok(a,b){
    console.log(a*b)
}
ok(a,b)