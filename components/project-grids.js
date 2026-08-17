class ProjectGrid extends HTMLElement{
    constructor(){
        super(); //inherits from superclass HTMLElement
        this.attachShadow({mode: 'open'});//shadow DOM helps with style and markup encapsulation
    }
    static get observedAttributes(){
        //gotta monitor these to see for any changes
        return ['grid-title','grid-content-items',]
    }
    connectedCallback(){
        //runs when component injected into DOM
        this.render();
    }
    attributeChangedCallback(name,oldVal,newVal){
        //runs automatically if attributes being monitored are changed
        if (oldVal !== newVal){
            this.render();
        }
    }
    render(){
        //render func to dynamically inject attribute vals
        const gridname = this.getAttribute('grid-title') || '';
        const gridItemsRaw = this.getAttribute('grid-content-items') || '';

        //if the raw items exist split into a list, if not, use empty string
        const gridItems = gridItemsRaw ? gridItemsRaw.split(',').map(item=>`
            <a href="#"> ${item.trim()}</a>
        `).join('') : '';
        
        this.shadowRoot.innerHTML=`
            <style>
                .grid-title{
                    background-color:yellow;
                }
                .grid-content a{
                    color: $linkcolour;
                    text-decoration:none;
                    background-color:red;
                }
                .grid-content{
                    display:flex;
                    flex-direction:column;
                    flex-wrap:nowrap;
                    justify-content:space-between;
                    align-items:center;
                    align-content:stretch;
                    width:300px;
                    height:fit-content;
                    margin:1rem 0 1rem 0;
                    padding:1rem 0 1rem 0;
                    background-color:orange;//change later
                }
            </style>

            <div class="grid-title">
                <h2>
                    ${gridname}
                </h2>
            </div>
            <div class="grid-content">
                ${gridItems}
            </div>
        `
    }
}

customElements.define('project-grid-list',ProjectGrid)