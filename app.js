$(document).ready(function() {
  let tabIndex = 0

  try {
    tabIndex = Number(window.location.href.split('#').reverse()[0]) - 1
  } catch(e) {} 

  const url = window.location.href.split('/').reverse()[0]
  $(`.sidebar__link__submenu__link[href="${url}"]`).addClass('sidebar__link__submenu__link--active')

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

  $(".sidebar__link__label").click(function() {
    $('.sidebar__link').not($(this).closest('.sidebar__link')).removeClass('sidebar__link--active')
    $(this).closest('.sidebar__link').toggleClass('sidebar__link--active')
  })
  
  $('.sidebar__link__submenu__link').click(function() {
    $('.sidebar__link__submenu__link').removeClass('sidebar__link__submenu__link--active')
    $(this).addClass('sidebar__link__submenu__link--active')
  })

  try {
    $('input[name="dates"]').daterangepicker();
  } catch(e) {}
});