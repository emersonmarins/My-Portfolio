class Scroll_Image {

  constructor(allImageContainers) {
    this.allImageContainers = allImageContainers;
    this.currentImg = null;
    this.scrollDirection = null;
    // this.addEventListener();
    this.stopMove = false;
    this.timeoutId = null;
    this.currentIndex = 0;
    this.movePixelEnd = 0;

  }

  currentImageScale(value) {
    this.currentImg.parentNode.parentNode.style.cssText = `animation: scaleMouse${value} 1s ease-in-out both;`
  }

  setTime(time) {
    this.timeoutId = setTimeout(() => {
      this.scrollDirection ? this.currentIndex++ : this.currentIndex--
      this.currentImg.style.cssText = `bottom: ${this.currentIndex}px;`;
      this.movePixel()
    }, time)
  }

  go() {

    if (20 > this.currentIndex) {
      this.setTime(30)
    } else if (40 > this.currentIndex) {
      this.setTime(23)
    } else if (60 > this.currentIndex) {
      this.setTime(15)
    } else if ((this.movePixelEnd - 60) > this.currentIndex) {
      this.setTime(10)
    } else if ((this.movePixelEnd - 40) > this.currentIndex) {
      this.setTime(15)
    } else if ((this.movePixelEnd - 20) > this.currentIndex) {
      this.setTime(23)
    } else if (this.movePixelEnd > this.currentIndex) {
      this.setTime(30)
    } else {
      this.currentImg.classList.remove("move")
    }
  }

  end() {
    if (60 < this.currentIndex) {
      this.setTime(7)
    } else if (40 < this.currentIndex) {
      this.setTime(14)
    } else if (20 < this.currentIndex) {
      this.setTime(21)
    } else if (0 <= this.currentIndex) {
      this.setTime(28)
    }
    else {
      this.currentImg.classList.remove("move")
    }
  }

  movePixel() {

    if (this.scrollDirection) {
      this.go()
    } else {
      this.end()
    }
  }

  scrollStart() {

    if (this.currentImg.className.search("move") !== -1) {
      return
    }

    this.stopMove ? this.currentImg.classList.remove("move") : this.currentImg.classList.add("move");

    this.movePixelEnd = this.currentImg.offsetHeight - this.currentImg.parentElement.offsetHeight;

    !this.scrollDirection ? this.currentIndex = Number(this.currentImg.getAttribute("style").replace("bottom:", "").replace("px;", ""))
      : this.currentIndex = 0;
    this.movePixel();
  }

  addEventListener() {
    this.allImageContainers.forEach((element, index) => {
      new Move_Image(element, index);
    });
  }
}

class Move_Image extends Scroll_Image {
  constructor(element, index){
    super();
    this.element = element;
    this.index = index;
    this.addEvent()
  }
  addEvent() {
    this.element.addEventListener("mouseenter", (currentImage) => {

      this.currentImg = document.querySelector(`.id0${this.index}`);
      this.scrollDirection = true;
      this.scrollStart();
      this.currentImageScale("Enter");

    });
    this.element.addEventListener("mouseleave", (currentImage) => {

      this.currentImg = document.querySelector(`.id0${this.index}`);
      this.currentImageScale("Out");
      clearTimeout(this.timeoutId);
      this.currentImg.classList.remove("move");
      this.scrollDirection = false;
      this.scrollStart();

    });
  }
}

export { Scroll_Image }