$( ".sans-backround" ).hover(function() {
 $(this).css("transform", "scale(1.5)");
});
$(".sans-backround").mouseleave(function () {
$(this).css("transform","initial");
});
$(".go").click(function () {
 $(".sanstexte").toggle();
});
