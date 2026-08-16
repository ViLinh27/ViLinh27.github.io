class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <nav class="main-nav" id="mainNav">
                <a href="#">About</a>
                <div class="dropdown">
                <a class="dropbtn" href="#">Vis Dev & Illustration &#8964;</a>
                <div class="dropdown-content">
                    <a href="#">Visual Development</a>
                    <a href="#">Illustration</a>
                    <a href="#">Character Design</a>
                </div>
                </div>
                <!--<a href="#">Vis Dev</a> fix later-->
                <div class="dropdown">
                <a class="dropbtn" href="#">Software Dev &#8964;</a>
                <div class="dropdown-content">
                    <a href="#">Web Development</a>
                    <a href="#">App Development</a>
                    <a href="#">Game Development</a>
                </div>
                </div>
                <a href="#">UX Research</a>
                <div class="dropdown">
                <a class="dropbtn" href="#">Misc. &#8964;</a>
                <div class="dropdown-content">
                    <a href="#">Writing</a>
                    <a href="#">traditional art</a>
                    <a href="#">sticker designs</a>
                    <a href="#">zines</a>
                    <a href="#">sculptures</a>
                    <a href="#">fibre arts</a>
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