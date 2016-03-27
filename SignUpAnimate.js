$(document).ready(function(){
  $('#Sign_up-trigger').click(function(){
    $(this).next('#Sign_up-content').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
});

$(document).ready(main)