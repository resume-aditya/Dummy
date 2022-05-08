console.log('lets make some web components')

class fancyButton extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = 'I am also this : and I will call this ->' + this.getAttribute('callback');
  }
}
customElements.define('fancy-button', fancyButton);


class superFancyButton extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = 'I am super at this : and I will call this ->' + this.getAttribute('callback');
  }
}
customElements.define('super-fancy-button', superFancyButton, {extends: 'button'});

class shadowButton extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    let someShadow = this.attachShadow({mode : 'open'})
    someShadow.innerHTML = 'I am Ras Al Ghul ->';
  }
}
customElements.define('shadow-button', shadowButton);


