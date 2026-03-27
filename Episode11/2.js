const http=require("http")
const server=http.createServer(function(req,res){
    if(req.url === "/getsecretdata"){
        res.end("There is no seceret data")
    }
    res.end("Hello world")
})
server.listen(7777)