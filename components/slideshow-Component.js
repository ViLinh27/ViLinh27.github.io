class MySlideShow extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.slideIndex = 1;//initial value here for better scope//look up other stuff
    }
    static get observedAttributes(){
        return[
            'slideshow-title',
            'slideshow-imgs',
            'slideshow-captions'
        ];
    }

    connectedCallback(){
        this.render();
        this.setupEventListeners();//look this up
    }
    attributeChangedCallback(oldVal,newVal){
        if (oldVal!==newVal){
            this.render();
            this.setupEventListeners();//look this up
        }
    }
    setupEventListeners(){
        //this will look for number of slides so we know how many buttons to put in to slideshow (to my understanding)
        const shadowRoot = this.shadowRoot;

        const prevBtn = shadowRoot.querySelector('.prev');//first matching
        const nextBtn = shadowRoot.querySelector('.next');
        const dots = shadowRoot.querySelectorAll('.dot');//all matches
        
        //to my understanding the cloning and replacing is to account for dynamic num of slides
        if(prevBtn){
            const newPrev = prevBtn.cloneNode(true);
            prevBtn.parentNode.replaceChild(newPrev,prevBtn);//look this up
            newPrev.addEventListener('click',()=>this.plusSlides(-1));
        }

        if(nextBtn){
            const newNext = nextBtn.cloneNode(true);
            nextBtn.parentNode.replaceChild(newNext, nextBtn);
            newNext.addEventListener('click',()=> this.plusSlides(1));
        }
    
        //we don't know how many slides there are so clone dots as needed
        dots.forEach((dot,index)=>{
            const newDot = dot.cloneNode(true);
            dot.parentNode.replaceChild(newDot,dot);
            newDot.addEventListener('click',()=>this.currentSlide(index+1));
        });

        //first slide
        this.showSlides(this.slideIndex);
    };  
    //notice how the slideshow functions are outside the event listener and render() now
    //for more global scope
   
    plusSlides(n){
        this.showSlides(this.slideIndex+=n);
    }
    currentSlide(n){
        this.showSlides(this.slideIndex=n);
    }

    showSlides(n){
        const shadow = this.shadowRoot;//a shadow root because the other one doesn't have global scope i guess?
        //change from getElementbyClassName to querySelectorAll
        //this means return a NodeList instead of HTML Collection
        //Nodelist is probably easier to manipulate as a datastructure
        //shadow instead of document so it looks in the shadow dom
        let slides = shadow.querySelectorAll(".mySlides");
        let dots = shadow.querySelectorAll(".dot");
        
        if(slides.length ===0) return;//if we have no slides precaution
        //we actually have slides here:
        if (n > slides.length) {
            //this keyword so slideIndex is defined in this scope
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = slides.length
        }
        //hide the slides at first
        //i needs to be defined inside loop
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        /*
            check to see if above loop works as well as this loop:
            slides.forEach(slide => {
                slide.style.display = "none";
            });
        */
       //remove active from all dots 
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        //show current slide and show corresponding dot with it
        //this checks if there is a corresponding dot
        slides[this.slideIndex-1].style.display = "block";
        if (dots[this.slideIndex-1]){
            dots[this.slideIndex-1].className += " active";
        }
    }

    render(){
        //change to empty json array because they're coming in as json arrays
        const slideshowTitlesRaw = this.getAttribute('slideshow-title') || '[]';
        const slideshowImgsRaw=this.getAttribute('slideshow-imgs') || '[]';
        const slideshowCaptionsRaw = this.getAttribute('slideshow-captions') || '[]';

        let slideshowTitlesList=[];
        let slideshowImgsList=[];
        let slideshowCaptionsList=[];

        try{
            slideshowTitlesList = JSON.parse(slideshowTitlesRaw);
        }catch(error){
            console.error("Failed to parse titles list in JSON",error);
            //parse as array lieteral if json did not work
            try{
                //anything that comes in as a string will be evaluated as literals, in this case array
                slideshowTitlesList = eval(slideshowTitlesRaw);
            }catch(e){
                console.error("Failed to parse titles as array literal")
            }
        }
        try{
            slideshowImgsList =JSON.parse(slideshowImgsRaw);
        }catch(error){
            console.error("Failed to parse image list",error);
            try{
                slideshowImgsList = eval(slideshowImgsRaw);
            }catch (e){
                console.error("failed to parse images as array literal");
            }
        }
        try{
            //slideshowCaptionsList = slideshowCaptionsRaw ? JSON.parse(slideshowCaptionsRaw) : [];
            slideshowCaptionsList = JSON.parse(slideshowCaptionsRaw);
        }catch(error){
            console.error("Failed to parse captions list",error);
            try{
                slideshowCaptionsList = eval(slideshowCaptionsRaw);
            }catch(e){
                console.error("Failed to parse array literal")
            }
        }

        //make sure all arrays from titles to captiosns have same length
        //so nothing gets screwed by differeing lengths
        const howManySlides = Math.min(
            slideshowTitlesList.length,
            slideshowImgsList.length,
            slideshowCaptionsList.length
        );//find smallest length and make thqat the length

        //add slice before the map so we're working on a copy and not the origiinal array
        //begin at beginning 0 and end at howmany slides there are
        const slideShowItems = slideshowTitlesList.slice(0,howManySlides).map((item,index)=>{
            //what if there's no img src
            const imgSrc = slideshowImgsList[index] || '';
            //what if there's no caption in array?
            const captionSrc = slideshowCaptionsList[index] || '';
            //every slide needs some title to track:
            const titleSrc = item || `Slide ${index + 1}`;

            return `
                <div class="mySlides fade">
                    <div class="numbertext">${index+1}/${howManySlides}</div>
                    <img src="${imgSrc}" style="width:100%" alt="${titleSrc}">
                    <div class="captionText">${captionSrc || titleSrc}</div>
                </div>
            `
        }).join('');
        //make the dotsk based on number of slides
        const dotsHTML = Array.from({length: howManySlides}, (_,i)=>{
            const activeClass = i=== 0? ' active' : '';
            return `<span class="dot${activeClass}"></span>`;
        }).join('');

        this.shadowRoot.innerHTML=`
            <style>
                .slideshow-container{
                    max-width: 1000px;
                    position: relative;
                    margin: auto;
                }
                .mySlides {
                    display: none;
                }
                .prev, .next {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    width: auto;
                    margin-top: -22px;
                    padding: 16px;
                    color: white;
                    font-weight: bold;
                    font-size: 18px;
                    transition: 0.6s ease;
                    border-radius: 0 3px 3px 0;
                    user-select: none;
                }
                .next {
                    right: 0;
                    border-radius: 3px 0 0 3px;
                }
                .prev:hover, .next:hover {
                    background-color: rgba(0,0,0,0.8);
                }
                .captionText {
                    color: #f2f2f2;
                    font-size: 15px;
                    padding: 8px 12px;
                    position: absolute;
                    bottom: 8px;
                    width: 100%;
                    text-align: center;
                }
                .numbertext {
                    color: #f2f2f2;
                    font-size: 12px;
                    padding: 8px 12px;
                    position: absolute;
                    top: 0;
                }
                .dot {
                    cursor: pointer;
                    height: 15px;
                    width: 15px;
                    margin: 0 2px;
                    background-color: #bbb;
                    border-radius: 50%;
                    display: inline-block;
                    transition: background-color 0.6s ease;
                }
                .active, .dot:hover {
                    background-color: #717171;
                }
                .fade {
                    animation-name: fade;
                    animation-duration: 1.5s;
                }

                @keyframes fade {
                    from {opacity: .4}
                    to {opacity: 1}
                }
                .slide-container{
                    position:relative;
                }
            </style>
            <div class="slideshow-container">
                <div class="slide-container">
                    ${slideShowItems}
                    <!--next prev buttons-->
                    <!--get rid of onclick in the buttons since event listeners got set up up top-->
                    <a class="prev">&#10094;</a>
                    <a class="next">&#10095;</a>
                </div>
                <!-- dots-->
                <div style="text-align:center">
                    ${dotsHTML}
                </div>
            </div>
        `;
        //we've reached the end of the slideshow
        this.slideIndex = 1;
    }
}

customElements.define('slideshow-component',MySlideShow);