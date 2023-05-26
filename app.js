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

    $('.sidebar__link').not(this).removeClass('sidebar__link--active')
    $(this).toggleClass('sidebar__link--active')
  })


  // calendar
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const monthDayAmount = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ]
  function closeMenu() {
    $('.calendar').removeClass('calendar--active')
  }
  function toggleMenu() {
    $('.calendar').toggleClass('calendar--active')
  }

  function setActiveMenuLink(activeLinkId) {
    $('.calendar__menu__link').removeClass('calendar__menu__link--active')
    $(`#${activeLinkId}`).addClass('calendar__menu__link--active')
  }

  $('.calendar').ready(function() {
    setActiveMenuLink('calendar-range-today')

    startDate = Date.now()
    finishDate = Date.now()

    renderCalendar(startDate, finishDate)
  })
  $('#calendar-icon').click(function() {
    toggleMenu()

    startDate = Date.now()
    finishDate = Date.now()

    $('#calendar-range-today').click(function() {
      setActiveMenuLink('calendar-range-today')

      startDate = Date.now()
      finishDate = Date.now()

      renderCalendar(startDate, finishDate)
      closeMenu()
    })

    $('#calendar-range-yesterday').click(function() {
      setActiveMenuLink('calendar-range-yesterday')

      startDate = Date.now() - oneDayInMilliseconds
      finishDate = Date.now() - oneDayInMilliseconds

      renderCalendar(startDate, finishDate)
      closeMenu()
    })

    $('#calendar-range-last-week').click(function() {
      setActiveMenuLink('calendar-range-last-week')

      startDate = Date.now() - 7 * oneDayInMilliseconds
      finishDate = Date.now()

      renderCalendar(startDate, finishDate)
      closeMenu()
    })

    $('#calendar-range-last-30-days').click(function() {
      setActiveMenuLink('calendar-range-last-30-days')

      startDate = Date.now() - 30 * oneDayInMilliseconds
      finishDate = Date.now()

      renderCalendar(startDate, finishDate)
      closeMenu()
    })

    $('#calendar-range-this-month').click(function() {
      setActiveMenuLink('calendar-range-this-month')

      const month = new Date().getMonth()
      const year = new Date().getFullYear()

      startDate = new Date(year, month, 1)
      finishDate = new Date(year, month, monthDayAmount[month])

      renderCalendar(startDate, finishDate)
      closeMenu()
    })

    $('#calendar-range-last-month').click(function() {
      setActiveMenuLink('calendar-range-last-month')

      const month = new Date().getMonth() - 1
      const year = new Date().getFullYear()

      startDate = new Date(year, month, 1)
      finishDate = new Date(year, month, monthDayAmount[month])

      renderCalendar(startDate, finishDate)
      closeMenu()
    })

    $('#calendar-range-custom').click(function() {
      setActiveMenuLink('calendar-range-custom')

      startDate = Date.now()
      finishDate = Date.now()

      renderCalendar(startDate, finishDate)
      closeMenu()
    })

    $('#calendar-start-date-input').on('change', (e) => {
      setActiveMenuLink('calendar-range-custom')

      const finishDate = decodeDateFromInput($('#calendar-finish-date-input').val())
      const startDate = decodeDateFromInput(e.target.value)

      const startDateInMS = new Date(startDate.year, startDate.month - 1, startDate.day)
      const finishDateInMS = new Date(finishDate.year, finishDate.month - 1, finishDate.day)

      renderCalendar(startDateInMS, finishDateInMS)
    })

    $('#calendar-finish-date-input').on('change', (e) => {
      setActiveMenuLink('calendar-range-custom')
      
      const startDate = decodeDateFromInput($('#calendar-start-date-input').val())
      const finishDate = decodeDateFromInput(e.target.value)

      const startDateInMS = new Date(startDate.year, startDate.month - 1, startDate.day)
      const finishDateInMS = new Date(finishDate.year, finishDate.month - 1, finishDate.day)

      renderCalendar(startDateInMS, finishDateInMS)
    })
  })
  
  function parseDate(time) {
    const date = new Date(time)
    
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    
    return { day, month, year }
  }

  function formatDateForInput(day, month, year) {
    const monthView = `0${months.indexOf(month) + 1}`.slice(-2)
    const dayView = `0${day}`.slice(-2)
    return `${year}-${monthView}-${dayView}`
  }
  
  function formatDateForDiv(day, month, year) {
    return `${day} ${month} ${year}`
  }

  function decodeDateFromInput(value) {
    const [year, month, day] = value.split('-').map(_ => Number(_))
    return {day, month, year}
  }

  function renderCalendar(startDate, finishDate) {
    const { day: startDay, month: startMonth, year: startYear } = parseDate(startDate)
    const { day: finishDay, month: finishMonth, year: finishYear } = parseDate(finishDate)

    const startDateView = formatDateForDiv(startDay, startMonth, startYear)
    const endDateView = formatDateForDiv(finishDay, finishMonth, finishYear)
    
    $('#start-date').html(startDateView)
    $('#finish-date').html(endDateView)

    const startDateValue = formatDateForInput(startDay, startMonth, startYear)
    const finishDateValue = formatDateForInput(finishDay, finishMonth, finishYear)

    $('#calendar-start-date-input').val(startDateValue)
    $('#calendar-finish-date-input').val(finishDateValue)
  }
});