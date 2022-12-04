


let express = require('express');
let app = express();

// console.log(app);
app.use((req , res)=>{
    // console.log(req);
    // console.log(res);
    // console.log("hi i am a middleware function");
    res.send(" <h1> hi welcome to the server </h1> ");
})

app.listen(3001 , ()=>{
    console.log("hi server is connected");
})
