/* ==========================================
   CLICK TO ENTER
========================================== */

const intro = document.getElementById("intro");
const overlay = document.getElementById("overlay");

if(intro){

    intro.addEventListener("click",()=>{

        intro.style.pointerEvents="none";

        intro.style.opacity="0";

        overlay.style.opacity="1";

        setTimeout(()=>{

            window.location.href="home.html";

        },900);

    });

}

/* ==========================================
   NEVE EM CANVAS
========================================== */

const canvas = document.getElementById("snow");

if(canvas){

const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const flakes=[];

for(let i=0;i<180;i++){

    flakes.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*3+1,

        s:Math.random()*2+0.5,

        w:Math.random()*0.6

    });

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#ffffff";

    flakes.forEach(f=>{

        ctx.beginPath();

        ctx.arc(f.x,f.y,f.r,0,Math.PI*2);

        ctx.fill();

        f.y+=f.s;

        f.x+=Math.sin(f.y*0.01)*f.w;

        if(f.y>canvas.height){

            f.y=-20;

            f.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(draw);

}

draw();

}

/* ==========================================
   PLAYER
========================================== */

const audio=document.getElementById("audio");
const play=document.getElementById("play");

if(audio && play){

play.onclick=()=>{

if(audio.paused){

audio.play();

play.innerHTML="⏸";

}else{

audio.pause();

play.innerHTML="▶";

}

}

}

/* ==========================================
   VISUALIZAÇÕES
========================================== */

const views=document.getElementById("views");

if(views){

let total=localStorage.getItem("oliveira_views");

if(!total){

total=2847;

}

total++;

localStorage.setItem("oliveira_views",total);

views.innerHTML=Number(total).toLocaleString("pt-BR");

}

/* ==========================================
   HOVER DOS ÍCONES
========================================== */

document.querySelectorAll(".socials a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-5px) scale(1.08)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) scale(1)";

});

});
