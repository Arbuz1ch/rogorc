$('button[href^="#"]').on('click', function() {
    let href = $(this).attr('href');

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, 500);

    return false;
})