var clic=1;
var id1;
var id2;
var src1;
var src2;
var tableau=[false,false,false,false,false,true,false,false,false];
function  triche(){
$('#image1').attr("src","images/1.jpg");
$('#image2').attr("src","images/2.jpg");
$('#image3').attr("src","images/3.jpg");
$('#image4').attr("src","images/4.jpg");
$('#image5').attr("src","images/5.jpg");
$('#image6').attr("src","images/6.jpg");
$('#image7').attr("src","images/7.jpg");
$('#image8').attr("src","images/8.jpg");
$('#image9').attr("src","images/9.jpg");

}


$(".img-fluid").click(function () {
        if (clic===1){
            id1=$(this).attr('id');
            src1=$(this).attr('src');

            clic=2;
        }
        else if (clic===2){
            id2=$(this).attr('id');
            src2=$(this).attr('src');
            $('#'+id1).attr('src',src2);
           $('#'+id2).attr('src',src1);


            clic=1;
        }


});
$("#boutonRecommencer").click(function () {
 var case23=false;
 var i;
for (i=0;i<=9;i+=1){
 while (!case23){
     var nbaleatoire=Math.floor((Math.random()*8)+1);
     if (tableau[nbaleatoire]===false){
         tableau[nbaleatoire]=true;
         $('#image1').attr("src","images/"+ nbaleatoire +".jpg");
         case23=true;
     }
 }
}
});
$('#boutonTricher').click(function () {
triche();
});
