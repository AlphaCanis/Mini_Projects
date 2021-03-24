$('#container ul').on('click','li',function(){
    $(this).toggleClass('complete');
})

$('#container ul').on('click', 'span', function (event){
    $(this).parent().fadeOut(function(){
        console.log('Fading');
        $(this).remove();

    });
    
    event.stopPropagation();
})

$('input[type="text"]').keypress(function (event) {
    
    if (event.which === 13) {
        // console.log(event);
        let newTodoText = $(this).val();
        $('#container ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${newTodoText}</li>`);
        $(this).val("");
    } 
})

$('#add').click(function(){
    $('input').fadeToggle(500,function(){
        console.log('faded');

    })
})
    