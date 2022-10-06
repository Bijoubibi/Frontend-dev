// JavaScript Document

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector("header nav ul");


hamburger.addEventListener("click", openMenu);

function openMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("not-active");
    navMenu.classList.toggle("not-active");
}
console.log(hamburger);

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let circle = document.getElementById('circle');
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
  });
  
  let circle = document.getElementById('circle');
  const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }
  document.addEventListener('mousemove', onMouseMove);  