let millisecond = document.querySelector("#mili");
let second = document.querySelector("#sec");
let minite = document.querySelector("#min");
let hours = document.querySelector("#hours");

let milis = 0;
let sec = 0;
let min = 0;
let hr = 0;


let timer = false;

start = () =>{
    timer = true
    timeCaluclation();
}

stop = () => {
    timer = false
}

reset = () => {
    timer = false
    milis = 0
    sec = 0
    min = 0
    hr = 0
    millisecond.innerHTML="00"
    second.innerHTML="00"
    minite.innerHTML="00"
    hours.innerHTML="00"
    hours.style.display="none"
    minite.style.display="none"
}



timeCaluclation = () => {
    if (timer == true){
        milis += 1;
        if(milis == 100){
            sec +=1
            milis=0
        }
        if(sec == 60){
            min += 1;
            sec=0
            minite.style.display="flex"
        }
        if(min == 60){
            hr += 1;
            min=0
            hours.style.display="flex"
        }
        setTimeout("timeCaluclation()",10)
        millisecond.innerHTML=milis
        second.innerHTML=sec
        minite.innerHTML=min
        hours.innerHTML=hr
        
    }
}

if(document.getElementById("#min") >= 100){
    document.getElementById("sec").style.display="block"
}