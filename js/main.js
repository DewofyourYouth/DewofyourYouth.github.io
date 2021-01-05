if ($(window).width() > 1000){
    $('.navbar-brand img').hover(function(){
        $(this).addClass('animated shake');
    }, function(){
        $(this).removeClass('animated shake');
    });
    
    $('a.nav-link').hover(function(){
        $(this).addClass('animated shake');
    }, function(){
        $(this).removeClass('animated shake');
    });

}