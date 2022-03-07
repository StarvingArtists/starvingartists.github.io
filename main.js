$(".summable").change(function() {
    var total = 0;
    $.each($(".summable") ,function() {
        total += parseInt($(this).val());
    });
    $("#sum2").html(total)
});

// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
