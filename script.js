const heart = document.getElementById("heart");

const words = [];
const total = 120;

for(let i=0;i<total;i++){

    let span = document.createElement("span");
    span.className = "word";
    const message = "I love you";
    span.innerText = message;

    heart.appendChild(span);

    words.push({
        element: span,
        t: (i / total) * Math.PI * 7
    });
}
function animate(){
    words.forEach(w =>{
        w.t += 0.002;

        let x = 16*Math.pow(Math.sin(w.t),3);
        let y = 13*Math.cos(w.t) -
    5*Math.cos(2*w.t) - 2*Math.cos(3*w.t) - Math.cos(4*w.t);

        w.element.style.left = x*10 + window.innerWidth/2 + "px";
        w.element.style.top = -y*10 + window.innerHeight/2 + "px";
    });
    requestAnimationFrame(animate);
}
animate();