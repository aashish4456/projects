var http=require('http')
var url=require('url')
    
http.createServer((req,res)=>{
   
    var route=req.url
    if(route==='/'){
        res.end('hello backend')
    }
    if(route==='/home'){
        const namee=['hello','hello','hello']
        res.end(JSON.stringify(namee))
    }
    console.log('check server')
}).listen(5000)