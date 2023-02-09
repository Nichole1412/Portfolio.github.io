
$(".about").hide();
$(".contact").hide();
$(".Resume").hide();
$(".Protfoliobtn").click(function(){
  $(".ddcontent").slideToggle("1s");
});

$(".Aboutbtn").click(function(){
  $(".main").hide();
  $(".about").show();
  $(".contact").hide();
  $(".Resume").hide();
});

$(".Contactbtn").click(function(){
  $(".main").hide();
  $(".about").hide();
  $(".contact").show();
  $(".Resume").hide();
})
$(".Resumebtn").click(function(){
  $(".main").hide();
  $(".about").hide();
  $(".contact").hide();
  $(".Resume").show();
})

