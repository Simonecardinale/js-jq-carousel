$(document).ready(function () {

    $('.container > span > i.fa-chevron-right').click(function(){
        var spostamento = $('.container img.active');
        spostamento.removeClass('active');
        spostamento.next().addClass('active');
        console.log(spostamento);

        if(spostamento.hasClass('last')) {
            $('.container img.first').addClass('active');
        };

    });

    $('.container > span > i.fa-chevron-left').click(function(){
        var spostamento = $('.container img.active');
        spostamento.removeClass('active');
        spostamento.prev().addClass('active');
        console.log(spostamento);

        if(spostamento.hasClass('first')) {
            $('.container img.last').addClass('active');
        };
        
    });
});