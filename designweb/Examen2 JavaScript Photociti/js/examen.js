$('#mots').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        longueur();
        emplacement();
        lettres();
    }
});



$('#sumbit').click(function (event) {
    longueur();
    emplacement();
    lettres();
   // treslong();
});
// je vais faire la methode tres longue il y a surment une methode plus simple mais ses la seul facon de faire que j'ai trouvé
/*function treslong() {
    var mot=$('#mots').val().toUpperCase();
  var l1=mot[0];
    var mot=mot[1];
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
            $('#modif').attr('<img src="Letters/A/A1.jpg" />');
            if (mot==="A"){
                $('#modif').attr('<img src="Letters/A/A1.jpg" height="250px" width="250px" />');
            }
            else if (mot==="B"){
                $('#modif').attr('<img src="Letters/B/B1.jpg" />');
            }
            else if (mot==="C"){
                $('#modif').attr('<img src="Letters/C/C1.jpg" />');
            }
            else if (mot==="D"){
                $('#modif').attr('<img src="Letters/D/D1.jpg" />');
            }
            else if (mot==="E"){
                $('#modif').attr('<img src="Letters/E/E1.jpg" />');
            }
            else if (mot==="F"){
                $('#modif').attr('<img src="Letters/F/F1.jpg" />');
            }
            else if (mot==="G"){
                $('#modif').attr('<img src="Letters/G/G1.jpg" />');
            }
            else if (mot==="H"){
                $('#modif').attr('<img src="Letters/H/H1.jpg" />');
            }
            else if (mot==="I"){
                $('#modif').attr('<img src="Letters/I/I1.jpg" />');
            }
            else if (mot==="J"){
                $('#modif').attr('<img src="Letters/J/J1.jpg" />');
            }
            else if (mot==="K"){
                $('#modif').attr('<img src="Letters/K/K1.jpg" />');
            }
            else if (mot==="L"){
                $('#modif').attr('<img src="Letters/L/L1.jpg" />');
            }
            else if (mot==="M"){
                $('#modif').attr('<img src="Letters/M/M1.jpg" />');
            }
            else if (mot==="N"){
                $('#modif').attr('<img src="Letters/N/N1.jpg" />');
            }
            else if (mot==="O"){
                $('#modif').attr('<img src="Letters/O/O1.jpg" />');
            }
            else if (mot==="P"){
                $('#modif').attr('<img src="Letters/P/P1.jpg" />');
            }
            else if (mot==="Q"){
                $('#modif').attr('<img src="Letters/Q/Q1.jpg" />');
            }
            else if (mot==="R"){
                $('#modif').attr('<img src="Letters/R/R1.jpg" />');
            }
            else if (mot==="S"){
                $('#modif').attr('<img src="Letters/S/S1.jpg" />');
            }
            else if (mot==="T"){
                $('#modif').attr('<img src="Letters/T/T1.jpg" />');
            }
            else if (mot==="U"){
                $('#modif').attr('<img src="Letters/U/U1.jpg" />');
            }
            else if (mot==="V"){
                $('#modif').attr('<img src="Letters/V/V1.jpg" />');
            }
            else if (mot==="W"){
                $('#modif').attr('<img src="Letters/W/W1.jpg" />');
            }
            else if (mot==="X"){
                $('#modif').attr('<img src="Letters/X/X1.jpg" />');
            }
            else if (mot==="Y"){
                $('#modif').attr('<img src="Letters/Y/Y1.jpg" />');
            }
            else if (mot==="Z"){
                $('#modif').attr('<img src="Letters/Z/Z1.jpg" />');
            }
            else if (mot==="*"){
                $('#modif').attr('<img src="Letters/CS/CS1.jpg" />');
            }
        }
        else if (l1==="B"){
            $('#modif').attr('<img src="Letters/B/B1.jpg" />');
        }
        else if (l1==="C"){
            $('#modif').attr('<img src="Letters/C/C1.jpg" />');
        }
        else if (l1==="D"){
            $('#modif').attr('<img src="Letters/D/D1.jpg" />');
        }
        else if (l1==="E"){
            $('#modif').attr('<img src="Letters/E/E1.jpg" />');
        }
        else if (l1==="F"){
            $('#modif').attr('<img src="Letters/F/F1.jpg" />');
        }
        else if (l1==="G"){
            $('#modif').attr('<img src="Letters/G/G1.jpg" />');
        }
        else if (l1==="H"){
            $('#modif').attr('<img src="Letters/H/H1.jpg" />');
        }
        else if (l1==="I"){
            $('#modif').attr('<img src="Letters/I/I1.jpg" />');
        }
        else if (l1==="J"){
            $('#modif').attr('<img src="Letters/J/J1.jpg" />');
        }
        else if (l1==="K"){
            $('#modif').attr('<img src="Letters/K/K1.jpg" />');
        }
        else if (l1==="L"){
            $('#modif').attr('<img src="Letters/L/L1.jpg" />');
        }
        else if (l1==="M"){
            $('#modif').attr('<img src="Letters/M/M1.jpg" />');
        }
        else if (l1==="N"){
            $('#modif').attr('<img src="Letters/N/N1.jpg" />');
        }
        else if (l1==="O"){
            $('#modif').attr('<img src="Letters/O/O1.jpg" />');
        }
        else if (l1==="P"){
            $('#modif').attr('<img src="Letters/P/P1.jpg" />');
        }
        else if (l1==="Q"){
            $('#modif').attr('<img src="Letters/Q/Q1.jpg" />');
        }
        else if (l1==="R"){
            $('#modif').attr('<img src="Letters/R/R1.jpg" />');
        }
        else if (l1==="S"){
            $('#modif').attr('<img src="Letters/S/S1.jpg" />');
        }
        else if (l1==="T"){
            $('#modif').attr('<img src="Letters/T/T1.jpg" />');
        }
        else if (l1==="U"){
            $('#modif').attr('<img src="Letters/U/U1.jpg" />');
        }
        else if (l1==="V"){
            $('#modif').attr('<img src="Letters/V/V1.jpg" />');
        }
        else if (l1==="W"){
            $('#modif').attr('<img src="Letters/W/W1.jpg" />');
        }
        else if (l1==="X"){
            $('#modif').attr('<img src="Letters/X/X1.jpg" />');
        }
        else if (l1==="Y"){
            $('#modif').attr('<img src="Letters/Y/Y1.jpg" />');
        }
        else if (l1==="Z"){
            $('#modif').attr('<img src="Letters/Z/Z1.jpg" />');
        }












    }
}*/
$('#bleu').click(function () {
    $('#bgmodif').css("background-image", "url(background/bleu.jpg");
});
$('#blanc').click(function () {
    $('#bgmodif').css("background-image", "url(background/blanc.jpg");
});
$('#bleufoncé').click(function () {
    $('#bgmodif').css("background-image", "url(background/bleuFonce.jpg");
});
$('#gris').click(function () {
    $('#bgmodif').css("background-image", "url(background/gris.jpg");
});
$('#noir').click(function () {
    $('#bgmodif').css("background-image", "url(background/noir.jpg");
});
$('#rose').click(function () {
    $('#bgmodif').css("background-image", "url(background/rose.jpg");
});
$('#rouge').click(function () {
    $('#bgmodif').css("background-image", "url(background/rouge.jpg");
});
function longueur() {
    var longeur=$('#mots').val();
    if (longeur.length<3){
        $('#lol2').html("<br>trop cours");
    }
    else if (longeur.length>12){
        $('#lol2').html("<br>trop long");
    }
    else  $('#lol2').html("");

}
function emplacement() {
    var longueur=$('#mots').val().toUpperCase().length;

    if (longueur>=3 && longueur<=12 ){
        if (longueur===3){
           $('.modif').removeClass("col-1");
            $('.modif').addClass("col-4");
            $('#d').hide();
            $('#e').hide();
            $('#f').hide();
            $('#g').hide();
            $('#h').hide();
            $('#i').hide();
            $('#j').hide();
            $('#k').hide();
            $('#l').hide();
        }
        else if (longueur===4){
            $('.modif').removeClass("col-1");
            $('.modif').addClass("col-3");
            $('#e').hide();
            $('#f').hide();
            $('#g').hide();
            $('#h').hide();
            $('#i').hide();
            $('#j').hide();
            $('#k').hide();
            $('#l').hide();
        }
        else if (longueur===5 ){
            $('.modif').removeClass("col-1");
            $('.modif').addClass("col-2");
            $('#f').hide();
            $('#g').hide();
            $('#h').hide();
            $('#i').hide();
            $('#j').hide();
            $('#k').hide();
            $('#l').hide();
            lettres();
        }
        else if (longueur===6 ){
            $('.modif').removeClass("col-1");
            $('.modif').addClass("col-2");
            $('#h').hide();
            $('#i').hide();
            $('#j').hide();
            $('#k').hide();
            $('#l').hide();
        }
        else if (longueur>=7 && longueur<=12 ){

        }

    }

}
$(document).keypress(
    function(event){
        if (event.which == '13') {
            event.preventDefault();
        }
    });
