function activeTableStore() {
  let store = {}
  let subscribers = []

  function init(initialStore) {
    store = initialStore
    subscribers.forEach(handler => handler(store))
  }
  function updateStore(newStore) {
    store = Object.assign({}, store, newStore)
    subscribers.forEach(handler => handler(store))
  }
  function subscribe(handler) {
    subscribers.push(handler)
  }

  return { init, updateStore, subscribe }
}

function generateStore(index) {
  const pages = [
    'revenues',
    'subscription',
    'clients',
    'contents'
  ]
  const page = window.location.href.split('/').reverse()[0]
  const pageName = page.split('.html')[0]
  const pageIndex = pages.indexOf(pageName.toLowerCase())

  return {
    pageIndex: pageIndex,
    tableIndex: index,
  }
}

$(document).ready(function() {
  const store = activeTableStore()
  
  store.subscribe((store) => {
    // sidebar
    $('.sidebar__link__submenu__link').removeClass('sidebar__link__submenu__link--active')
    $(`.sidebar__link:nth-child(${store.pageIndex + 1}) .sidebar__link__submenu__link:nth-child(${store.tableIndex + 1})`).addClass('sidebar__link__submenu__link--active')

    // tabs
    $(`.tabs li`).removeClass('active')
    $('.tabs li').eq(store.tableIndex).addClass('active')

    // table
    $(".myTable").hide();
    $(".myTable").eq(store.tableIndex).show();
  })
  
  const initialStore = generateStore(Number(window.location.hash.slice(1)) - 1)
  store.init(initialStore)

  $(".sidebar__link__label").click(function() {
    $('.sidebar__link').not($(this).closest('.sidebar__link')).removeClass('sidebar__link--active')
    $(this).closest('.sidebar__link').toggleClass('sidebar__link--active')
  })
  
  $('.sidebar__link__submenu__link').click(function() {
    store.updateStore(generateStore($(this).index()))
  })
  $('.tabs li').click(function() {
    store.updateStore(generateStore($(this).index()))
  })

  try {
    $('input[name="dates"]').daterangepicker();
  } catch(e) {}

  $('#header-menu-icon').click(() => {
    $('.sidebar').toggleClass('sidebar--hidden')
  })
});