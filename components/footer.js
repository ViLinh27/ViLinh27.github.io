class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <footer class="footer">
            <div class="f_contact">
              <p class="f_title">Contact Me</p>
              <p class="f_desc">
                <button class="modal-btn" href="#">vilinh27@gmail.com
                </button>
              </p>
            </div>
          
            <div class="f_morelinks">
              <p class="f_title">More Projects</p>
              <p class="f_desc">
                <button class="f_btns"><a href="https://codepen.io/vilinh27">Codepen</a></button>
              </p>
          
              <p class="f_desc">
                <button class="f_btns"><a href="https://github.com/ViLinh27/">Github</a></button>
              </p>
          
              <p class="f_desc">
                <button class="f_btns"><a href="https://linh-is-tibia.itch.io/">Itch.io</a></button>
              </p>
            </div>
          
            <div class="f_socials">
              <p class="f_title">Follow Me</p>
              <p class="f_desc">
                <button class="f_btns"><a href="https://www.instagram.com/linh_is_tibia/">
                    <i class="fa fa-instagram" id="i-insta"></i></a></button>
              </p>
          
              <p class="f_desc">
                <button class="f_btns"><a href="https://x.com/vilinh27">
                    <i class="fa fa-twitter" id="i-twit"></i></a></button>
              </p>
          
              <p class="f_desc">
                <button class="f_btns"><a href="https://www.youtube.com/@tibia-the-dog">
                    <i class="fa-brands fa-youtube" id="i-you"></i>
                  </a></button>
              </p>
          
            </div>
          </footer>
        `;
    }
}

customElements.define('footer-component', Footer);