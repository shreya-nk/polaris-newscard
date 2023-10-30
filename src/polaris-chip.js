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
        width: 100%; 
        padding: 20px; 
        border: 1px solid #ccc;
        text-align: center;
        position: relative;
        margin-bottom: 200px;
      }

      .image {
        background-color: #005fa9;
        height: 171px;
      }
      .image img:hover {
        opacity: 0.7;
      }
      .image {
        position: relative;
        width: 90%;
        height: 90%;
        margin: 0;
        padding: 0;
        border-radius: 0px;
      }
      `;
    }
  
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
          <div class="pic"></div>
            <a href="${this.link}">
              <img src="${this.image}" width="386" height="171"/>
            </a>
          </div> <!-- pic -->
          <div class="top">
            <div class="date">
                <span class="month"> "${this.month}" </span>
                <span class="day"> "${this.day}" </span>
            </div> <!-- date -->
            <div class="title"> 
              <a href="${this.link}"> "${this.title}" </a>
            </div>
          </div> <!-- top -->
          <div class="description"> 
            <p> ${this.description} </p>
          </div> <!-- description -->
        </div> <!-- container -->
        `;
    }
  }
  
customElements.define('polaris-chip', PolarisChip);
