
$('#tori').hover(function () {
    $(this).mouseenter(function () {


   $(this).addClass("animated");
    $(this).addClass("shake");
    $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#papyrus').hover(function () {
    $(this).mouseenter(function () {


        $(this).addClass("animated");
        $(this).addClass("shake");
        $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#undyne').hover(function () {
    $(this).mouseenter(function () {


        $(this).addClass("animated");
        $(this).addClass("shake");
        $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#theundying').hover(function () {
    $(this).mouseenter(function () {


        $(this).addClass("animated");
        $(this).addClass("shake");
        $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#mettaton').hover(function () {
    $(this).mouseenter(function () {


        $(this).addClass("animated");
        $(this).addClass("shake");
        $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#mettatonex').hover(function () {
    $(this).mouseenter(function () {


        $(this).addClass("animated");
        $(this).addClass("shake");
        $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#asgore').hover(function () {
    $(this).mouseenter(function () {


        $(this).addClass("animated");
        $(this).addClass("shake");
        $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#asriel').hover(function () {
    $(this).mouseenter(function () {


        $(this).addClass("animated");
        $(this).addClass("shake");
        $(this).addClass("infinite");
    });
    $(this).mouseleave(function () {
        $(this).removeClass("animated");
        $(this).removeClass("shake");
        $(this).removeClass("infinite");
    });
});
$('#styminecraft').click(function () {
   $('.navbar').attr("id","minecraft");
   $('#imagebrand').attr("src","img/minecraft/580b57fcd9996e24bc43c2f1.png");
    $('#hamburger').attr("src","img/minecraft/aad0a1a13bb7ed298fd201a44829a35b.png");
   $('.glouglou').html("style navbar: minecraft");
    $('#titrenav').css("color","#c82333");
    $('.fa-youtube').css("color","#FF0000");
    $('#switch').removeClass("btn-light");
    $('#switch').addClass("btn-outline-dark");


});
$('#styundertale').click(function () {
    $('.navbar').attr("id","undertale");
    $('#hamburger').attr("src","img/undertale/flat,800x800,070,f.jpg");
    $('#imagebrand').attr("src","img/undertale/2316613_0.jpg");
    $('.glouglou').html("style navbar: undertale");
    $('#titrenav').css("color","#c82333");
    $('.fa-youtube').css("color","#FF0000");
    $('#switch').removeClass("btn-light");
    $('#switch').addClass("btn-outline-dark");


});
$('#styzelda').click(function () {
   $('.navbar').attr("id","zelda");
    $('#imagebrand').attr("src","img/zelda/The_Legend_of_Zelda_Ocarina_of_Time_Logo.png");
    $('#hamburger').attr("src","img/zelda/1200px-Triforce.svg.png");
    $('.glouglou').html("style navbar: zelda");
    $('#titrenav').css("color","#c82333");
    $('.fa-youtube').css("color","#FF0000");
    $('#switch').removeClass("btn-light");
    $('#switch').addClass("btn-outline-dark");
});
$('#stycallofduty').click(function () {
    $('.navbar').attr("id","callofduty");
    $('#imagebrand').attr("src","img/callofduty/Call_of_Duty_Infinite_Warfare_–_Game_logo.svg.png");
    $('#hamburger').attr("src","img/callofduty/319I8xGWTOL._SX425_.jpg");
    $('.glouglou').html("style navbar: call of duty");
    $('#titrenav').css("color","#c82333");
    $('.fa-youtube').css("color","#FF0000");
    $('#switch').removeClass("btn-light");
    $('#switch').addClass("btn-outline-dark");
});
$('#styoutube').click(function () {
    $('.navbar').attr("id", "youtube");
    $('#imagebrand').attr("src","img/youtube/502px-Logo_of_YouTube_(2015-2017).svg.png");
    $('#hamburger').attr("src","img/youtube/1200px-Youtube_Music_logo.svg.png");
    $('.glouglou').html("style navbar: youtube");
    $('.fa-youtube').css("color","#ffffff");
    $('#titrenav').css("color","white");
    $('#switch').removeClass("btn-outline-dark");
    $('#switch').addClass("btn-light");

});
$(function () {
    $('[data-toggle="popover"]').popover();
});
$('a[rel=popover]').popover({
    html: true,
    trigger: 'click',
    content: function () {
        return '<img src="'+$(this).data('img') + '" />';
    }
});
$('.text').html(function(i, html) {
    var chars = $.trim(html).split("");

    return '<span>' + chars.join('</span><span>') + '</span>';
});
$('#buttona').click(function () {
    $('#animation').show();
});
