let gameseq= [];
let userseq= [];
let btns = ["yellow","red","green","purple"];

let started= false;
let level = 0;
 
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started==false) {
        console.log("game is started");
        started=true;

       levelUp();
    }
});

// function btnflash(btn){
//     btn.classList.add("flash");
//     setTimeout(function()  {
//         btn.classList.remove("flash")
//     }, 250);
// }

function sim(bt) {
    bt.classList.add("finish");
    setTimeout(function () {
        bt.classList.remove("finish");
    }, 250);
}

function userFlash(bt) {
    bt.classList.add("userflash");
    setTimeout(function () {
        bt.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
     let randBtn=document.querySelector(`${randColor}`);
    //  console.log(randIdx);
    //  console.log(randbtn);
    //  console.log(randcolor);
     
     gameseq.push(randColor);
     console.log(gameseq);
     sim(randBtn);
    //  btnflash(randBtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b> ${level} </b> Press any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}



let allBtns=document.querySelectorAll(".btn");
   for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}