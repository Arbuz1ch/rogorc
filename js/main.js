// const catalogButton = document.querySelector('.catalogButton');
// const upbutton = document.querySelector('.upbutton');
// const screens = document.querySelectorAll('.screen');

// catalogButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     screens[1].classList.remove('scrollup');
//     screens[0].classList.add('up');
// });

// upbutton.addEventListener('click', (event) => {
//     event.preventDefault();
//     screens[0].classList.remove('up');
//     screens[1].classList.add('scrollup');
// });

$('button[href^="#"]').on('click', function() {
    let href = $(this).attr('href');

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, 500);

    return false;
})