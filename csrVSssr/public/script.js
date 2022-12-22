// console.log("hello from script");
function refreshList(){
    $('#list').empty();
    
    $.get('/todos' , function(data){
        // console.log(data);
        for(let todo of data){
            $('#list').append(`<li>${todo}</li>`)
        }
    })
}

refreshList();


$('#btn').on('click' , function(){
    let todo = $('#inp').val();
    $.post('/todos' , {todo} ,function(res){
        console.log(res);
        $('#inp').val("");
        refreshList();
    })
})