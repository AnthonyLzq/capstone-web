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
const htmlInfo = [`
<div class="container">
  <div class="row">
    <div class="col-6">
      <div class="container">
        <div class="row padding">
          <div class="col-3">
            <img class="photo" src="https://s.gravatar.com/avatar/07a063fd3d89fba1e6905cfda2f2b323?s=80"
              alt="Anthony's photo">
          </div>
          <div class="col-9 name text-primary">Steve Anthony Luzquiños Agama</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="container">
        <div class="row padding">
          <div class="col-3">
            <img
              src="https://lh3.googleusercontent.com/-7GPu592YbTQ/AAAAAAAAAAI/AAAAAAAAAAA/AUrWqv7xLjo/s100-p/photo.jpg"
              alt="Luis's photo" class="photo fix-photo">
          </div>
          <div class="col-9 name text-primary">Luis Angel Flores Huamaní</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div class="container">
        <div class="row padding">
          <div class="col-3">
            <img src="https://www.orce.uni.edu.pe/fotosuni/006020162665B.jpg" alt="Cristopher's photo"
              class="photo fix-photo">
          </div>
          <div class="col-9 name text-primary">Cristopher Sebastián García Pacheco</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="container">
        <div class="row padding">
          <div class="col-3">
            <img
              src="https://scontent.flim23-1.fna.fbcdn.net/v/t31.0-8/23157449_1502793483136936_6527755451930943033_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeHKts02AoY2ojY_luUNxRgOF4IZ19QPIVQXghnX1A8hVFa_zEws3-k9ZrQPoeL3s7dHETAxCTx1juZzr5ddhqGb&_nc_ohc=rBtucD7C0EUAX9KEBu2&_nc_ht=scontent.flim23-1.fna&oh=220c8165368025ed3962ef8bdeac9729&oe=5F3B6C0E"
              alt="Diegos's photo" class="photo fix-photo">
          </div>
          <div class="col-9 name text-primary">Diego Andrade Carril</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div class="container">
        <div class="row padding">
          <div class="col-3">
            <img
              src="https://scontent.flim23-1.fna.fbcdn.net/v/t1.0-1/p200x200/103761161_2739658976312304_4733472957537814209_o.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=CEwCN43EC6IAX-YdDFu&_nc_ht=scontent.flim23-1.fna&_nc_tp=6&oh=7bae8af451b8008e4414a880275fe05c&oe=5F3A0659"
              alt="Luis Sullca's photo" class="photo fix-photo">
          </div>
          <div class="col-9 name text-primary">Luis Alfredo Sullca Huaraca</div>
        </div>
      </div>
    </div>
    <div class="col-6"></div>
  </div>
</div>`,
`
<div class="container">
  <div class="row">
    <div class="col-3">
      <div id="memories" class="btn-group-vertical">
        <button id="notebook" type="button" class="btn btn-secondary memories-btn"
          onClick=memoriesClickItem(this.id)>Cuaderno de bitácora</button>
        <button id="explain-phases" type="button" class="btn btn-secondary memories-btn"
          onClick=memoriesClickItem(this.id)>Explicaciones por fases</button>
        <button id="i-study" type="button" class="btn btn-secondary memories-btn"
          onClick=memoriesClickItem(this.id)>Inconvenientes con el estudio del proyecto</button>
        <button id="i-req" type="button" class="btn btn-secondary memories-btn"
          onClick=memoriesClickItem(this.id)>Inconvenientes con los requisitos</button>
        <button id="i-sol" type="button" class="btn btn-secondary memories-btn"
          onClick=memoriesClickItem(this.id)>Problemas de viabilidad de soluciones</button>
        <button id="r-b" type="button" class="btn btn-secondary memories-btn"
          onClick=memoriesClickItem(this.id)>Referencias bibliográficas</button>
        <button id="i-a" type="button" class="btn btn-secondary memories-btn disabled"
          onClick=memoriesClickItem(this.id)>Implementaciones adicionales</button>
      </div>
    </div>
    <div class="col-9">
      <div class="info-block bg-light"></div>
    </div>
  </div>
</div>`,
`
<div class="container">
  <div class="row">
    <div class="col-2">
      <div id="documentation" class="btn-group-vertical">
        <button id="a-inv" type="button" class="btn btn-secondary memories-btn"
          onClick=documentationClickItem(this.id)>Auditoría de inventario</button>
        <button id="a-i" type="button" class="btn btn-secondary memories-btn"
          onClick=documentationClickItem(this.id)>Auditoría de instalación</button>
        <button id="a-o" type="button" class="btn btn-secondary memories-btn disabled"
          onClick=documentationClickItem(this.id)>Auditoría operacional</button>
        <button id="a-e" type="button" class="btn btn-secondary memories-btn disabled"
          onClick=documentationClickItem(this.id)>Auditoría de eficiencia</button>
        <button id="a-s" type="button" class="btn btn-secondary memories-btn"
          onClick=documentationClickItem(this.id)>Auditoría de seguridad</button>
      </div>
    </div>
    <div class="col-10">
      <div class="info-block bg-light"></div>
    </div>
  </div>
</div>`, '',
`
<div class="container">
  <div class="row">
    <div class="col-2">
      <div id="admin" class="btn-group-vertical">
        <button id="r-pol" type="button" class="btn btn-secondary memories-btn"
          onClick=servicesClickItem(this.id)>Políticas de enrutamiento</button>
        <button id="dhcp" type="button" class="btn btn-secondary memories-btn"
          onClick=servicesClickItem(this.id)>Configuración DHCP</button>
        <button id="dns" type="button" class="btn btn-secondary memories-btn disabled"
          onClick=servicesClickItem(this.id)>Configuración DNS</button>
        <button id="s-pol" type="button" class="btn btn-secondary memories-btn disabled"
          onClick=servicesClickItem(this.id)>Políticas de seguridad</button>
        <button id="ss" type="button" class="btn btn-secondary memories-btn disabled"
          onClick=servicesClickItem(this.id)>Software utilizado en servidores</button>
        <button id="ds" type="button" class="btn btn-secondary memories-btn disabled"
          onClick=servicesClickItem(this.id)>Dimensionamiento de servidores</button>
      </div>
    </div>
    <div class="col-10">
      <div class="info-block bg-light"></div>
    </div>
  </div>
</div>
`]

