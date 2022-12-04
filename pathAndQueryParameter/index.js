let express = require('express');
let app  = express();


app.get('/' , (req,res)=>{
    res.send("<h1> Root Route </h1>")
})

app.get('/r/:subreddit' , (req,res)=>{
    // console.log(req.params);
    // console.log(req);
    let { subreddit } = req.params;
    res.send(`this is your ${subreddit} waala route`);
})

app.get('/search' , (req,res)=>{
    // console.log(req.query);
    let {first , latest} = req.query;
    res.send(`first query is ${first} and second query is ${latest}`);
})


app.listen(8002,()=>{
    console.log("hi server is connected")
})