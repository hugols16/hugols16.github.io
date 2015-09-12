 $(document).ready(function(){
    // $(window).scroll(function() {
    //     if($(this).scrollTop() > $(window).height()) { 
    //         $('.navbar').addClass('opaque'); // adding the opaque class
    //     } else {
    //         $('.navbar').removeClass('opaque'); // removing the opaque class
    //     }
    // });

 $(document).on('scroll', function (e) {
    if($(this).scrollTop() > $(window).height()) { 
        $('.navbar').addClass('opaque'); // adding the opaque class
    } else {
        $('.navbar').removeClass('opaque'); // removing the opaque class
    }
});
});