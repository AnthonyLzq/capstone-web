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
              src="https://scontent.flim15-1.fna.fbcdn.net/v/t31.0-8/23157449_1502793483136936_6527755451930943033_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeErad7-w3zZ-ziPH6w_0MaUF4IZ19QPIVQXghnX1A8hVBEqkMP_AykQnCTHN3Xs68xxFElJFOVGIXx4pk9m9UIw&_nc_ohc=DHCfIqHSNBsAX-ihEFd&_nc_ht=scontent.flim15-1.fna&oh=34f7833cbb8b3a461d8ada25d4319e1f&oe=5F7EA88E"
              alt="Diegos's photo" class="photo fix-photo">
          </div>
          <div class="col-9 name text-primary">Diego Andrade Carril</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
`
<div class="container">
  <div class="row">
    <div class="col-3">
      <div id="memories" class="btn-group-vertical">
        <button id="notebook" type="button" class="btn btn-secondary fixed-btn disabled"
          onClick=memoriesClickItem(this.id)>Cuaderno de bitácora</button>
        <button id="explain-phases" type="button" class="btn btn-secondary fixed-btn disabled"
          onClick=memoriesClickItem(this.id)>Explicaciones por fases</button>
        <button id="i-study" type="button" class="btn btn-secondary fixed-btn"
          onClick=memoriesClickItem(this.id)>Inconvenientes con el estudio del proyecto</button>
        <button id="i-i" type="button" class="btn btn-secondary fixed-btn"
          onClick=memoriesClickItem(this.id)>Inconvenientes con la implementación</button>
        <button id="i-req" type="button" class="btn btn-secondary fixed-btn"
          onClick=memoriesClickItem(this.id)>Inconvenientes con los requisitos</button>
        <button id="i-sol" type="button" class="btn btn-secondary fixed-btn"
          onClick=memoriesClickItem(this.id)>Problemas de viabilidad de soluciones</button>
        <button id="r-b" type="button" class="btn btn-secondary fixed-btn"
          onClick=memoriesClickItem(this.id)>Referencias bibliográficas</button>
        <button id="i-a" type="button" class="btn btn-secondary fixed-btn"
          onClick=memoriesClickItem(this.id)>Implementaciones adicionales</button>
      </div>
    </div>
    <div class="col-9">
      <div class="info-block memories bg-light"></div>
    </div>
  </div>
</div>`,
`
<div class="container">
  <div class="row">
    <div class="col-2">
      <div id="documentation" class="btn-group-vertical">
        <button id="a-inv" type="button" class="btn btn-secondary fixed-btn"
          onClick=documentationClickItem(this.id)>Auditoría de inventario</button>
        <button id="a-i" type="button" class="btn btn-secondary fixed-btn"
          onClick=documentationClickItem(this.id)>Auditoría de instalación</button>
        <button id="a-o" type="button" class="btn btn-secondary fixed-btn disabled"
          onClick=documentationClickItem(this.id)>Auditoría operacional</button>
        <button id="a-e" type="button" class="btn btn-secondary fixed-btn disabled"
          onClick=documentationClickItem(this.id)>Auditoría de eficiencia</button>
        <button id="a-s" type="button" class="btn btn-secondary fixed-btn disabled"
          onClick=documentationClickItem(this.id)>Auditoría de seguridad</button>
      </div>
    </div>
    <div class="col-10">
      <div class="info-block bg-light"></div>
    </div>
  </div>
</div>`,
// `
// <div class="container">
//   <div class="row">
//     <div class="col-2">
//       <div id="structure" class="btn-group-vertical">
//         <button id="a-inv" type="button" class="btn btn-secondary fixed-btn"
//           onClick=structureClickItem(this.id)>Campus Letras</button>
//         <button id="a-i" type="button" class="btn btn-secondary fixed-btn"
//           onClick=structureClickItem(this.id)>Campus Técnicas</button>
//         <button id="a-o" type="button" class="btn btn-secondary fixed-btn"
//           onClick=structureClickItem(this.id)>Campus Ciencias</button>
//       </div>
//     </div>
//     <div class="col-10">
//       <div class="info-block structure bg-light"></div>
//     </div>
//   </div>
// </div>`, 
`
<div class="container">
  <div class="row">
    <div class="col-2">
      <div id="internetworking" class="btn-group-vertical">
        <button id="top-l-f'" type="button" class="btn btn-secondary fixed-btn"
          onClick=interNetworkingClickItem(this.id)>Topología física y lógica</button>
        <button id="wam" type="button" class="btn btn-secondary fixed-btn"
          onClick=interNetworkingClickItem(this.id)>Conexión WAN entre campus</button>
        <button id="server-l" type="button" class="btn btn-secondary fixed-btn"
          onClick=interNetworkingClickItem(this.id)>Ubicación de servidores</button>
        <button id="internet" type="button" class="btn btn-secondary fixed-btn"
          onClick=interNetworkingClickItem(this.id)>Acceso a internet</button>
        <button id="remote" type="button" class="btn btn-secondary fixed-btn"
          onClick=interNetworkingClickItem(this.id)>Acceso remoto</button>
        <button id="ip" type="button" class="btn btn-secondary fixed-btn"
          onClick=interNetworkingClickItem(this.id)>Direccionamiento IP</button>
      </div>
    </div>
    <div class="col-10">
      <div class="info-block internetworking bg-light"></div>
    </div>
  </div>
</div>
`,
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
      <div class="info-block admin bg-light"></div>
    </div>
  </div>
