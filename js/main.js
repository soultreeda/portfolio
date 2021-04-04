// main.js

$(function(){
    AOS.init();
});

/*** 작품 필터링하여 보여주기 ***/
$(function(){
    let duration = 500;

    //  all
    $('#btn-all').on('click', function(){
        $('#works .list li').show(duration);
    })

    //  web
    $('#btn-web').on('click', function(){
        $('#works .list li')
        .hide(duration)
        .filter('.web')
        .show(duration);
    })

    //  uiux
    $('#btn-uiux').on('click', function(){
        $('#works .list li')
        .hide(duration)
        .filter('.uiux')
        .show(duration);
    })

    //  graphic
    $('#btn-graphic').on('click', function(){
        $('#works .list li')
        .hide(duration)
        .filter('.graphic')
        .show(duration);
    })

});