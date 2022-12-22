let express = require('express');
let app= express();
let path = require('path');

let Todos = ["go to gym" , "go to study" , "naha lia kro"];

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));
app.use('/cat' , express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("CSR vs SSR");
})

app.get('/todos' , (req,res)=>{
    if(req.xhr){
        console.log("ajax req.");
        res.json(Todos);
    }
    else{
        console.log("normal req.");
        res.render('todos' , {Todos});
    }
})

app.post('/todos' , (req,res)=>{
    // console.log(req.body);
    let {todo} = req.body;
    Todos.push(todo);
    // res.send("post req. sent successfully");
    res.status(200).json({msg:'todos are added successfully'});
})


app.listen(3000 , ()=>{
    console.log("server connected at port 3000");
})