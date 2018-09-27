(() => {

  let button, target;

  let toogleMenu = (evt) => {
    evt.preventDefault();
    if( target.getAttribute("class") === 'header-menu-panel' ) {
      target.classList.add("active");
    } else {
      target.classList.remove("active");
    }
  };
  
  let init = () => { 
    button = document.getElementById('header-menu-btn'); 
    target = document.getElementById('header-menu-panel'); 
    button.addEventListener("click", toogleMenu, false); 
  };

  document.addEventListener("DOMContentLoaded", init, false);

})();