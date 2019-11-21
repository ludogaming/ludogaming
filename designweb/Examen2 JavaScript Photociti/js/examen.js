
var keycode = (event.keyCode ? event.keyCode : event.which);
if (keycode == '13') {

$('#sumbit').click(function (event) {
    longueur();
    treslong();
});
// je vais faire la methode tres longue il y a surment une methode plus simple mais ses la seul facon de faire que j'ai trouvé
/*function treslong() {
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
            $('#modif').prepend('<img src="Letters/A/A1.jpg" />');
            if (l2==="A"){
                $('#modif').append('<img src="Letters/A/A1.jpg" height="250px" width="250px" />');
            }
            else if (l2==="B"){
                $('#modif').prepend('<img src="Letters/B/B1.jpg" />');
            }
            else if (l2==="C"){
                $('#modif').prepend('<img src="Letters/C/C1.jpg" />');
            }
            else if (l2==="D"){
                $('#modif').prepend('<img src="Letters/D/D1.jpg" />');
            }
            else if (l2==="E"){
                $('#modif').prepend('<img src="Letters/E/E1.jpg" />');
            }
            else if (l2==="F"){
                $('#modif').prepend('<img src="Letters/F/F1.jpg" />');
            }
            else if (l2==="G"){
                $('#modif').prepend('<img src="Letters/G/G1.jpg" />');
            }
            else if (l2==="H"){
                $('#modif').prepend('<img src="Letters/H/H1.jpg" />');
            }
            else if (l2==="I"){
                $('#modif').prepend('<img src="Letters/I/I1.jpg" />');
            }
            else if (l2==="J"){
                $('#modif').prepend('<img src="Letters/J/J1.jpg" />');
            }
            else if (l2==="K"){
                $('#modif').prepend('<img src="Letters/K/K1.jpg" />');
            }
            else if (l2==="L"){
                $('#modif').prepend('<img src="Letters/L/L1.jpg" />');
            }
            else if (l2==="M"){
                $('#modif').prepend('<img src="Letters/M/M1.jpg" />');
            }
            else if (l2==="N"){
                $('#modif').prepend('<img src="Letters/N/N1.jpg" />');
            }
            else if (l2==="O"){
                $('#modif').prepend('<img src="Letters/O/O1.jpg" />');
            }
            else if (l2==="P"){
                $('#modif').prepend('<img src="Letters/P/P1.jpg" />');
            }
            else if (l2==="Q"){
                $('#modif').prepend('<img src="Letters/Q/Q1.jpg" />');
            }
            else if (l2==="R"){
                $('#modif').prepend('<img src="Letters/R/R1.jpg" />');
            }
            else if (l2==="S"){
                $('#modif').prepend('<img src="Letters/S/S1.jpg" />');
            }
            else if (l2==="T"){
                $('#modif').prepend('<img src="Letters/T/T1.jpg" />');
            }
            else if (l2==="U"){
                $('#modif').prepend('<img src="Letters/U/U1.jpg" />');
            }
            else if (l2==="V"){
                $('#modif').prepend('<img src="Letters/V/V1.jpg" />');
            }
            else if (l2==="W"){
                $('#modif').prepend('<img src="Letters/W/W1.jpg" />');
            }
            else if (l2==="X"){
                $('#modif').prepend('<img src="Letters/X/X1.jpg" />');
            }
            else if (l2==="Y"){
                $('#modif').prepend('<img src="Letters/Y/Y1.jpg" />');
            }
            else if (l2==="Z"){
                $('#modif').prepend('<img src="Letters/Z/Z1.jpg" />');
            }
            else if (l2==="*"){
                $('#modif').prepend('<img src="Letters/CS/CS1.jpg" />');
            }
        }
        else if (l1==="B"){
            $('#modif').prepend('<img src="Letters/B/B1.jpg" />');
        }
        else if (l1==="C"){
            $('#modif').prepend('<img src="Letters/C/C1.jpg" />');
        }
        else if (l1==="D"){
            $('#modif').prepend('<img src="Letters/D/D1.jpg" />');
        }
        else if (l1==="E"){
            $('#modif').prepend('<img src="Letters/E/E1.jpg" />');
        }
        else if (l1==="F"){
            $('#modif').prepend('<img src="Letters/F/F1.jpg" />');
        }
        else if (l1==="G"){
            $('#modif').prepend('<img src="Letters/G/G1.jpg" />');
        }
        else if (l1==="H"){
            $('#modif').prepend('<img src="Letters/H/H1.jpg" />');
        }
        else if (l1==="I"){
            $('#modif').prepend('<img src="Letters/I/I1.jpg" />');
        }
        else if (l1==="J"){
            $('#modif').prepend('<img src="Letters/J/J1.jpg" />');
        }
        else if (l1==="K"){
            $('#modif').prepend('<img src="Letters/K/K1.jpg" />');
        }
        else if (l1==="L"){
            $('#modif').prepend('<img src="Letters/L/L1.jpg" />');
        }
        else if (l1==="M"){
            $('#modif').prepend('<img src="Letters/M/M1.jpg" />');
        }
        else if (l1==="N"){
            $('#modif').prepend('<img src="Letters/N/N1.jpg" />');
        }
        else if (l1==="O"){
            $('#modif').prepend('<img src="Letters/O/O1.jpg" />');
        }
        else if (l1==="P"){
            $('#modif').prepend('<img src="Letters/P/P1.jpg" />');
        }
        else if (l1==="Q"){
            $('#modif').prepend('<img src="Letters/Q/Q1.jpg" />');
        }
        else if (l1==="R"){
            $('#modif').prepend('<img src="Letters/R/R1.jpg" />');
        }
        else if (l1==="S"){
            $('#modif').prepend('<img src="Letters/S/S1.jpg" />');
        }
        else if (l1==="T"){
            $('#modif').prepend('<img src="Letters/T/T1.jpg" />');
        }
        else if (l1==="U"){
            $('#modif').prepend('<img src="Letters/U/U1.jpg" />');
        }
        else if (l1==="V"){
            $('#modif').prepend('<img src="Letters/V/V1.jpg" />');
        }
        else if (l1==="W"){
            $('#modif').prepend('<img src="Letters/W/W1.jpg" />');
        }
        else if (l1==="X"){
            $('#modif').prepend('<img src="Letters/X/X1.jpg" />');
        }
        else if (l1==="Y"){
            $('#modif').prepend('<img src="Letters/Y/Y1.jpg" />');
        }
        else if (l1==="Z"){
            $('#modif').prepend('<img src="Letters/Z/Z1.jpg" />');
        }
        else if (l1==="*"){
            $('#modif').prepend('<img src="Letters/CS/CS1.jpg" />');
        }











    }
}*/

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