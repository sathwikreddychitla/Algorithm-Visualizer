$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('nav').addClass('black');
           }

           else {
                 $('nav').removeClass('black');
           }
     })
AOS.init();

var form = document.getElementById("my-form");

   async function handleSubmit(event) {
     event.preventDefault();
     var status = document.getElementById("status");
     var data = new FormData(event.target);
     fetch(event.target.action, {
       method: form.method,
       body: data,
       headers: {
           'Accept': 'application/json'
       }
     }).then(response => {
       status.classList.add('success');
       status.innerHTML = "Your Message was sent!";
       form.reset();
     }).catch(error => {
       status.classList.add('error');
       status.innerHTML = "Oops! There was a problem submitting your form";
     });
   }
   form.addEventListener("submit", handleSubmit)
