
// nav mobile
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });



// colapsible section bussines
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

// images section bussines
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});

// parallax
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});

// Modal Config
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});
  

// function to change img in slider
// document.addEventListener('DOMContentLoaded', () => {

//   const parallax = document.getElementById('parallax'),
//         img = [
//           'img/slider1.png',
//           'img/slider2.png',
//           'img/slider3.png'
//         ]
  
//   let count = 0;
  
//   setInterval(() => {
//     if (count < img.length) {
//       count++;
//       const imgTest = parallax.querySelector('img').src = `img/slider${count}.png`;
//     }else{
//       count = 0;
//     }
//   }, 2000);
// })



// function for change content of about section

// const item = document.getElementById('about-item-list')

// const itemList = item.querySelectorAll('li')
// console.log(itemList[0]);

// if (itemList[0] == 0) {
//   console.log(`test`);
  
// }

// js of formm in login