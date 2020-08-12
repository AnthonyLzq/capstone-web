const navbarHeight = document.getElementById('navbar').offsetHeight
const content = document.getElementById('content')
content.style.height = `calc(100vh - ${navbarHeight}px)`

const navbarHeight2 = document.getElementById('navbar2').offsetHeight
const headerHeight = navbarHeight + navbarHeight2

const info = document.getElementById('info')
info.style.height = `calc(100vh - ${headerHeight}px)`

const ulNavbar = document.getElementById('navList')
const navbarItems = [].slice.call(document.getElementsByTagName('li'))

const contentInfo = Array.from(document.querySelectorAll('.info'))

const navbarClickItem = id => {
  const clickedItem = document.getElementById(id)
  navbarItems.forEach((item, index) => {
    item.classList.remove('active')
    contentInfo[index].classList.remove('visible')
    contentInfo[index].classList.remove('invisible')
  })

  switch (id) {
    case 'members':
      contentInfo[0].classList.add('visible')
      break
    case 'memories':
      contentInfo[1].classList.add('visible')
      break
    case 'net-documentation':
      contentInfo[2].classList.add('visible')
      break
    case 'structure':
      contentInfo[3].classList.add('visible')
      break
    case 'admin':
      contentInfo[4].classList.add('visible')
  }

  clickedItem.classList.add('active')
}
