class Button {
  constructor(){
    this.handleEventClick = this.addClickEvent.bind(this);
    this.width;
    this.height;
    this.text;
    this.background;
    this.className;
  };
  set classNameBtn(className) {
    this.className = className;
  }
  get classNameBtn() {
    return this.className;
  }
  addClickEvent(){
   
  };
  createButton(){

  };
  initEventListener(){
    document.querySelector(this.className).addEventListener('click', this.handleEventClick);
  }
}