</div>
`]

contentInfo[0].innerHTML = htmlInfo[0]

const htmlMemories = ['notebook', 'explain', 
`
<ul class="fix-pad">
  <li class="text-primary">
    Al ser una topología compleja se tuvo el problema de realizar todo en un solo proyecto, lo que causaba que muchas partes no fueran visibles, y limitaba el hecho de poder trabajar en él concurrentemente, posteriormente se optó por usar clouds.
  </li>
  <li class="text-primary">
    Para la implementación del Spanning Tree Protocol, de desconocia la forma correcta de hacerlo con los Switches normales, por ellos se usaron Ethernet Switches.
  </li>
  <li class="text-primary">
    En el caso del servidor DHCP se tuvo que realizar la descarga de los paquetes intercambiando las interfaces asociadas a la máquina virtual para poder tener acceso a internet, ya que se desconocía el cómo usar un nodo NAT.
  </li>
</ul>
`,
`
<ul class="fix-pad">
  <li class="text-primary">Tener todo en un mismo proyecto dificulta el avance en paralelo.</li>
  <li class="text-primary">Al usar un Ethernet Switch se deben usar interfaces específicas para una correcta implementación del Spanning Tree por lo que se cometieron algunos errores durante la implementación.
  </li>
  <li class="text-primary">Al ser una gran cantidad de ips, un fallo en cualquier configuración puede resultar en el mal funcionamiento de la red, dependiendo en qué parte de la topología se cometió el error.
  </li>
</ul>`,
`
<ul class="fix-pad">
  <li class="text-primary">El requisito posterior de la segmentación mediante VLANS causó problemas al momento de realizar el SPT debido a que no se logró encontrar una solución para poder usar ambos conceptos.</li>
</ul>`,
`
<ul class="fix-pad">
  <li class="text-primary">El enrutamiento estático para una topología tan grande resultó en grandes errores humanos que dejaban sin conexión a las facultades, por lo que se optó por realizar un enrutamiento dinámico, lo que facilitó el tiempo de implementación.</li>
