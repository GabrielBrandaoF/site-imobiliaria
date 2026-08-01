const avatar = document.querySelector(".avatar-wrap");

if (avatar) {

    avatar.addEventListener("mousemove", (e)=>{

        const rect = avatar.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 18;
        const rotateX = ((rect.height/2 - y) / rect.height) * 18;

        avatar.style.transform =
        `perspective(700px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)`;

    });

    avatar.addEventListener("mouseleave", ()=>{

        avatar.style.transform =
        "perspective(700px) rotateX(0) rotateY(0) scale(1)";

    });

/* ===========================
   Partículas
=========================== */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w;
let h;
let particles = [];

function resize(){

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);

for(let i=0;i<22;i++){

    particles.push({

        x:Math.random()*w,
        y:Math.random()*h,

        r:Math.random()*2+1,

        speed:Math.random()*0.35+0.1,

        alpha:Math.random()*0.5

    });

}

function animate(){

    ctx.clearRect(0,0,w,h);

    particles.forEach(p=>{

        p.y-=p.speed;

        if(p.y<0){

            p.y=h;
            p.x=Math.random()*w;

        }

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fillStyle=`rgba(198,161,91,${p.alpha})`;

        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();

}