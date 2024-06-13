let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress" , function() {
    if ( started == false){
        console.log(" Game is started ");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {

    userSeq= [];
    level++;
    h2.innerText = `Level ${level}. Your highest score is ${highScore}.`;

    // random button choose 
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor );
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level : ", level);
    // level aur size of seq same hota hai

    if( userSeq[idx] == gameSeq[idx]){
        // console.log("same value");
        if(gameSeq.length ==  userSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(highScore<level){
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br> Your highest score is ${highScore}.<br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log("button was pressed");
    
    let btn = this;
    userFlash(btn);

    uesrColor = btn.getAttribute("id");
    // console.log(uesrColor);
    userSeq.push(uesrColor);

    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}