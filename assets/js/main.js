(function($) { "use strict";

// mobile-drop-down
jQuery('.dropdown-icon').on('click',function(){
  // alert()
  // $(this).next('.mob-submenu').slideToggle();
  jQuery(this).toggleClass('active').next('ul').slideToggle();
  jQuery(this).parent().siblings().children('ul').slideUp();
  jQuery(this).parent().siblings().children('.active').removeClass('active');
});


// mobile-search-area

$('.search-btn').on("click", function(){
  $('.mobile-search').addClass('slide');
});

$('.search-cross-btn').on("click", function(){
  $('.mobile-search').removeClass('slide');
});

// sticky header

window.addEventListener('scroll',function(){
  const header = document.querySelector('header.style-1');
  header.classList.toggle("sticky",window.scrollY > 0);
});

// Sidebar Sticky

document.querySelector('.sidebar-button').addEventListener('click', () => 
document.querySelector('.main-menu').classList.toggle('show-menu'));

$('.sidebar-button').click (function(){
  $(this).toggleClass('active');
});

// password-hide and show
   
const togglePassword = document.querySelector('#togglePassword');

const password = document.querySelector('#password');

if(togglePassword){
 togglePassword.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   // toggle the eye / eye slash icon
   this.classList.toggle('bi-eye');
 });
}
// company password-hide and show
   
const togglePassword3 = document.querySelector('#togglePassword3');

const password3 = document.querySelector('#password3');

if(togglePassword3){
 togglePassword3.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
   password3.setAttribute('type', type);
   // toggle the eye / eye slash icon
   this.classList.toggle('bi-eye');
 });
}



// confirm-password
const togglePassword2= document.getElementById('togglePassword2');

const password2 = document.querySelector('#password2');

if (togglePassword2){
 togglePassword2.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
   password2.setAttribute('type', type);
   // toggle the eye / eye slash icon
   this.classList.toggle('bi-eye');
 });
}
//company confirm-password
const togglePassword4= document.getElementById('togglePassword4');

const password4 = document.querySelector('#password4');

if (togglePassword4){
 togglePassword4.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = password4.getAttribute('type') === 'password' ? 'text' : 'password';
   password4.setAttribute('type', type);
   // toggle the eye / eye slash icon
   this.classList.toggle('bi-eye');
 });
}}
(jQuery));