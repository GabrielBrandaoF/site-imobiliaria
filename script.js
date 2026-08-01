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

}