</ul>`,
`
<ul class="fix-pad">
  <li>
    <a class="text-primary" href="https://www.youtube.com/watch?v=japdEY1UKe4" target="_blank">Spanning Tree Protocol Explained | Step by Step</a>
  </li>
  <li>
    <a class="text-primary" href="https://www.sysnettechsolutions.com/en/configure-spanning-tree-gns3/" target="_blank">How to configure Spanning Tree on Cisco Switch in GNS3</a>
  </li>
  <li>
    <a class="text-primary" href="https://www.mikroways.net/2009/08/05/configuracion-de-vlans-con-cisco/" target="_blank">CONFIGURACIÓN DE VLANS CON CISCO</a>
  </li>
  <li>
    <a class="text-primary" href="https://www.youtube.com/watch?v=zrBTDLx2Mpk" target="_blank">Configure the Router as a DHCP Relay Agent - CCNA</a>
  </li>
  <li>
    <a class="text-primary" href="https://www.youtube.com/watch?v=3bmmJ_2dMVs" target="_blank">3.2.1.8 Packet Tracer - Configuring RIPv2</a>
  </li>
</ul>`,
`
<h2 class="text-primary">Spanning tree protocol</h2>
<p class="text-primary">Se implementó el protocolo Spanning tree en la facultad de medicina, tomando los switch de sus departamentos.<br />
Tomamos como root bridge al switch del departamento de Bioquímica, sus puertos se configuran automáticamente en forwarding.</p>
<a href="./assets/st_1.png" target="_blank">
  <img src="./assets/st_1.png" alt="st_1">
</a><br /><br />
<p class="text-primary">Tomamos como secondary root al switch del departamento de PAS Medicina el cual tendrá todos sus puertos en estado forwarding.</p>
<a href="./assets/st_2.png" target="_blank">
  <img src="./assets/st_2.png" alt="st_2">
</a><br /><br />
<p class="text-primary">Los demás switch automáticamente configuran sus puertos en estado forwarding los puertos root(los que se dirigen al root bridge) y el puerto que se dirige a las vpc 's.<br />
Los demás puertos permanecerán bloqueados hasta que se envíe un mensaje BPDU topology change que indique que hubo un cambio en la topología, esto podría hacer que algunos de los puertos bloqueados pasen a estado forwarding.<br />
Recordemos que para que un puerto pase a estado forwarding, debe pasar primero por los estados listening y learning que son estados transitorios, esto lleva algo de tiempo y se pueden perder paquetes mientras se reconfiguran los puertos.<br />
</p>
<a href="./assets/st_3.png" target="_blank">
  <img src="./assets/st_3.png" alt="st_3">
</a>
`]
const htmlDocumentation = [
`
<a href="./assets/au_inv.jpeg" target="_blank">
  <img src="./assets/au_inv.jpeg" alt="inventary">
</a>
`, 
`
<ul class="fix-pad">
  <li class="text-primary">Se implementaron direcciones estáticas en los routers.</li>
  <li class="text-primary">Se implementó un servidor DHCP Centos hacia todos host.</li>
  <li class="text-primary">Se implementó enrutamiento dinámico RIPV2.</li>
  <li class="text-primary">Todos los servicios y protocolos antes mencionados funcionan correctamente, al igual que los dispositivos utilizados.
  </li>
</ul>
`, 'a-operational', 'a-eficiency', 'a-security']
const htmlStructure = ['campus-l', 'campus-t', 'campus-c']
const htmlInternetworking = [
`
<h1>
  <a class="text-primary" href="https://www.figma.com/file/Bzs5YpRQwv7M6zGebqMWxf/PROYECTO-CAPSTONE?node-id=5%3A0" target="_blank">Topología general</a>
</h1>
<a href="./assets/topo-gen.jpeg" target="_blank">
  <img src="./assets/topo-gen.jpeg" alt="general-topology">
</a>
<h2 class="text-primary">Servicios de informática</h2>
<a href="./assets/topo-to-info-service.jpeg" target="_blank">
  <img src="./assets/topo-to-info-service.jpeg" alt="topology-to-info-serice">
</a>
<h2 class="text-primary">Servicios generales</h2>
<a href="./assets/general-service.jpeg" target="_blank">
  <img src="./assets/general-service.jpeg" alt="general-service">
</a>
<h2 class="text-primary">Derecho</h2>
<a href="./assets/derecho_topology.png" target="_blank">
  <img src="./assets/derecho_topology.png" alt="derecho_topology">
