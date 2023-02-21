const accountImg = document.querySelector('.content-account img')
const hoverShow = document.querySelector('.hover-show-container')

accountImg.addEventListener('mouseover', function () {
  hoverShow.style.display = 'block'
})
accountImg.addEventListener('mouseleave', function () {
  hoverShow.style.display = 'none'
})

hoverShow.addEventListener('mouseover', function () {
  hoverShow.style.display = 'block'
})
hoverShow.addEventListener('mouseleave', function () {
  hoverShow.style.display = 'none'
})