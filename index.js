const left = document.querySelector('.left-button')
const right = document.querySelector('.right-button')
const slider = document.querySelector('.child-image')
const slideImage = document.querySelectorAll('.slide-image')
const bottom = document.querySelector('.bottom-buttons')

let imageOnSlide = 1;
const len = slideImage.length; 


for(let i=0;i<len;i++){
    const div = document.createElement('div')
    div.className = "button"
    bottom.appendChild(div)
}
const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor= "white"

const resetBg = () =>{
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"
    })
}
buttons.forEach((button,i) => {
    button.addEventListener("click", ()=>{
        resetBg()
        slider.style.transform = `translateX(-${i*400}px)`;
        imageOnSlide = i+1;
        button.style.backgroundColor = "white"
    })
})


const nextSlide = () => {
    slider.style.transform = `translateX(-${imageOnSlide * 400}px)`;
    imageOnSlide++;
}
const getFirstSlide = () =>{
     slider.style.transform = `translateX(0px)`
     imageOnSlide = 1;
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(imageOnSlide - 2) * 400}px)`
    imageOnSlide--;
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(len-1) * 400}px)`
    imageOnSlide = len;
}
right.addEventListener("click", ()=>{
  imageOnSlide < len ? nextSlide() : getFirstSlide();
  resetBg()
  buttons[imageOnSlide -1].style.backgroundColor = "white";
})

left.addEventListener("click", () => {
   imageOnSlide > 1 ? prevSlide() : getLastSlide();   
   resetBg()
  buttons[imageOnSlide -1].style.backgroundColor = "white";
})