</a>
<h2 class="text-primary">Ingeniería</h2>
<a href="./assets/ingenieria_topology.png" target="_blank">
  <img src="./assets/ingenieria_topology.png" alt="ingenieria_topology">
</a>
<h2 class="text-primary">Informática</h2>
<a href="./assets/informatica_topology.png" target="_blank">
  <img src="./assets/informatica_topology.png" alt="informatica_topology">
</a>
<h2 class="text-primary">Matemáticas</h2>
<a href="./assets/matematicas_topology.png" target="_blank">
  <img src="./assets/matematicas_topology.png" alt="matematicas_topology">
</a>
<h2 class="text-primary">Filología</h2>
<a href="./assets/filo_topology.jpeg" target="_blank">
  <img src="./assets/filo_topology.jpeg" alt="filo_topology">
</a>
<h2 class="text-primary">Medicina</h2>
<a href="./assets/medicine.png" target="_blank">
  <img src="./assets/medicine.png" alt="medicine">
</a>
`, 
`
<p class="text-primary">Para verificar que exista una correcta comunicación entre los campos se realizó una prueba entre una vpc ubicada en la facultad de Medicina (Campus de Ciencias) y otra ubicada en la facultad de Filología (Campus de letras), donde PC6 pertenece a la facultad de Medicina, y PC1 pertenece a la facultad de Filología.</p>
<a href="./assets/test_1.png" target="_blank">
  <img src="./assets/test_1.png" alt="test_1">
</a>
<a href="./assets/test_2.png" target="_blank">
  <img src="./assets/test_2.png" alt="test_2">
</a>
`,
`
<p class="text-primary">Todos los servidores se ubicaron en el Departamento de Sistemas y Red, ya que estos no deben estar dispersos por la LAN, se escogió este lugar ya que es el centro de trabajo de los Servicios Informáticos.</p>
`, 
`
<p class="text-primary">Para establecer una conexión a internet desde GNS3 se usa un nodo NAT, por defecto este nodo trabaja mediante dhcp con un pool en el rango 192.168.122.0/24.<br />
Se debe conectar el router de salida al nodo NAT y luego configurar el router para que haga uso del servicio dhcp del nodo y además asignarle un servidor DNS.<br />
En el caso de la topología presentada la interfaz mediante la cual el router general obtendrá el acceso a internet es FastEthernet2/0, por ello ahí es donde se realizará la siguiente configuración.
</p>
<a href="./assets/inter_1.png" target="_blank">
  <img src="./assets/inter_1.png" alt="inter_1">
</a><br /><br />
<p class="text-primary">El servidor DNS a usarse será el de google (8.8.8.8), esto se agregó debido a que al no tener un servidor que se encargue de la resolución de nombres solo se podía tener acceso a internet si se conocía previamente la ip asociada.
</p>
<a href="./assets/inter_2.png" target="_blank">
  <img src="./assets/inter_2.png" alt="inter_2">
</a>
`,
`
<p class="text-primary">Para el acceso remoto se utilizó un nodo Cloud, el cual nos permitía hacer conexiones UDP de la siguiente forma.</p>
<a href="./assets/udp_1.png" target="_blank">
  <img src="./assets/udp_1.png" alt="udp">
</a>
<a href="./assets/udp_2.png" target="_blank">
  <img src="./assets/udp_2.png" alt="udp_2">
</a><br /><br />
<p class="text-primary">Se indican los puertos y el host remoto mediante los cuales se realizarán las conexiones, y en la otra interfaz a la que se conectará se realizará la misma configuración pero con un orden inverso en los puertos.</p>
`,
`
<a href="./assets/ip_1.jpeg" target="_blank">
  <img src="./assets/ip_1.jpeg" alt="ip_1">
</a>
<a href="./assets/ip_2.jpeg" target="_blank">
  <img src="./assets/ip_2.jpeg" alt="ip_2">
</a>
<a href="./assets/ip_3.jpeg" target="_blank">
  <img src="./assets/ip_3.jpeg" alt="ip_3">
