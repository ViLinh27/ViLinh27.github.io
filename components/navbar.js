class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <nav class="main-nav" id="mainNav">
                <a href="/pages/about.html">About</a>
                <div class="dropdown">
                <a class="dropbtn" href="/pages/portfolios/visdev_illustration.html">Vis Dev & Illustration &#8964;</a>
                <div class="dropdown-content">
                    <a href="/pages/portfolios/visdev_illustration.html#visualDevelopment#visualDevelopment">Visual Development</a>
                    <a href="/pages/portfolios/visdev_illustration.html#illustration">Illustration</a>
                    <a href="/pages/portfolios/visdev_illustration.html#characterDesign">Character Design</a>
                </div>
                </div>
                <!--<a href="#">Vis Dev</a> fix later-->
                <div class="dropdown">
                <a class="dropbtn" href="/pages/portfolios/software_dev.html">Software Dev &#8964;</a>
                <div class="dropdown-content">
                    <a href="/pages/portfolios/software_dev.html#webdev">Web Development</a>
                    <a href="/pages/portfolios/software_dev.html#appdev">App Development</a>
                    <a href="/pages/portfolios/software_dev.html#gamedev">Game Development</a>
                </div>
                </div>
                <a href="/pages/portfolios/ux_research.html">UX Research</a>
                <div class="dropdown">
                <a class="dropbtn" href="#">Misc. &#8964;</a>
                <div class="dropdown-content">
                    <a href="/pages/misc/writing.html">Writing</a>
                    <a href="/pages/misc/traditional_art.html">traditional art</a>
                    <a href="/pages/misc/sticker_designs.html">sticker designs</a>
                    <a href="/pages/misc/zines.html">zines</a>
                    <a href="/pages/misc/sculptures.html">sculptures</a>
                    <a href="/pages/misc/fibre_arts.html">fibre arts</a>
                    <a href="/pages/misc/book_binding.html">Bookbinding</a>
                </div>
                </div>
                <a href="javascript:void(0);" class="icon" onclick="responsiveNavFunc()">
                <i class="fa fa-bars"></i>
                </a>
            </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);