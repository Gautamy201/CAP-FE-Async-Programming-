let slideBox = document.querySelector(".slide-box");
let slides = document.querySelectorAll(".slide")
let nextBtn = document.querySelector("#next")
let previousBtn = document.querySelector("#previos")
let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#pause")
let flag = true
let index = 0;
slideShow(index)

nextBtn.addEventListener("click",()=>{
    index = index + 1
    slideShow(index)
    
})
previousBtn.addEventListener("click",()=>{
    index = index - 1
    slideShow(index)
    
})

startBtn.addEventListener("click",()=>{
    let id = setInterval(() => {
        index = index + 1
        slideShow(index)
    }, 1000);

    stopBtn.addEventListener("click",()=>{
        clearInterval(id)
    })
    
})








function slideShow (num) {
    if(num === slides.length){
        index = 0;
        num = 0;
    }
    if(num < 0){
        index = slides.length-1
        num = slides.length-1
    }
    for(let i=0; i<slides.length; i++){
        slides[i].style.display="none"
    }
    slides[num].style.display="block"
}