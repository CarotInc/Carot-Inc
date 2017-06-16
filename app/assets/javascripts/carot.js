
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript">
$(function(){
  $("#toggle").click(function(){
    $("#menu").slideToggle();
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $("#menu").show();
    } else {
      $("#menu").hide();
    }
  });
});
/* 追記部分(メニューリンクをクリックでメニューを一旦閉じる) */
$(function() {
  var win = $(window).width();
    var p = 480;
    if(win < p)$(function(){
    $("#menu li a").click(function(){
      $("#menu").hide();
    });
  });
});

</script>