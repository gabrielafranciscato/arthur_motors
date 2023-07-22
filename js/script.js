$(document).ready(function () {
    $("#carousel-images").slick({
      autoplay: true,
    });

    $(".menu-hamburguer").click(function () {
      $("nav").slideToggle();
    })

    $('#phone').mask('00000 000000')

    $('form').validate({
        rules: {
              name: {
                  required:true
              },
              email: {
                  required:true,
                  email:true
              },
              phone: {
                  required:true
              },
              message: {
                  required:false,
              }
        },
        message:{
          name: 'type your name here'
        },
        submitHandler: function(form) {
          console.log(form)
        },
        invalidHandler: function(evento, validador) {
          let incorrectCamps = validador.numberOfInvalids();
          if (incorrectCamps) {
            alert(`${incorrectCamps} incorrects camps`)
          }
        }
    })
    
    $('.vehicles-list button').click(function() {
        const destino = $('#contact');
        const vehiclesName = $(this).parent().find('h3').text();

        $('#message').val(vehiclesName);

        $('html').animate ({
            scrollTop: destino.offset().top 
        },1000)
    })

  })