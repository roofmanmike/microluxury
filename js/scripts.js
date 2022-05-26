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

function dateFunc(){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 2).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
$('#date1').text(today);
}
dateFunc();
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
