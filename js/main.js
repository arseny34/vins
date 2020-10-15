$(function () {
  $('.reviews__slider, .news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: 'ease-in-out',
    nextArrow:
      '<button class="slick-next"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="26" viewBox="0 0 32 26"><image width="32" height="26" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAABUklEQVRIicWWO0oEQRBAn6uJYmSy4AUE43XUM6h3MfADfmDFFXTEA3gXj7CJgRqYmJkY+QcDpaQaFqtnt3undn3QSRc99aip6amJoihwYBvYBO6BdeA19ZFTZiefHeBMT80DXaCVKtEwO3k0e5IHFlRidhwCH8CL2c2QqCvwDKwA7yaSKFFXQLgFimElPASEG2AJeDORARJeAmglsiU8BYS7XAlvgSAxB1ybSEQiXESLsfLU4BG4AC6B6QqJ38tKBE6BXc8SKJ99btogsSz/gm8THh/dUfRADq2Gluq/OJJ3tAHsAzOOEl/AE7DWpw9KoC3BK13ebOlsEKMMjT+qHjgEzoFJE+lJLlSVpw4nwF7F+fLvJ+9dgU5Ocm+BjjZzjGhyT4HjYZJ7CUjiA7ObkNxDoKmljzEwuYeADKWx8TspuYeADKWrwINOx7JkTE/7uwI/bWJFuE8N6BcAAAAASUVORK5CYII="/></svg></button>',
    prevArrow:
      '<button class="slick-prew"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="26" viewBox="0 0 32 26"><image  width="32" height="26" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAABeElEQVRIicWWPUvDUBSGn1oXRXASkew6umipOuri4H9xsqsdtYM6+zdEHLopgqjg4Obo4Cji9ydy8ARKTnLTpKf1WQL3bfM+yb253EqtVqMAY8ABMA3sAK0if05jOGUsCym/AGY03wYqei3NUMnymC1g0vy6AN0IZJULr8CbGXUUCJV/AYvAg0mcBPLK68CVSZwEQuXfwAJwaRIngbzyuuYuJAVC5T/65G7lQqdAqPwGmADOTdIj8UYUKv8E9oARYF43Hw9egGvZiseBs4xy9NXLtz5qkt7ZlSloB8rRddKPcmFdbj5nhgeICDT/sf9RFuGmLrANE/8h838ITAFVk5bnSR4+/goaek2TkFV/BOybxIFqFEXxXdq62JYStxXJNeBev5a+CYQkhFXgHTgxiaNAnsSKt0SaQDcSH14SWQJ5Esu6RR+bxFGgG4ln4NQkBUg7DyRpBE6+rUEcSoUsCXkDcjAtTd4UdCLTITvmrC7CO52G29LtwC/0pUqQN8hJ/AAAAABJRU5ErkJggg=="/></svg></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    easing: 'ease-in-out',
    nextArrow:
      '<button class="slick-next"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="26" viewBox="0 0 32 26"><image width="32" height="26" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAABUklEQVRIicWWO0oEQRBAn6uJYmSy4AUE43XUM6h3MfADfmDFFXTEA3gXj7CJgRqYmJkY+QcDpaQaFqtnt3undn3QSRc99aip6amJoihwYBvYBO6BdeA19ZFTZiefHeBMT80DXaCVKtEwO3k0e5IHFlRidhwCH8CL2c2QqCvwDKwA7yaSKFFXQLgFimElPASEG2AJeDORARJeAmglsiU8BYS7XAlvgSAxB1ybSEQiXESLsfLU4BG4AC6B6QqJ38tKBE6BXc8SKJ99btogsSz/gm8THh/dUfRADq2Gluq/OJJ3tAHsAzOOEl/AE7DWpw9KoC3BK13ebOlsEKMMjT+qHjgEzoFJE+lJLlSVpw4nwF7F+fLvJ+9dgU5Ocm+BjjZzjGhyT4HjYZJ7CUjiA7ObkNxDoKmljzEwuYeADKWx8TspuYeADKWrwINOx7JkTE/7uwI/bWJFuE8N6BcAAAAASUVORK5CYII="/></svg></button>',
    prevArrow:
      '<button class="slick-prew"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="26" viewBox="0 0 32 26"><image  width="32" height="26" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAABeElEQVRIicWWPUvDUBSGn1oXRXASkew6umipOuri4H9xsqsdtYM6+zdEHLopgqjg4Obo4Cji9ydy8ARKTnLTpKf1WQL3bfM+yb253EqtVqMAY8ABMA3sAK0if05jOGUsCym/AGY03wYqei3NUMnymC1g0vy6AN0IZJULr8CbGXUUCJV/AYvAg0mcBPLK68CVSZwEQuXfwAJwaRIngbzyuuYuJAVC5T/65G7lQqdAqPwGmADOTdIj8UYUKv8E9oARYF43Hw9egGvZiseBs4xy9NXLtz5qkt7ZlSloB8rRddKPcmFdbj5nhgeICDT/sf9RFuGmLrANE/8h838ITAFVk5bnSR4+/goaek2TkFV/BOybxIFqFEXxXdq62JYStxXJNeBev5a+CYQkhFXgHTgxiaNAnsSKt0SaQDcSH14SWQJ5Esu6RR+bxFGgG4ln4NQkBUg7DyRpBE6+rUEcSoUsCXkDcjAtTd4UdCLTITvmrC7CO52G29LtwC/0pUqQN8hJ/AAAAABJRU5ErkJggg=="/></svg></button>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// (function () {
//   const cropElement = document.querySelectorAll('.reviews__item-text'), // выбор элементов
//     size = 200; // кол-во символов
//   endCharacter = '...'; // окончание

//   cropElement.forEach((el) => {
//     let text = el.innerHTML;

//     if (el.innerHTML.length > size) {
//       text = text.substr(0, size);
//       el.innerHTML = text + endCharacter;
//     }
//   });
// })();
