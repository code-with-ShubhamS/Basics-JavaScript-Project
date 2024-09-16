const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const num = document.querySelector(".num");
const number = document.querySelector(".number");
const reset = document.querySelector(".reset");

increment.addEventListener("click",()=>{
    if(number.value){
        num.innerText= parseInt(num.innerText)+ parseInt(number.value);
    }
    else{
        num.innerText= parseInt(num.innerText)+1;
    }
})
decrement.addEventListener("click",()=>{
    if(number.value){
        num.innerText= parseInt(num.innerText)- parseInt(number.value);
    }
    else{
        num.innerText= parseInt(num.innerText)-1;
    }
})

reset.addEventListener("click",()=>{
    num.innerText=0;
    number.value=null
})

