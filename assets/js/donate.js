$(document).ready(function(){

    $('#searchbar').focus();

    $('#donate-buttons').on('click', '.btn-blue', function(e) {
      e.preventDefault();
      $('.active').removeClass('active');
      $('#other-input').hide().siblings('#other').show();
      $(this).filter('.btn-blue').addClass("active");
      var value = $(this).data('impact');
      $(this).closest('div').find('p').text("" + value);
      $('#other-input').find('input').val('');  
    });
      
    $('.btn-green').on('click', function() {
      var peso;
      var input = $('#other-input').find('input').val();
      if ( !input ) {
        peso = $('.active').data('pesos');
       } else if ( $.trim(input) === '' || isNaN(input)) {
        // empty space leaves value = 'undefined'. 
        // Have to fix $.trim(input) == '' above so that it works.
        console.log('Yes');
        peso = "Please enter a number."; 
      } else {
        peso = input;
      }
      $('#price').text(""+peso);
    });

    $('#other').on('click', function(e) {
      e.preventDefault(); 
      var buttons = $(this).parent('#donate-buttons');
      buttons.find('.active').removeClass('active');
      var other = $(this).hide().siblings('#other-input');
      other.show();
      other.find('input').focus();
      var pText = buttons.siblings('p');
      pText.text("Thank you for your most generous, continued, and vital support.");
      var oValue = other.find('input');
      oValue.keyup(function() {
        if ( oValue.val() > 50 ) {
          pText.text("Thank you!" + " Your help means so much to us!");
        } else {
          pText.text("We are pleased to have you today.");
        }
      });
    }); 

  });


function contBtn(){
    swal(
        'Thank you for your support!',
        'We appreciate your help.',
        'success'
    );
}
contBtn();