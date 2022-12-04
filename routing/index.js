let express = require('express');
let app  = express();


// app.use((req,res)=>{
//     res.send("root ye bbhi hai")
// })



app.get('/' , (req,res)=>{
    res.send( " <h1>  root route of g14 </h1>");
})

app.get('/cats' , (req,res)=>{
    res.send("<h1> meoow meoww </h1>")
})

app.get('/dogs' , (req,res)=>{
    res.send("<h1>  woof woof </h1>")
})

//ending mei daalenge
app.get('*',(req,res)=>{
    res.send("<h2>please eneter a valid route</h2>");
})



app.listen(8000,()=>{
    console.log("hi server is connected")
})