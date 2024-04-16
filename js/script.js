let btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        
        let x = e.clientX;
        let y = e.clientY;

        let btnTop = e.target.offsetTop;
        let btnLeft = e.target.offsetLeft;

        let xInside = x - btnLeft;
        let yInside = y - btnTop;

        let rippleEffect = document.createElement("span");
        rippleEffect.setAttribute("class", "ripple-effect");
        rippleEffect.style.top = yInside+"px";
        rippleEffect.style.left = xInside+"px";
        btn.appendChild(rippleEffect);
        setTimeout(()=>{
            rippleEffect.remove();
        }, 500);
    });
});