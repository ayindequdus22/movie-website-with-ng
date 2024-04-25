'use strict'

$(document).ready(function(){

  $('.fa-bars').click(function(){
    $('nav').toggleClass('active');
  });
  // dark and light mode
  $('.themeBtn').click(function(){
    $('body').toggleClass('darktheme');
    $(this).toggleClass('fa-sun').addClass('fa-moon'); 
  });
  // scroll top
  $(window).scroll(function(){
    $('.upBtn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
});

    if($(window).scrollTop() > 20){
      $('header').addClass('active');
    }
    else{
      $('header').removeClass('active');
    };
    if($(window).scrollTop() > 120){
      $('.upBtn').addClass('active');
    }
    else{
      $('.upBtn').removeClass('active');
    }
    $('nav').removeClass('active');
  })
// home slider

let slides = document.querySelectorAll('.carousel-container');
 let index = 0;
  function next(){
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active');
 }
 
  $('#next').click(function(){
      next();
  })
 $('#prev').click(function(){
     prev();
 })
 function prev(){
   slides[index].classList.remove('active');
   index = (index - 1 + slides.length) % slides.length;
   slides[index].classList.add('active');
 }


// end of home slider
// home carousel/swiper
$('.movie-container').slick({
  dots:false,
  arrow : true,
  infinite : true,
  speed : 300,
  autoplay : false,
  slidesToShow : 4,
  slidesToScroll :1,
  prevArrow:'<div class="slick-arrow slickNext"><h1><span>&#139;</span></h1></div>',
  nextArrow: '<div class="slick-arrow slickPrev"><h1><span>&#155;</span></h1></div>',
  responsive : [
      {
          breakpoint:1200,
          settings : {
              slidesToShow : 3,
              slidesToScroll : 1,
              infinite : true,
              dots : true
          }
      },
      {
          breakpoint:996,
          settings : {
              slidesToShow : 3,
              slidesToScroll : 1
          }
      },
            {
        breakpoint:800,
        settings : {
            slidesToShow : 2.5,
            slidesToScroll : 1
        }
    },
      {
        breakpoint:600,
        settings : {
            slidesToShow : 2,
            slidesToScroll : 1
        }
    },
      {
        breakpoint:400,
        settings : {
            slidesToShow : 1.5,
            slidesToScroll : 1,
  autoplay:true,
        }
    },

  ]
});
// movies swiper
$('#carousel-container').slick({
  
  speed : 2000,
  lazyload : 'progressive',
  arrows : true,
  dots : false,
  autoplay:true,
  prevArrow : '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
  nextArrow : '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
  responsive : [
      {
          breakpoint : 450,
          settings : {
              dots : true,
              arrows : false,
              autoplay : true,
          }
      }
  ]
}).slickAnimation();
$(".slick-nav").on("click touch", function (e){
  e.preventDefault();

  var arrow = $(this);

  if(!arrow.hasClass('animate')){
      arrow.addClass('animate');
      setTimeout(() => {
          arrow.removeClass('animate');
      }, 1600);
  }
});


// ended

// filter
$('.btnfilter').click(function(){
  const value = $(this).attr(`data-filter`);
  if(value == 'all'){
    $('#movieSectContainer .movie').show(10).addClass('active');
  }
  else{
    $('#movieSectContainer .movie').not('.'+value).hide(10);
    $('#movieSectContainer .movie').filter('.'+value).show(10).addClass('active');
  
  }
  // add active class on selected items
  $('.btnfilter').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#movieSectContainer .movie').addClass('active');
  })
  })


// recommended
  var swiper = new Swiper(".owl-carousel", {
    centeredSlides: true,
    loop:true,
    spaceBetween:20,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".nextArrow",
      prevEl: ".prevArrow",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

});
// countdown  sect
let daysItem = document.querySelector("#day1");
let hoursItem = document.querySelector("#hour1");
    let minItem = document.querySelector("#minute1");
    let secItem = document.querySelector("#second1");
   
   
    let countDown = () => {
      let futureDate = new Date("1 Jan 2027");
      let currentDate = new Date();
      let myDate = futureDate - currentDate;
      //console.log(myDate);
   
      let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
   
      let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
   
      let min = Math.floor(myDate / 1000 / 60) % 60;
   
      let sec = Math.floor(myDate / 1000) % 60;
   
      daysItem.innerHTML = days;
      hoursItem.innerHTML = hours;
      minItem.innerHTML = min;
      secItem.innerHTML = sec;
    }
    countDown()   
    setInterval(countDown, 1000)
    
    
   
// countdown sect
$('.Countbuttons button').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
$('.Countbuttons .similarBtn').click(function(){
  $('.countContainer .similar1').addClass('active').siblings().removeClass('active');
});
$('.Countbuttons .episodeBtn').click(function(){
  $('.countContainer .episodes1').addClass('active').siblings().removeClass('active');
});
$('.Countbuttons .countdownBtn').click(function(){
  $('.countContainer .countBox1').addClass('active').siblings().removeClass('active');
});
$('.Countbuttons .overviewBtn').click(function(){
  $('.countContainer .overview1').addClass('active').siblings().removeClass('active');
});
// recommended
$('#Sectchanger').click(function(){
  $(this).addClass('active').siblings().removeClass('active');

})
// 
//  onload
// function onload(){
//   $('.preloader').delay(2000).fadeOut('slow');
//   $('.body').delay(2000).fadeIn('slow')
//   setTimeout(function() {   
//       $('html').animate({scrollTop: 0});
//           $('html').css("scrollBehavior", "auto");
//       },2000);  
// }