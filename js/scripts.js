$('body').css("background-color", "gainsboro");

$('#sierra').click(function(){
  window.location.href="sierra.html";
})
$('#brooks').click(function(){
  window.location.href="brooks.html";
})
$('#aleutian').click(function(){
  window.location.href="aleutian.html";
})

$(document).ready(function () {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    })

    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);

        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide();
        })
    })
})
