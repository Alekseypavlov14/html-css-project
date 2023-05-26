$(document).ready(function() {
  let tabIndex = 0

  try {
    tabIndex = Number(window.location.href.split('#').reverse()[0]) - 1
  } catch(e) {} 

  $(".tabs li").removeClass("active");
  $('.tabs li').eq(tabIndex).addClass("active");

  $(".myTable").hide();
  $(".myTable").eq(tabIndex).show();

  window.onhashchange = (e) => {
    let tabIndex = 0

    try {
      tabIndex = Number(window.location.href.split('#').reverse()[0]) - 1
    } catch(e) {} 

    $(".tabs li").removeClass("active");
    $('.tabs li').eq(tabIndex).addClass("active");

    $(".myTable").hide();
    $(".myTable").eq(tabIndex).show();
  }

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
  
  $('.sidebar__link__submenu__link').click(function() {
    $('.sidebar__link__submenu__link').removeClass('sidebar__link__submenu__link--active')
    $(this).addClass('sidebar__link__submenu__link--active')
  })

  try {
    $('input[name="dates"]').daterangepicker();
  } catch(e) {}
});