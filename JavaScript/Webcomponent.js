class fancyButton extends HTMLElement {
    constructor () {
      super()
    }
  
    connectedCallback () {
    // attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
    const shadow = this.attachShadow({ mode : 'open' }); //'close' is another option, it denies access to nodes
    this.innerHTML = 'I am also this : and I will call this ->' + this.getAttribute('callback');
    }
  }
  customElements.define('fancy-button', fancyButton);
  