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


  // // calendar
  // const oneDayInMilliseconds = 1000 * 60 * 60 * 24
  // const months = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December'
  // ]
  // const monthDayAmount = [
  //   31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  // ]


  // $('.calendar').ready(function() {
  //   startDate = Date.now()
  //   finishDate = Date.now()

  //   renderCalendar(startDate, finishDate)
  // })
  // $('.calendar').click(function() {
  //   $('.calendar').toggleClass('calendar--active')


  //   let startDate = 0
  //   let finishDate = 0

  //   $('#calendar-range-today').click(function() {
  //     startDate = Date.now()
  //     finishDate = Date.now()

  //     renderCalendar(startDate, finishDate)
  //   })

  //   $('#calendar-range-yesterday').click(function() {
  //     startDate = Date.now() - oneDayInMilliseconds
  //     finishDate = Date.now() - oneDayInMilliseconds

  //     renderCalendar(startDate, finishDate)
  //   })

  //   $('#calendar-range-last-week').click(function() {
  //     startDate = Date.now() - 7 * oneDayInMilliseconds
  //     finishDate = Date.now()

  //     renderCalendar(startDate, finishDate)
  //   })

  //   $('#calendar-range-last-30-days').click(function() {
  //     startDate = Date.now() - 30 * oneDayInMilliseconds
  //     finishDate = Date.now()

  //     renderCalendar(startDate, finishDate)
  //   })

  //   $('#calendar-range-this-month').click(function() {
  //     const month = new Date().getMonth()
  //     const year = new Date().getFullYear()

  //     startDate = new Date(year, month, 1)
  //     finishDate = new Date(year, month, monthDayAmount[month])

  //     renderCalendar(startDate, finishDate)
  //   })

  //   $('#calendar-range-last-month').click(function() {
  //     const month = new Date().getMonth() - 1
  //     const year = new Date().getFullYear()

  //     startDate = new Date(year, month, 1)
  //     finishDate = new Date(year, month, monthDayAmount[month])

  //     renderCalendar(startDate, finishDate)
  //   })
  // })
  
  // function parseDate(time) {
  //   const date = new Date(time)
    
  //   const day = date.getDate()
  //   const month = months[date.getMonth()]
  //   const year = date.getFullYear()
    
  //   return `${day} ${month} ${year}`
  // }

  // function renderCalendar(startDate, finishDate) {
  //   const startDateView = parseDate(startDate)
  //   const endDateView = parseDate(finishDate)
    
  //   $('#start-date').html(startDateView)
  //   $('#finish-date').html(endDateView)
  // }

});