</a>
`]
const htmlServices = [
`
<p class="text-primary">Para el enrutamiento usamos el protocolo RIPV2 en todos los routers de nuestra Universidad.<br />
Este protocolo es una versión mejorada del RIPV1, que se diferencia en que es un protocolo sin clases, admite autenticación y VLSM.<br />
Consiste en asignar a un router todas las subredes a las que está conectado directamente en su tabla rip. Este comparte su tabla de enrutamiento con los routers adyacentes que empleen el mismo protocolo y conozca las rutas de otros routers.
</p>
<a href="./assets/route_1.png" target="_blank">
  <img src="./assets/route_1.png" alt="route_1">
</a><br /><br />
`, 
`
<p class="text-primary">Empleamos un servidor DHCP en una máquina virtual Centos 7. Este servidor asigna ips a todas las subredes(VLANS) de nuestra universidad.<br />
Primero instalamos el servicio en nuestra máquina.
</p>
<a href="./assets/dhcp_1.png" target="_blank">
  <img src="./assets/dhcp_1.png" alt="dhcp_1">
</a><br /><br />
<p class="text-primary">Luego asignamos IP estática a nuestra interfaz enp0s3:</p>
<a href="./assets/dhcp_2.png" target="_blank">
  <img src="./assets/dhcp_2.png" alt="dhcp_2">
</a>
<a href="./assets/dhcp_3.png" target="_blank">
  <img src="./assets/dhcp_3.png" alt="dhcp_3">
</a><br /><br />
<p class="text-primary">Configuramos el archivo dhcpd.conf:</p>
<a href="./assets/dhcp_4.png" target="_blank">
  <img src="./assets/dhcp_4.png" alt="dhcp_4">
</a><br /><br />
<p class="text-primary">Asignamos un pool a cada subred(VLAN) diferente:</p>
<a href="./assets/dhcp_4.5.png" target="_blank">
  <img src="./assets/dhcp_4.5.png" alt="dhcp_4.5">
</a><br /><br />
<p class="text-primary">Por último reiniciamos el servicio:</p>
<a href="./assets/dhcp_5.png" target="_blank">
  <img src="./assets/dhcp_5.png" alt="dhcp_5">
</a><br /><br />
<p class="text-primary">Para que un host que esté en una subred no conectada directamente al servidor, es necesario el uso del Agent Relay para poder identificar al servidor DHCP.<br />
Para las subredes(VLANS) de Filología:
</p>
<a href="./assets/dhcp_6.png" target="_blank">
  <img src="./assets/dhcp_6.png" alt="dhcp_6">
</a><br /><br />
<p class="text-primary">La ip del DHCP server es 192.170.2.100<br />
Solicitamos IP de un host en Filología:
</p>
<a href="./assets/dhcp_7.png" target="_blank">
  <img src="./assets/dhcp_7.png" alt="dhcp_7">
</a>
`, 'dns', 's-pol', 'ss', 'ds']
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
          // It should start with 0
          workArea.innerHTML = htmlMemories[2]
          break
        case 'net-documentation':
          workArea.innerHTML = htmlDocumentation[0]
          break
        case 'structure':
          workArea.innerHTML = htmlStructure[0]
          break
        case 'internetworking':
          workArea.innerHTML = htmlInternetworking[0]
          break
        case 'admin':
          workArea.innerHTML = htmlServices[0]
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
      workArea.innerHTML = htmlMemories[index]
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

const structureClickItem = id => {
  const clickedItem = document.getElementById(id)
  const buttons = Array.from(document.querySelectorAll('div[id="structure"] > button'))

  buttons.forEach((button, index) => {
    if (!clickedItem.classList.contains('disabled') && button.id === id) {
      workArea.innerHTML = htmlStructure[index]
    }
  })
}

const interNetworkingClickItem = id => {
  const clickedItem = document.getElementById(id)
  const buttons = Array.from(document.querySelectorAll('div[id="internetworking"] > button'))

  buttons.forEach((button, index) => {
    if (!clickedItem.classList.contains('disabled') && button.id === id) {
      workArea.innerHTML = htmlInternetworking[index]
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


