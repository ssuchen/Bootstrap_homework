$(document).ready(function () {

// $('.title').click(function (e) { 
//     e.preventDefault();
//    $(".box").css('background-color','blue')
// });



//愛心點擊效果

$('.like').click(function (e) { 
    e.preventDefault();
//  $(this).toggle();
 $(this).toggle();
 $(this).siblings().show();

});
$('.unlike').click(function (e) { 
    e.preventDefault();
$(this).toggle();
$(this).siblings().show();
});




});

