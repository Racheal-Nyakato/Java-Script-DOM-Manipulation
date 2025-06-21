
let nextBtn = document.querySelector("#next");
let previousBtn = document.querySelector("#previous");
let carouselImage = document.querySelector('#carousel-image1')


let images = [
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
    "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg"
];

currentImageIndex = 0;

nextBtn.addEventListener('click', showNextImage)

previousBtn.addEventListener('click', showPreviousImage)


function showNextImage(){
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
}
function showPreviousImage(){
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentImageIndex];
}



