// Galeria de imagens
const galleries = {
    coifas: ["images/coifa.jpg","images/coifa2.jpg","images/coifa3.jpg","images/coifa4.jpg","images/coifa5.jpg"],
    fogoes: ["images/fogao.jpg","images/fogao2.jpg","images/fogao3.jpg","images/fogao4.jpg","images/fogao5.jpg", "images/fogao6.jpg", "images/fogao7.jpg", "images/fogao8.jpg", "images/fogao9.jpg", "images/fogao10.jpg"],
    lavadora: ["images/lavadora.jpg", "images/lavadora2.jpg", "images/lavadora3.jpg", "images/lavadora4.jpg", "images/lavadora5.jpg", "images/lavadora6.jpg", "images/lavadora7.jpg", "images/lavadora8.jpg", "images/lavadora9.jpg"],
    geladeiras: ["images/geladeira.jpg","images/geladeira2.jpg","images/geladeira3.jpg","images/geladeira4.jpg","images/geladeira5.jpg"],
    purificadores: ["images/purificador.jpg","images/purificador2.jpg","images/purificador3.jpg","images/purificador4.jpg","images/purificador5.jpg"]
};

let currentGallery = [];
let currentIndex = 0;

function showGallery(service) {
    currentGallery = galleries[service];
    currentIndex = 0;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
    document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
}
