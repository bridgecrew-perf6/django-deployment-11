$('h1').click(function(){
    console.log('There weas a click!')

})

$('li').dblclick(function(){
    $(this).text("I was changed!")
})

// key press

$('input').eq(0).keypress(function(event){
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue');
    }
})

// on()

$('h1').on('mouseenter',function(){
    $(this).toggleClass('turnBlue');
})

// event and animations

$('input').eq(1).on('click',function(){
    $('.container').slideUp(3000)
})