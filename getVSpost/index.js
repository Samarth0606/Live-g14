let express = require('express');
let app = express();
let path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));

// middleware for json data
app.use(express.json());
//middleware for parsing the form data
app.use(express.urlencoded({ extended: true }));


app.get('/' , (req,res)=>{
    res.render('index');
})

app.get('/user' , (req,res)=>{
    console.log(req.query);
    res.send("you hit the GET route")
})

app.post('/user' , (req,res)=>{
    console.log(req.body);
    res.send("you hit the POST route successfully");
})


app.listen(3000,()=>{
    console.log("server conected at 3000 port")
})