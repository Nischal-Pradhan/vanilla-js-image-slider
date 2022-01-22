const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-1");
const after = document.querySelector(".img-container-2");
const container = document.querySelector(".container");


const dragit = (e) => {
    let xPos = e.layerX;
    let size = container.offsetWidth;
    after.style.width = xPos + "px";
    slider.style.left = xPos + "px";

        console.log(xPos + size);

    if (xPos < 70){
        after.style.width = 0;
        slider.style.left = 0;

    }

    if (xPos + 70 > size){
        after.style.width = size + "px";
        slider.style.left = size + "px";
    }
}

container.addEventListener('mousemove', dragit);

