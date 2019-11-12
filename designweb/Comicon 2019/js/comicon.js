var texte="SLAY";
var erreur="Test";
var texteid=$('#nomcomicon').html();
$(document).on("keydown", "form", function(event) {
    return event.key != "Enter";
});
$('#nomcomicon').each(function () {
$('#nomcomicon').keyup(function () {
if (texteid==="SLAY"||"Test"){
$('#valide').html("nom usager non disponible");
$('.true').css("color","red");
$('#valide').show();
}
else {
    $('#valide').show();
}
});
});
$('#motdepasse').keyup(function () {
   var t =$('#motdepasse').val();
   var longeur=t.length;
if (longeur>=6&&longeur<=9){
    $('#forcemotpasse').html("Moyen");
    $('.force').css("color","yellow");
}
else if (longeur>9 && t.match(/[A-Z]/)&&t.match(/\d/)){
    $('#forcemotpasse').html("Fort");
    $('.force').css("color","green");
}
});
$('#motdepasse2').keyup(function () {
   var motpasse2=
});
