const galleries = {
    coifas: ["images/coifa.jpg","images/coifa2.jpg","images/coifa3.jpg","images/coifa4.jpg","images/coifa5.jpg"],
    fogoes: ["images/fogao.jpg","images/fogao2.jpg","images/fogao3.jpg","images/fogao4.jpg","images/fogao5.jpg"],
    lavadora: ["images/lavadora.jpg", "images/lavadora2.jpg", "images/lavadora3.jpg", "images/lavadora4.jpg", "images/lavadora5.jpg"],
    geladeiras: ["images/geladeira.jpg","images/geladeira2.jpg","images/geladeira3.jpg","images/geladeira4.jpg","images/geladeira5.jpg"],
    purificadores: ["images/purificador.jpg","images/purificador2.jpg","images/purificador3.jpg","images/purificador4.jpg","images/purificador5.jpg"]
};

let currentService = null;
let currentIndex = 0;

function showGallery(service) {
    currentService = service;
    currentIndex = 0;
    document.getElementById("galleryImage").src = galleries[service][0];
    document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = galleries[currentService].length - 1;
    if (currentIndex >= galleries[currentService].length) currentIndex = 0;
    document.getElementById("galleryImage").src = galleries[currentService][currentIndex];
}
