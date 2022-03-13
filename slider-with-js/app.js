const images = [
    'Img/imesg (1).jpg',
    'Img/imesg (2).jpg',
    'Img/imesg (3).jpg',
    'Img/imesg (4).jpg',
    'Img/imesg (5).jpg',
    'Img/imesg (6).jpg',

];
let imgIndex = 0;
const imgElement = document.getElementById("slider-img");

setInterval(() => {
    if (imgIndex >= images.length){
   imgIndex = 0;
    }
    const imgUlr = images[imgIndex];
    imgElement.setAttribute('src', imgUlr);
    console.log(imgUlr);
 

    imgIndex++;

}, 1000);