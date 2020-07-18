document.addEventListener('DOMContentLoaded', () => {
  
  // active nav mobile
  let sidenav = document.querySelectorAll('.sidenav'),
      instancesSidenav = M.Sidenav.init(sidenav);

  // images section bussines
  let imageAbout = document.querySelectorAll('.materialboxed'),
      instancesImageeAbout = M.Materialbox.init(imageAbout);

  // carousel clients
  var elems = document.querySelectorAll('.carousel'),
      instances = M.Carousel.init(elems, {
        dist     : -30,
        duration : 200,
        padding  :  200
      });


  // jquery for slider
  const autoplay = () => {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 15000);
  }
  
  autoplay()


// Modal section products
  let modalProduct = document.querySelectorAll('.modal'),
      instancesModal = M.Modal.init(modalProduct);

  if (document.querySelector('#allProducts')) {
    let allCardsProducts = document.querySelector('#allProducts');

    allCardsProducts.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-trigger')) {      
        let btnModal = e.target;

        document.getElementById('modal-title').innerHTML = btnModal.dataset.name;
        document.getElementById('modal-description').innerHTML = btnModal.dataset.description;
        document.getElementById('modal-stock').innerHTML = btnModal.dataset.stock;
        document.getElementById('modal-img').src = btnModal.dataset.img;
      }
    });
  }


// secction about
  if (document.getElementById('li1')) {
    const li1 = document.getElementById('li1'),
          li2 = document.getElementById('li2'),
          li3 = document.getElementById('li3'),

          description1 = document.getElementById('about-description1'),
          description2 = document.getElementById('about-description2'),
          description3 = document.getElementById('about-description3');

    li1.addEventListener('click',(e)=>{
      e.preventDefault();
      if (description1.classList == 'hide') {
        description1.classList.remove('hide')
        description2.classList.add('hide')
        description3.classList.add('hide')
        li1.classList.add('active')
        li2.classList.remove('active')
        li3.classList.remove('active')
      }
    })

    li2.addEventListener('click', (e) => {
      e.preventDefault();
      if (description2.classList == 'hide') {
        description2.classList.remove('hide')
        description1.classList.add('hide')
        description3.classList.add('hide')
        li2.classList.add('active')
        li1.classList.remove('active')
        li3.classList.remove('active')
      }
    })

    li3.addEventListener('click', (e) => {
      e.preventDefault();
      if (description3.classList == 'hide') {
        description3.classList.remove('hide')
        description1.classList.add('hide')
        description2.classList.add('hide')
        li3.classList.add('active')
        li1.classList.remove('active')
        li2.classList.remove('active')
      }
    })
  }
  





// API Map Javascript
// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {
//       lat: -13.415115,
//       lng: -76.152967
//     },
//     zoom: 15
//   });
// }
// initMap()



// API LeafletJS
let map = L.map('map').setView([-13.415084, -76.153008], 17);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-13.415084, -76.153008]).addTo(map)
    .bindPopup('Cartoneria | F & L')
    .openPopup();






});

