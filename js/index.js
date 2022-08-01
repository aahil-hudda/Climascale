var n = 500;

$(window).bind("resize", function() {
    console.log($(this).width())
    if ($(this).width() < 500) {
        $('h2').removeClass('text-justify')
        n = 300
    } else {
        $('h2').removeClass('text-justify')
        n = 300
    }
}).trigger('resize');

$(window).scroll(function() {

    //After scrolling 100px from the top...
    if ($(window).scrollTop() >= n) {

        $('nav').removeClass('bg-transparent')

        //Otherwise remove inline styles and thereby revert to original stying
    } else {
        $('nav').addClass('bg-transparent')

    }

});
