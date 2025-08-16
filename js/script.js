function showGallery(service) {
    const gallery = {
        coifas: ['images/coifa.jpg', 'images/coifa2.jpg'],
        fogoes: ['images/fogao.jpg', 'images/fogao2.jpg'],
        geladeiras: ['images/geladeira.jpg', 'images/geladeira2.jpg'],
        purificadores: ['images/purificador.jpg', 'images/purificador2.jpg']
    };

    let content = '';
    gallery[service].forEach(img => {
        content += `<img src="${img}" alt="${service}">`;
    });

    document.getElementById('galleryContent').innerHTML = content;
    document.getElementById('galleryModal').style.display = 'block';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}
