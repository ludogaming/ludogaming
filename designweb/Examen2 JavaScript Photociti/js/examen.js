$('#mots').keyup(function (event) {
    var longeur=$('#mots').val();
    if (longeur.length<3){
        $('#lol').html("trop cours");
    }
    else if (longeur.length>12){
        $('#lol').html("trop long");
    }
    else  $('#lol').html("");
});