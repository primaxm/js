
const imgs = document.getElementById("imgs");

const imgList = document.querySelectorAll("#imgs img");

let inx = 0;

function run() {
    inx++;
    if(inx > imgList.length - 1) {
        inx = 0;
    };

    imgs.style.transform = `translateX(${-inx * 500}px)`;

}

setInterval(run, 2000);