const images = [
    "1.jpeg",
    "image-2 chrome app.webp",
    "image-1 chrome app.jpeg",
    "image-3 chrome app.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bg1";

document.body.appendChild(bgImage);
document.body.style.background = `${bgImage}`