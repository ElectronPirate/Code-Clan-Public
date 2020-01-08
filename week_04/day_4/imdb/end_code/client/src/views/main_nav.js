class MainNav{

  constructor(navContainer){
    this.navContainer = navContainer;
  }

  bindEvents(){
    // Loop round all the links in the nav and attach bevaiour
    const links = this.navContainer.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (evt) => {
        // set all others to none
        this.hideAll(links);
        document.getElementById(evt.target.dataset.container).style.display = 'block';
        evt.target.classList.add('active');
      });
    }
  }

  hideAll(links){
    for(let link of links) {
      document.getElementById(link.dataset.container).style.display = 'none';
      link.classList.remove('active');
    }
  }

}

module.exports = MainNav;
