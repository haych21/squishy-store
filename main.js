document.addEventListener("DOMContentLoaded", () => {


  // =========================
  // HOME CAROUSEL ONLY
  // =========================

  const carousel = document.querySelector('.home-carousel');


  if (carousel) {

    const cards = carousel.querySelectorAll('.product-card');

    let index = 0;


    function getStep() {

      const gap = 20;

      return cards[0].offsetWidth + gap;

    }


    setInterval(() => {


      const step = getStep();


      index++;


      if (index > cards.length - 3) {

        index = 0;

      }


      carousel.scrollTo({

        left: index * step,

        behavior: 'smooth'

      });


    }, 2500);

  }



  // =========================
  // HAMBURGER ALL PAGES
  // =========================


  const hamburger = document.querySelector(".hamburger");

  const menu = document.querySelector(".links");


  if (hamburger && menu) {


    hamburger.addEventListener("click", () => {


      menu.classList.toggle("active");


    });


  }


});