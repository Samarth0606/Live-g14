let express = require('express');
let app = express();
let path = require('path');

let comments = [
    {
        id:0,
        username:"Samarth",
        comment:"chitkara students are nice X 1"
    },
    {
        id:1,
        username:"Akhilesh",
        comment:"chitkara students are nice X 2"
    },
    {
        id:2,
        username:"Rohan Malik",
        comment:"chitkara students are nice X 3"
    }
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));//middleware for form data


app.get('/' , (req,res)=>{
    res.send("<h1>root connected</h1>")
})

// task 1 : display all the comments in the array
app.get('/comments' , (req,res)=>{
    res.render('index' , {comments});
})

// task 2 : show a form to add a new comment
app.get('/comment/new' , (req,res)=>{
    res.render('new');
})

// task 2 cont. : adding the comment of collected data
app.post('/comments' , (req,res)=>{
    // console.log(req.body);
    let {username , comment } = req.body;
    comments.push({username , comment , id:comments.length})
    // res.send("data sent succesfully");
    res.redirect('/comments');
})

// task 3: showing a particular element
app.get('/comments/:commentId' , (req,res)=>{
    // console.log(req.params);
    let { commentId } = req.params;
    let foundComment = comments.find((comment)=>{return comment.id===parseInt(commentId)})
    // console.log(foundComment);
    // res.send("params found succesfully");
    // res.render('show' ,{foundComment} );
    res.render('show' ,{comment : foundComment} );
})


app.listen(3000 , ()=>{
    console.log("server connected at port 3000");
})