function lettres() {
    var mot=$('#mots').val();
    var lenght=mot.length;
    var compteur;
    for (compteur=1;compteur<=2;compteur++){
        if (lenght===3){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
        }
        if (lenght===4){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
        }
        if (lenght===5){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
        }
        if (lenght===6){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
            var l6=mot[5].toUpperCase();
        }
        if (lenght===7){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
            var l6=mot[5].toUpperCase();
            var l7=mot[6].toUpperCase();

        }
        if (lenght===8){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
            var l6=mot[5].toUpperCase();
            var l7=mot[6].toUpperCase();
            var l8=mot[7].toUpperCase();

        }
        if (lenght===9){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
            var l6=mot[5].toUpperCase();
            var l7=mot[6].toUpperCase();
            var l8=mot[7].toUpperCase();
            var l9=mot[8].toUpperCase();


        }
        if (lenght===10){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
            var l6=mot[5].toUpperCase();
            var l7=mot[6].toUpperCase();
            var l8=mot[7].toUpperCase();
            var l9=mot[8].toUpperCase();
            var l10=mot[9].toUpperCase();

        }
        if (lenght===11){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
            var l6=mot[5].toUpperCase();
            var l7=mot[6].toUpperCase();
            var l8=mot[7].toUpperCase();
            var l9=mot[8].toUpperCase();
            var l10=mot[9].toUpperCase();
            var l11=mot[10].toUpperCase()   ;



        }
        if (lenght===12){
            var l1=mot[0].toUpperCase();
            var l2=mot[1].toUpperCase();
            var l3=mot[2].toUpperCase();
            var l4=mot[3].toUpperCase();
            var l5=mot[4].toUpperCase();
            var l6=mot[5].toUpperCase();
            var l7=mot[6].toUpperCase();
            var l8=mot[7].toUpperCase();
            var l9=mot[8].toUpperCase();
            var l10=mot[9].toUpperCase();
            var l11=mot[10].toUpperCase()   ;
            var l12=mot[11].toUpperCase();

        }
    }

   if (lenght<13){

       $('#1').attr("src","Letters/"+ l1 +"/"+ l1 +"1.jpg");
       $('#2').attr("src","Letters/"+ l2 +"/"+ l2 +"1.jpg");
       $('#3').attr("src","Letters/"+ l3 +"/"+ l3 +"1.jpg");
       $('#4').attr("src","Letters/"+ l4 +"/"+ l4 +"1.jpg");
       $('#5').attr("src","Letters/"+ l5 +"/"+ l5 +"1.jpg");
       $('#6').attr("src","Letters/"+l6+"/"+l6+"1.jpg");
       $('#7').attr("src","Letters/"+l7+"/"+l7+"1.jpg");
       $('#8').attr("src","Letters/"+l8+"/"+l8+"1.jpg");
       $('#9').attr("src","Letters/"+l9+"/"+l9+"1.jpg");
       $('#10').attr("src","Letters/"+l10+"/"+l10+"1.jpg");
       $('#11').attr("src","Letters/"+l11+"/"+l11+"1.jpg");
       $('#12').attr("src","Letters/"+l12+"/"+l12+"1.jpg");
      if (l1==="*"){
          $('#1').attr("src","Letters/CS/CS1.jpg");
      }
       if (l2==="*"){
           $('#2').attr("src","Letters/CS/CS1.jpg");
       }
       if (l3==="*"){
           $('#3').attr("src","Letters/CS/CS1.jpg");
       }
       if (l4==="*"){
           $('#4').attr("src","Letters/CS/CS1.jpg");
       }
       if (l5==="*"){
           $('#5').attr("src","Letters/CS/CS1.jpg");
       }
       if (l6==="*"){
           $('#6').attr("src","Letters/CS/CS1.jpg");
       }
       if (l7==="*"){
           $('#7').attr("src","Letters/CS/CS1.jpg");
       }
       if (l8==="*"){
           $('#8').attr("src","Letters/CS/CS1.jpg");
       }
       if (l9==="*"){
           $('#9').attr("src","Letters/CS/CS1.jpg");
       }
       if (l10==="*"){
           $('#10').attr("src","Letters/CS/CS1.jpg");
       }
       if (l11==="*"){
           $('#11').attr("src","Letters/CS/CS1.jpg");
       }
       if (l12==="*"){
           $('#12').attr("src","Letters/CS/CS1.jpg");
       }


   }

    //if (mot[i] !== "*") {
    $('.modif').click(function () {
    var nb;
        nb = $(this).attr('id');
        if (mot[nb - 1] === '*') {
            car = "CS";
        } else {
            car = mot[nb - 1].toUpperCase();
        }
    });
        $('#1').on('click',function () {
            $('#exampleModal').modal('show');
            if (mot[0] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l1 + "/" + l1 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l1 + "/" + l1 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l1 + "/" + l1 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l1 + "/" + l1 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l1 + "/" + l1 + "5.jpg");
        }
        });
        $('#2').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[1] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else{
            $('#m1').attr("src", "Letters/" + l2 + "/" + l2 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l2 + "/" + l2 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l2 + "/" + l2 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l2 + "/" + l2 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l2 + "/" + l2 + "5.jpg");
        }
        });
        $('#3').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[2] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {


            $('#m1').attr("src", "Letters/" + l3 + "/" + l3 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l3 + "/" + l3 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l3 + "/" + l3 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l3 + "/" + l3 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l3 + "/" + l3 + "5.jpg");
        }
        });
        $('#4').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[3] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {


            $('#m1').attr("src", "Letters/" + l4 + "/" + l4 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l4 + "/" + l4 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l4 + "/" + l4 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l4 + "/" + l4 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l4 + "/" + l4 + "5.jpg");
        }
        });
        $('#5').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[4] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l5 + "/" + l5 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l5 + "/" + l5 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l5 + "/" + l5 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l5 + "/" + l5 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l5 + "/" + l5 + "5.jpg");
        }
        });
        $('#6').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[5] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l6 + "/" + l6 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l6 + "/" + l6 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l6 + "/" + l6 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l6 + "/" + l6 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l6 + "/" + l6 + "5.jpg");
        }
        });
        $('#7').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[6] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l7 + "/" + l7 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l7 + "/" + l7 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l7 + "/" + l7 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l7 + "/" + l7 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l7 + "/" + l7 + "5.jpg");
        }
        });
        $('#8').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[7] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l8 + "/" + l8 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l8 + "/" + l8 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l8 + "/" + l8 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l8 + "/" + l8 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l8 + "/" + l8 + "5.jpg");
        }
        });
        $('#9').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[8] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l9 + "/" + l9 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l9 + "/" + l9 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l9 + "/" + l9 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l9 + "/" + l9 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l9 + "/" + l9 + "5.jpg");
        }
        });
        $('#10').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[9] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l10 + "/" + l10 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l10 + "/" + l10 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l10 + "/" + l10 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l10 + "/" + l10 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l10 + "/" + l10 + "5.jpg");
        }
        });
        $('#11').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[10] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l11 + "/" + l11 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l11 + "/" + l11 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l11 + "/" + l11 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l11 + "/" + l11 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l11 + "/" + l11 + "5.jpg");
        }
        });
        $('#12').on('click', function () {
            $('#exampleModal').modal('show');
            if (mot[11] === "*") {
                $('#m1').attr("src", "Letters/CS/CS1.jpg");
                $('#m2').attr("src", "Letters/CS/CS2.jpg");
                $('#m3').attr("src", "Letters/CS/CS3.jpg");
                $('#m4').attr("src", "Letters/CS/CS4.jpg");
                $('#m5').attr("src", "Letters/CS/CS5.jpg");
            }
            else {
            $('#m1').attr("src", "Letters/" + l12 + "/" + l12 + "1.jpg");
            $('#m2').attr("src", "Letters/" + l12 + "/" + l12 + "2.jpg");
            $('#m3').attr("src", "Letters/" + l12 + "/" + l12 + "3.jpg");
            $('#m4').attr("src", "Letters/" + l12 + "/" + l12 + "4.jpg");
            $('#m5').attr("src", "Letters/" + l12 + "/" + l12 + "5.jpg");
        }
        });

}
    /* else {
        $('#m1').attr("src", "Letters/CS/CS1.jpg");
        $('#m2').attr("src", "Letters/CS/CS2.jpg");
        $('#m3').attr("src", "Letters/CS/CS3.jpg");
        $('#m4').attr("src", "Letters/CS/CS4.jpg");
        $('#m5').attr("src", "Letters/CS/CS5.jpg");
    }
}
           if (l1==="A"){
               $('#modif').attr("src","Letters/A/A1.jpg");
           }
           else if (l1==="B"){
               $('#modif').attr("src","Letters/B/B1.jpg");
           }
           else if (l1==="C"){
               $('#modif').attr("src","Letters/C/C1.jpg");
           }
           else if (l1==="D"){
               $('}#modif').attr( "src","Letters/D/D1.jpg");
           }
           else if (l1==="E"){
               $('#modif').attr("src","Letters/E/E1.jpg" );
           }
           else if (l1==="F"){
               $('#modif').attr("src","Letters/F/F1.jpg" );
           }
           else if (l1==="G"){
               $('#modif').attr("src","Letters/G/G1.jpg" );
           }
           else if (l1==="H"){
               $('#modif').attr("src","Letters/H/H1.jpg" );
           }
           else if (l1==="I"){
               $('#modif').attr("src","Letters/I/I1.jpg" );
           }
           else if (l1==="J"){
               $('#modif').attr("src","Letters/J/J1.jpg" );
           }
           else if (l1==="K"){
               $('#modif').attr("src","Letters/K/K1.jpg" );
           }
           else if (l1==="L"){
               $('#modif').attr("src","Letters/L/L1.jpg" );
           }
           else if (l1==="M"){
               $('#modif').attr("src","Letters/M/M1.jpg" );
           }
           else if (l1==="N"){
               $('#modif').attr("src","Letters/N/N1.jpg" );
           }
           else if (l1==="O"){
               $('#modif').attr("src","Letters/O/O1.jpg" );
           }
           else if (l1==="P"){
               $('#modif').attr("src","Letters/P/P1.jpg");
           }
           else if (l1==="Q"){
               $('#modif').attr("src","Letters/Q/Q1.jpg" );
           }
           else if (l1==="R"){
               $('#modif').attr("src","Letters/R/R1.jpg" );
           }
           else if (l1==="S"){
               $('#modif').attr("src","Letters/S/S1.jpg" );
           }
           else if (l1==="T"){
               $('#modif').attr("src","Letters/T/T1.jpg" );
           }
           else if (l1==="U"){
               $('#modif').attr("src","Letters/U/U1.jpg" );
           }
           else if (l1==="V"){
               $('#modif').attr("src","Letters/V/V1.jpg" );
           }
           else if (l1==="W"){
               $('#modif').attr("src","Letters/W/W1.jpg" );
           }
           else if (l1==="X"){
               $('#modif').attr("src","Letters/X/X1.jpg" );
           }
           else if (l1==="Y"){
               $('#modif').attr("src","Letters/Y/Y1.jpg" );
           }

*/
