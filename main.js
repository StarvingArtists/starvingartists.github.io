$('.summable').change(function(){
    alert($(this).val());
})

$(".frameDropdown").change(function() {
    console.log("Hi");
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

let dropdown = $('#frameDropdown');
let frameList = $('#frameList');
dropdown.empty();

dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
dropdown.prop('selectedIndex', 0);

$.getJSON("values.json", function (data) {
  $.each(data, function (key, entry) {
      if (key == "frames") {
          $.each(entry, function (key2, entry2) {
              console.log(entry2.name)
              dropdown.append($('<option></option>').attr('value', entry.name).text(entry2.name));
              frameList.append($('<h1></h1>').attr('value', entry.name).text(entry2.name));
          })
           
      }
   
  })
});
