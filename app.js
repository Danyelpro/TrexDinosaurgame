const dino = document.getElementById("dino");
const rail = document.getElementById("rail");
const score = document.getElementById("score");

function jump () {
    dino.classList.add("jump-animation");
    setTimeout(() =>{
        dino.classList.remove("jump-animation")
    }, 500);
}

document.addEventListener("keypress", () =>{
    if (!dino.classList.contains("jump-animation"))
    jump()
})

setInterval(() => {
    score.innerText++;
    const dinpTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const railLeft = parseInt(window.getComputedStyle(rail).getPropertyValue('left'));
    
    if (railLeft < 0) {
        rail.style.display = 'none';
    }
    else {
        rail.style.display = '';
    }

    if (railLeft < 50 && railLeft > 0 && dinpTop > 150){
        alert('You got a score of: '+ score.innerText + '\n\n Play Again?');
        location.reload();
    }
}, 49);