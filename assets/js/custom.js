// Sélectionner le conteneur où les éléments vont être ajoutés
const galleryContainer = document.getElementById('gallery-container');

// Boucle pour créer les éléments pour les images numérotées de 1 à 100
for (let i = 1; i <= 55; i++) {
    // Créer les éléments HTML
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-3 col-md-4';

    const galleryItemDiv = document.createElement('div');
    galleryItemDiv.className = 'gallery-item';

    const link = document.createElement('a');
    link.href = `/assets/images/gallerie/${i}.jpg`;
    link.className = 'glightbox';
    link.setAttribute('data-gallery', 'images-gallery');

    const img = document.createElement('img');
    img.src = `/assets/images/gallerie/${i}.jpg`;
    img.alt = '';
    img.className = 'gallery-img';

    // Construire la hiérarchie des éléments
    link.appendChild(img);
    galleryItemDiv.appendChild(link);
    colDiv.appendChild(galleryItemDiv);
    galleryContainer.appendChild(colDiv);
}