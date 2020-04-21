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
        dist    : 0,
        duration: 100,
        padding:  10
      });


  // jquery for slider
  const autoplay = () => {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 1500);
  }
  
  autoplay()
  

// Modal section products
  let modalProduct = document.querySelectorAll('.modal'),
      instancesModal = M.Modal.init(modalProduct);



// secction about
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
    }
  })
  
  li2.addEventListener('click', (e) => {
    e.preventDefault();
    if (description2.classList == 'hide') {
      description2.classList.remove('hide')
      description1.classList.add('hide')
      description3.classList.add('hide')
    }
  })
  
  li3.addEventListener('click', (e) => {
    e.preventDefault();
    if (description3.classList == 'hide') {
      description3.classList.remove('hide')
      description1.classList.add('hide')
      description2.classList.add('hide')
    }
  })
  





// API Map Javascript
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -13.415115,
      lng: -76.152967
    },
    zoom: 15
  });
}
initMap()









})


  



