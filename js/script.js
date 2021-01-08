$(document).ready(function () {

    // spostamento con freccia di destra

    $('.container > span.arrow-right').click(function(){
        var spostamento = $('.container img.active');
        spostamento.removeClass('active');
        spostamento.next().addClass('active');
        console.log(spostamento);

        //evidenziazione pallini

        var pallino = $('.point-container > div.blue');
        pallino.removeClass('blue');
        pallino.next().addClass('blue');

        if(spostamento.hasClass('last')) {
            $('.container img.first').addClass('active');
            $('.point-container .first').addClass('blue');
        };

    });

    // spostamento con freccia di sinistra

    $('.container > span.arrow-left').click(function(){
        var spostamento = $('.container img.active');
        spostamento.removeClass('active');
        spostamento.prev().addClass('active');
        console.log(spostamento);

        //evidenziazione pallino

        var pallino = $('.point-container > div.blue');
        pallino.removeClass('blue');
        pallino.prev().addClass('blue');

        if(spostamento.hasClass('first')) {
            $('.container img.last').addClass('active');
            $('.point-container .last').addClass('blue');
        };
    });

    $('.point-container .point').eq(0).click(function(){
        $('.container img.active').removeClass('active');
        $('.container img:nth-child(2)').addClass('active');
        $('.point-container div.blue').removeClass('blue');
        $('.point-container .point:nth-child(1)').addClass('blue');
    });

    $('.point-container .point').eq(1).click(function(){
        $('.container img.active').removeClass('active');
        $('.container img:nth-child(3)').addClass('active');
        $('.point-container div.blue').removeClass('blue');
        $('.point-container .point:nth-child(2)').addClass('blue');
    });
});