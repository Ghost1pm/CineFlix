const search = document.querySelector('.wraper .search')
const searchon = document.querySelector('.searchon')
const menu = document.querySelector('.menu_button')
const closeon = document.querySelector('.closeon')
const menuactive1 = document.querySelector('.menuactive1')
const menuactive2 = document.querySelector('.menuactive2')

search.addEventListener('click',()=>{
  searchon.classList.add("searchActive")
})
closeon.addEventListener('click',()=>{
  searchon.classList.remove("searchActive")
})
menu.addEventListener('click',()=>{
  menu.classList.toggle("active")
  menuactive1.classList.toggle("active")
  menuactive2.classList.toggle("active")
})
