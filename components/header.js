class Header extends HTMLElement {
    //connectedCallback invoked each time custom component appended to document connedcted element.
    connectedCallback(){
        this.innerHTML = `
            <div class="banner">
                <button class="toggle-btns" onclick="toggleDarkMode()">toggle dark mode</button>
                <a href="/">
                     <img src="https://pbs.twimg.com/media/GKQQB2lW4AAwvFo?format=png&name=small" alt="dog" class="dog" />
                </a>
                <h1 class="banner-title">Vi-Linh Nguyen</h1>
                <p class="banner-desc">Visual Development & Illustration | Software Development | UX Research</p>

                <p class="banner-desc-responsive">Visual Development & Illustration |</p>
                <p class="banner-desc-responsive">Software Development |</p>
                <p class="banner-desc-responsive">UX Research</p>
            </div>
        `;
    }
}

customElements.define('header-component', Header);