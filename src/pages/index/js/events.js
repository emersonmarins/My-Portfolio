class ReadMoreBtn {
  constructor() {
    this.showMore = document.querySelectorAll(".text-more");
    this.eventMoseClick();
  }

  eventMoseClick() {
    document.querySelectorAll(".portfolio-btn").forEach((btnElement, index) => {
      btnElement.addEventListener("click", (textContainer) => {
        
        let textList = textContainer.currentTarget.parentElement.parentElement.childNodes;
        textList.forEach((el) => {
          if (el.classList !== undefined) {
            if (el.classList.value.includes("text-more") || el.classList.value === "text-show") {
              el.classList.remove("display-none");
              el.classList.toggle("text-more");
              el.classList.toggle("text-show");
            }
            if (el.classList.value === "portfolio-btn-container") {
              el.childNodes.forEach((btn)=>{
                if (btn.classList !== undefined) {
                  console.log(btn.classList)
                  if (btn.classList.value.includes("portfolio-btn")) {
                    if (btn.classList.value.includes("show-less")) {
                      btn.innerText = "saiba mais";
                      btn.classList.remove("show-less");
                    } else {
                      btn.innerText = "mostrar menos";
                      btn.classList.add("show-less");
                    }
                  }
                }
              })
            }

          }
        });
      })
    })
  }
}
export { ReadMoreBtn }