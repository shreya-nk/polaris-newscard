import { LitElement, html, css } from 'lit-element';

class PolarisChip extends LitElement {
    static get properties() {
      return {
        image: { type: String },
        month: { type: String },
        day: { type: String },
        title: { type: String },
        link: { type: String },
        description: { type: String }
      };
    }
  
    static get styles() {
      return css`
        :host {
          display: block;
        }

        .container {
        background-color: #fff;
        display:inline-block;
        max-width: 400px; 
        width: 400px; 
        height: 400 px; 
        
      }
     

      .pic {
        background-color: #005fa9;
        height: 171px;
      }
      .pic img:hover {
        opacity: 0.7;
      }
      .pic {
        position: relative;
        width: 90%;
        height: 90%;
        margin: 0;
        padding: 0;
        border-radius: 0px;
      }
    

      .month{
        display: block;
        background: #1E407C;
        border-radius: 0 0 2px 2px;
        color: #FFF;
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1.8;
        text-transform: uppercase;
}
      .day{
        background: #f7f7f7;
        border-radius: 2px 2px 0 0;
        color: #444;
        display: block;
        font-size: 18px;
        font-weight: 900;
        padding: 10px 20px;
        }
   `;
    constructor() {
      super();
      this.image = " ";
      this.month = " ";
      this.day = " ";
      this.title = " ";
      this.link = " ";
      this.description = " ";
  
    }
  
    render() {
      return html`
        <div class="container">
          <div class="pic">
            <a href="${this.link}">
              <img src="${this.image}" width="386" height="171"/>
            </a>
          </div> <!-- pic -->
          <div class="top">
            <div class="date">
                <div class="month"> <slot> "${this.month}" </slot> </label>
                <div class="day"> <slot> "${this.day}" </slot> </label>
            </div> <!-- date -->
            <div class="title"> 
              <a href="${this.link}"> "${this.title}" </a>
            </div>
          </div> <!-- top -->
          <div class="description"> 
            <p> <slot></slot>${this.description}</slot></p>
          </div> <!-- description -->
        </div> <!-- container -->
        `;
    }
  }
  
customElements.define('polaris-chip', PolarisChip);
