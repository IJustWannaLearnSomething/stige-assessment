$('#darkModeToggle').click(() => {
  $('.darkModeBtn').toggleClass('invisible')
  $('.lightModeBtn').toggleClass('invisible')
  $('body').toggleClass('dark-background')
  $('.left').toggleClass('left-dark')
  $('.right').toggleClass('right-dark')
})

$('#languageToggle').click(() => {
  $('.english').toggleClass('invisible')
  $('.hindi').toggleClass('invisible')
})
