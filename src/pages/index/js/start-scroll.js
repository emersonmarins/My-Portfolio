import { Scroll_Image } from "./scroll-Image.js";

class InstantiateScroll {
  constructor() {
    this.allImageContainers = document.querySelectorAll(".portfolio-content");
    this.startScroll = new Scroll_Image(this.allImageContainers)
    this.startScroll.addEventListener();
  }

}

export {InstantiateScroll};