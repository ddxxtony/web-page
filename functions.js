var showNavMenu = () => {
    var mainNav = $("#header-nav");
    if(!mainNav.hasClass('fixed')){
        mainNav.stop().addClass('fixed').css('top', '-50px').animate({'top': '0px'}, 500)
      }
}

var hideNaMenu =()=>{
    var mainNav = $("#header-nav");
    mainNav.removeClass('fixed')
}

var toggleMenuOptions =()=>{
    event.preventDefault()
    $('#menu-options').toggleClass('show-menu')
}


$(document).ready(function() {
    $(window).scroll(()=>{
        if($(window).scrollTop() > $('#limit-to-show-nav').offset().top){
            showNavMenu(); 
        }else{
            hideNaMenu();
        }

    })
    $('#mobile-menu-button').click(toggleMenuOptions);
  });

