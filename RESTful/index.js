let express = require('express');
let app = express();
let path = require('path');
const { v4: uuid } = require('uuid');
let methodOverride = require('method-override');

// middleware for using methodOverride
app.use(methodOverride('_method'));


let comments = [
    {
        id:uuid(),
        username:"Samarth",
        comment:"chitkara students are nice X 1"
    },
    {
        id:uuid(),
        username:"Akhilesh",
        comment:"chitkara students are nice X 2"
    },
    {
        id:uuid(),
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
    // comments.push({username , comment , id:comments.length})
    comments.push({username , comment , id:uuid()})
    // res.send("data sent succesfully");
    res.redirect('/comments');
})

// task 3: showing a particular element
app.get('/comments/:commentId' , (req,res)=>{
    // console.log(req.params);
    let { commentId } = req.params;
    // let foundComment = comments.find((comment)=>{return comment.id===parseInt(commentId)})
    let foundComment = comments.find((comment)=>{return comment.id===(commentId)})
    // console.log(foundComment);
    // res.send("params found succesfully");
    // res.render('show' ,{foundComment} );
    res.render('show' ,{comment : foundComment} );
})


// task 4: to create a form for editing/updating an existing comment
app.get('/comments/:commentId/edit' , (req,res)=>{
    let { commentId } = req.params;
    let foundComment = comments.find((comment)=>{return comment.id===(commentId)})
    res.render('edit' , {foundComment});
})

// task 4 cont. : to show the updated version of the comment
app.patch('/comments/:commentId' , (req,res)=>{
    let { commentId } = req.params;
    let foundComment = comments.find((comment)=>{return comment.id===(commentId)})
    // console.log(foundComment);
    console.log(req.body);
    let {comment} = req.body;
    foundComment.comment = comment;
    // res.send("patch req sent successfully");
    res.redirect('/comments');
})

// task 5: deleting  a particular comment
app.delete('/comments/:commentId' , (req,res)=>{
    let { commentId } = req.params;
    let newCommentArray = comments.filter((comment)=>{return comment.id !== commentId})
    comments = newCommentArray;
    res.redirect('/comments');

})


app.listen(3000 , ()=>{
    console.log("server connected at port 3000");
})