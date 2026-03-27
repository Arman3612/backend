const fs=require("fs")
const https=require("https")
console.log("Hello world")
var a=102;
var b=834;
https.get("https://dumyjson.com",(res)=>{
    console.log("Fetched data succesfully");
});
setTimeout(()=>{
    console.log("called after 5sec")
},5000);
fs.readFile("./1.txt","utf8",(err,data)=>{
    console.log("File Data",data)
})
function multiply(a,b){
    console.log(a*b);
}
multiply(a,b);