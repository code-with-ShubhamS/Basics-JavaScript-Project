const num = document.querySelector("#inputBox");
const tittle = document.querySelector(".tittle");
const start = document.querySelector(".start");
const showUserNum = document.querySelector(".showUserNum");

let randomNo;
let firstTime=true;

document.querySelector(".submit").addEventListener("click",()=>{
    if(!num.value){
     return;
    }
    if(firstTime){
        randomNo=  Math.floor((Math.random() * 100 ) + 1);
        firstTime=false;
    }
let userNum= parseInt(num.value);
num.value="";
console.log(randomNo+ " is random no ");
 showUserNum.innerText=showUserNum.innerText + `${userNum},`
  if(randomNo===userNum){
    tittle.innerText="Congratulation! You Got it ";
    document.querySelector(".submit").disabled =true;
    return;
  }
  
  else if(randomNo > userNum){
    tittle.innerText="The Num is to low"
  }
  else{
    tittle.innerText="The Num is to High"
  }

})



start.addEventListener("click",()=>{
    document.querySelector(".submit").disabled =false;
    randomNo=null;
    showUserNum.innerText="";
    tittle.innerText="";
    num.value="";
})