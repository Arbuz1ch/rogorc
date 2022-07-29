$('button[href^="#"]').on('click', function() {
    let href = $(this).attr('href');

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, 500);

    return false;
})

window.onload = () => {
    if (window.pageYOffset < 300) {
    $('.upbutton').css('display', 'none');
}
}

$(window).on('scroll', () => {
    if (window.pageYOffset < 250) {
        $('.upbutton').css('display', 'none');
    } else {
        $('.upbutton').css('display', '');
    }
})