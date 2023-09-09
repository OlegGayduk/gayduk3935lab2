const express = require('express');
const  dir = __dirname;
const dirPub = dir+'/dist/';
const dirScript = dirPub+'/js/'


let port = 8080

let app = express();

app.use((req,res,next)=>{
    let now = new Date();
    console.log(`[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`+' '+(req.method)+' '+(req.url))
    next()
})

app.route('/')
    .get((req,res)=>{
        res.status(200);
        res.sendFile(dirPub + 'index.html')
        res.end
    })

    app.route('/*.ttf')
    .get((req,res)=>{
        res.status(200);
        res.sendFile(dirPub + req.url)
        res.end
    })

app.route('/js/*')
    .get((req,res)=>{
        res.status(200)
        res.sendFile(dirPub+req.url)
        res.end
    })

app.route('/images/*')
    .get((req,res)=>{
        res.status(200)
        res.sendFile(dirPub+req.url)
        res.end
    })

app.listen(port, (err)=>{
    if(err){
        return console.log(err);
    }
    console.log(`server start on ${port}`);
})
