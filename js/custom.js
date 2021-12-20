// menu-fixed
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});


//   service slick
  
$('.service-main').slick({
    dots: false,
    infinite: true,
    arrows:false,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          loops:true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
// accordion-custom make
const accordion =
document.querySelectorAll('.contentBx');
accordion.forEach(acc =>{
    acc.addEventListener('click',function(){
        this.classList.toggle('active');
    })
})


 // Coundown js
$('.coun-down1').countdown('2022/01/01', function(event) {
    $(this).html(event.strftime('%H'));
});
$('.coun-down2').countdown('2022/01/01', function(event) {
    $(this).html(event.strftime('%M'));
});
$('.coun-down3').countdown('2022/01/01', function(event) {
    $(this).html(event.strftime('%S'));
});
// js-ends