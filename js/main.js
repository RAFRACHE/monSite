$(document).ready(function() {
    //nav slide toggle
    $('i.icon').click(function() {
        $('.nav-list').slideToggle()
    });
    //stickey navbar
    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if (sc > 50) {
            $('header').addClass('sticky');
            //$('a').addClass('stickyTxt');
        } else { $('header').removeClass('sticky'); }

    })
})