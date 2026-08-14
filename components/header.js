class Header extends HTMLElement {
    //connectedCallback invoked each time custom component appended to document connedcted element.
    connectedCallback(){
        this.innerHTML = `
            <div class="banner">
                <img src="https://pbs.twimg.com/media/GKQQB2lW4AAwvFo?format=png&name=small" alt="dog" class="dog" />
                <h1 class="banner-title">Vi-Linh Nguyen</h1>
                <p class="banner-desc">Visual Development & Illustration | Software Development | UX Research</p>
            </div>
        `;
    }
}

customElements.define('header-component', Header);