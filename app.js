$(document).ready(function() {
  const tabIndex = window.location.href.split('#').reverse()[0] - 1
  $(".tabs li").removeClass("active");
  $('.tabs li').eq(tabIndex).addClass("active");
  $(".myTable").eq(tabIndex).show();

  $(".tabs li").click(function() {
    var tabIndex = $(this).index();

    $(".tabs li").removeClass("active");
    $(this).addClass("active");

    $(".myTable").hide();
    $(".myTable").eq(tabIndex).show();
  });

  $(".sidebar__link").click(function() {
    let linkIndex = $(this).index()

    $('.sidebar__link').not(this).removeClass('sidebar__link--active')
    $(this).toggleClass('sidebar__link--active')
  })
  try {
    $('input[name="dates"]').daterangepicker();
  } catch(e) {}
});