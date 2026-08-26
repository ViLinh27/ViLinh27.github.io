class ProjectGrid extends HTMLElement{
    constructor(){
        super(); //inherits from superclass HTMLElement
        this.attachShadow({mode: 'open'});//shadow DOM helps with style and markup encapsulation
    }
    static get observedAttributes(){
        //gotta monitor these to see for any changes
        return [
            'grid-title',
            'grid-content-items',
            'grid-content-imgs',
            'grid-content-links'
        ]
    }
    connectedCallback(){
        //runs when component injected into DOM
        this.render();
    }
    attributeChangedCallback(oldVal,newVal){
        //runs automatically if attributes being monitored are changed
        if (oldVal !== newVal){
            this.render();
        }
    }
    render(){
        //render func to dynamically inject attribute vals
        const gridname = this.getAttribute('grid-title') || '';
        const gridItemsRaw = this.getAttribute('grid-content-items') || '';
        const gridItemsImgsRaw = this.getAttribute('grid-content-imgs') || '';
        const gridItemsLinks = this.getAttribute('grid-content-links') || '';

        let gridImgsList = [];
        let gridLinksList = [];

        try{
            gridImgsList = gridItemsImgsRaw ? JSON.parse(gridItemsImgsRaw) : [];
        }catch (error){
            console.error("Failed to parse image list in JSON", error);
        }

        try{
            gridLinksList = gridItemsLinks ? JSON.parse(gridItemsLinks) : [];
        }catch(error){
            console.error("Failed to parse links list in JSON", error);
        }

        //split text items into array instead
        const text_items = gridItemsRaw ? gridItemsRaw.split(',').map(item => item.trim()).filter(Boolean) : [];
        
        //split the links list into processed
        //const links_items_processed = gridLinksList ? gridLinksList.split(',').map(item=>item.trim()).filter(Boolean):[];

        //time to pair each text item to image url by index now
        const gridItems = text_items.map((item,index)=>{
            const imgSrc=gridImgsList[index];
            const bgStyle=imgSrc ? `style="background-image:url('${imgSrc}');"`:''; 
            const linkItem=gridLinksList[index] || '#';//the # is inc ase there's no link

            return `<a class="grid-button" href="${linkItem}" ${bgStyle}>${item}</a>`;
        }).join('');

        this.shadowRoot.innerHTML=`
            <style>
                .grid-title{
                    margin:16px;
                    padding:16px;
                    width:1100px;
                }
                .grid-content{
                    margin:16px;
                    padding:16px;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    align-items:center;
                    align-content:center;
                    flex-wrap:wrap;
                    width:1100px;
                }
                .grid-content a{
                    color: #ebebfb;
                    font-weight:700;
                    font-size:22px;
                    text-decoration:none;
                    height:140px;
                    width:420px;
                    margin:16px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    align-content:center;
                    flex-wrap:wrap;
                    border-radius:30px;
                    background-size:cover;
                    background-position:center;
                    background-repeat: no-repeat;
                    transition: transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;
                }
                .grid-content a:hover{
                    transform:scale(1.02);
                    filter:brightness(0.8);
                    //background-color:rgba(0,0,0,0,0.5);
                    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
                }

                @media screen and (max-width: 600px){
                    .grid-title{
                        margin:0;
                        padding:8px;
                        width:500px;
                    }
                    .grid-content{
                        padding:8px;
                        width:500px;
                    }
                    .grid-content a{
                        
                        height:70px;
                        width:220px;
                        border-radius:15px;
                    }
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
        `;
    }
}

customElements.define('project-grid-list',ProjectGrid)