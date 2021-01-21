$(window).resize(function(){
    $('aside li:first').html(`${window.innerWidth}px`);
})
// $('.abertura p').hover(function(){
//     $(this).html(`${window.innerWidth}px`);
// })

// $('#btn-menu').onclick(function(){
//     if($(this).checked){
//         window.alert('Ola Checado');
//     }
// })