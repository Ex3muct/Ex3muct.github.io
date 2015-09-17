$(".tabs_header").click (function(){var tabindex=$(this).attr("tabindex")});
$(".tabs_item").hide();
$("#"+tabindex).show();