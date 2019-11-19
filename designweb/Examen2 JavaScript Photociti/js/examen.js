

$('#sumbit').click(function (event) {
    longueur();
    treslong();
});
// je vais faire la methode tres longue il y a surment une methode plus simple mais ses la seul facon de faire que j'ai trouvé
function treslong() {
    var mot=$('#mots').val().toUpperCase();
  var l1=mot[0];
    var l2=mot[1];
    var l3=mot[2];
    var l4=mot[3];
    var l5=mot[4];
    var l6=mot[5];
    var l7=mot[6];
    var l8=mot[7];
    var l9=mot[8];
    var l10=mot[9];
    var l11=mot[10];
    var l12=mot[11];

    var longeurmot=mot.length;
    if (longeurmot===3){
        $('#modif').addClass("col-4");
        $('#modif').addClass("offset-4");
        if (l1==="A"){
            $('#modif').prepend('<img src="Letters/A/A1.jpg" />')
        }


    }
}

function longueur() {
    var longeur=$('#mots').val();
    if (longeur.length<3){
        $('#lol').html("trop cours");
    }
    else if (longeur.length>12){
        $('#lol').html("trop long");
    }
    else  $('#lol').html("");

}