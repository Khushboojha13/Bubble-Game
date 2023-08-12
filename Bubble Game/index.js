let circles=" ";
let rn;
let score=0;
let hitval=0;
document.querySelector("#Score").textContent=score;


function makebubble(){
for(let i=1;i<=70;i++){
     rn=Math.floor(Math.random()*10);
    circles+=` <div class="bubble">${rn}</div>`;
}

document.querySelector(".bottom").innerHTML=circles;
console.log(circles);
}
makebubble();

let timer=10;
document.querySelector("#timer").textContent=timer;
function runtimer(){
let timers= setInterval(()=>{
     if(timer>0)
     {
        timer--;
        document.querySelector("#timer").textContent=timer;
     }
     else{
        clearInterval(timers);
        document.querySelector(".bottom").innerHTML= `<h1 class="center">Game Over</h1>
        `;
       // document.querySelector("#Score").textContent="0";
        //document.querySelector("#ho").textContent="0";
     }
},1000);
}


function increasescore(){
  score+=10;
  document.querySelector("#Score").textContent=score;
}

function hit(){
    hitval=Math.floor(Math.random()*10);
    document.querySelector("#ho").textContent=hitval;
}

document.querySelector(".bottom").addEventListener("click",(e)=>{
    if(Number(e.target.textContent)==hitval){
         increasescore();
        // makebubble();
         hit();
    }
})

runtimer();
hit();
