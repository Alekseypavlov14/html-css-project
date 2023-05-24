$(document).ready(function() {
  $(".tabs li").click(function() {
    var tabIndex = $(this).index();

    $(".tabs li").removeClass("active");
    $(this).addClass("active");

    $(".myTable").hide();
    $(".myTable").eq(tabIndex).show();
  });
  $(".sidebar__link").click(function() {
    let linkIndex = $(this).index()

    $('.sidebar__link').removeClass('sidebar__link--active')
    $(this).addClass('sidebar__link--active')
  })
});