"use strict";

const buttonPrevious = document.querySelector(".btn1");
const buttonNext = document.querySelector(".btn2");

const li = document.querySelectorAll("li");

let positionLi = 0;

function goNextImage() {
    positionLi++;
    if (positionLi == li.length) {
        positionLi = 0;
    }

    
    for(let i = 0; i < li.length; i++){
        li[i].classList.remove("active");
    }
    
    li[positionLi].classList.add("active");

  
}

function goPreviousImage() {
    positionLi++;
    if (positionLi == li.length) {
        positionLi = 0;
    }

    
    for(let i = 0; i < li.length; i++){
        li[i].classList.remove("active");
    }
    
    li[positionLi].classList.add("active");

  
}








buttonPrevious.addEventListener("click", goPreviousImage);
buttonNext.addEventListener("click", goNextImage);
//li.addEventListener("click", () => alert("ok"));  