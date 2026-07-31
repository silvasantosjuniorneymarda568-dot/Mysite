const intro = document.getElementById("intro");
const profilePage = document.getElementById("profilePage");
const overlay = document.getElementById("overlay");
const enterText = document.getElementById("enterText");

intro.addEventListener("click", () => {

    enterText.style.opacity = "0";

    overlay.style.opacity = "1";

    setTimeout(() => {

        intro.style.display = "none";

        profilePage.style.opacity = "1";

        profilePage.style.transform = "scale(1)";

        overlay.style.opacity = "0";

    }, 1000);

});
/* ===== Script 1B ===== */

function showSmoke(){

    const smoke = document.getElementById("smoke");

    if(!smoke) return;

    smoke.animate([
        {
            opacity:0,
            transform:"scale(.9)"
        },
        {
            opacity:.45,
            transform:"scale(1)"
        }
    ],{
        duration:1000,
        fill:"forwards",
        easing:"ease-out"
    });

}

intro.addEventListener("click",()=>{

    setTimeout(()=>{
        showSmoke();
    },350);

});
/* ===== Script 1C ===== */

const audio = document.getElementById("audio");
const play = document.getElementById("play");

if (audio && play) {

    play.addEventListener("click", () => {

        if (audio.paused) {

            audio.play();
            play.textContent = "⏸";

        } else {

            audio.pause();
            play.textContent = "▶";

        }

    });

}
/* ===== Script 1D ===== */

function createSnow() {

    const snow = document.createElement("div");

    snow.className = "snow";

    snow.innerHTML = "❄";

    snow.style.left = Math.random() * window.innerWidth + "px";

    snow.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    snow.style.fontSize =
        (10 + Math.random() * 18) + "px";

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 12000);

}

setInterval(createSnow, 180);
/* ===== Script 1E ===== */

const views = document.getElementById("views");

if (views) {

    let total = 2847;

    views.textContent = total.toLocaleString("pt-BR");

      }
