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
$('#motdepasse')