contentInfo[0].innerHTML = htmlInfo[0]

const htmlMembers = ['notebook', 'explain', 'i-study', 'i-req', 'i-sol', 'r-b', 'i-a']
const htmlDocumentation = ['a-inventory', 'a-install', 'a-operational', 'a-eficiency', 'a-security']
const htmlServices = ['r-pol', 'dhcp', 'dns', 's-pol', 'ss', 'ds']
let workArea

const navbarClickItem = id => {
  const clickedItem = document.getElementById(id)

  navbarItems.forEach((item, index) => {
    item.classList.remove('active')
    if (item.id === id) {
      contentInfo[index].classList.remove('invisible')
      contentInfo[index].classList.add('visible')
      contentInfo[index].innerHTML = htmlInfo[index]
      workArea = document.querySelector('.info-block')
      switch (id) {
        case 'memories':
          workArea.innerHTML = htmlMembers[0]
          break
        case 'net-documentation':
          workArea.innerHTML = htmlDocumentation[0]
          break
        case 'structure':
          break
        case 'admin':
            workArea.innerHTML = htmlServices[0]
          break
      }
    } else {
      contentInfo[index].classList.remove('visible')
      contentInfo[index].classList.add('invisible')
      contentInfo[index].innerHTML = ''
    }
  })

  clickedItem.classList.add('active')
}


const memoriesClickItem = id => {
  const clickedItem = document.getElementById(id)
  const buttons = Array.from(document.querySelectorAll('div[id="memories"] > button'))

  buttons.forEach((button, index) => {
    if (!clickedItem.classList.contains('disabled') && button.id === id) {
      workArea.innerHTML = htmlMembers[index]
    }
  })
  
}

const documentationClickItem = id => {
  const clickedItem = document.getElementById(id)
  const buttons = Array.from(document.querySelectorAll('div[id="documentation"] > button'))

  buttons.forEach((button, index) => {
    if (!clickedItem.classList.contains('disabled') && button.id === id) {
      workArea.innerHTML = htmlDocumentation[index]
    }
  })
  
}

const servicesClickItem = id => {
  const clickedItem = document.getElementById(id)
  const buttons = Array.from(document.querySelectorAll('div[id="admin"] > button'))

  buttons.forEach((button, index) => {
    if (!clickedItem.classList.contains('disabled') && button.id === id) {
      workArea.innerHTML = htmlServices[index]
    }
  })
  
}