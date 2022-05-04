// var blueplayer = prompt("Please enter player 1 name, they will be blue")
// var redplayer = prompt("Please enter player 2 name, they will be red")

var newCSS = {
    "color":"blue",
    "background":"blue",
    "border":"black"
  }



$('td').click(function(){
    $('td').eq(this + 1).css(newCSS)
})
