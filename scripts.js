let currentPhotoIndex = 1;
const maxPhotos = 19; // Alterado para 19 fotos

// Função para alterar para a foto anterior
function prevPhoto() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 1) {
        currentPhotoIndex = maxPhotos; // Volta para a última imagem
    }
    updatePhoto();
}

// Função para alterar para a próxima foto
function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex > maxPhotos) {
        currentPhotoIndex = 1; // Volta para a primeira imagem
    }
    updatePhoto();
}

// Função para atualizar a foto principal e destacar a miniatura
function updatePhoto() {
    const photo = document.getElementById('current-photo');
    photo.style.transform = 'scale(0.9)';
    setTimeout(() => {
        photo.src = `images/isab${currentPhotoIndex}.jpg`; // Atualiza a foto principal
        photo.style.transform = 'scale(1)';
        updateFooterHighlight();
    }, 300);
}

// Função para gerar miniaturas no rodapé
function generateFooterThumbnails() {
    const footer = document.querySelector('.image-footer');
    for (let i = 1; i <= maxPhotos; i++) {
        const img = document.createElement('img');
        img.src = `images/isab${i}.jpg`;
        img.alt = `Miniatura ${i}`;
        img.dataset.index = i; // Associa o índice à miniatura
        img.addEventListener('click', () => {
            currentPhotoIndex = i; // Atualiza o índice ao clicar na miniatura
            updatePhoto();
        });
        footer.appendChild(img);
    }
    updateFooterHighlight();
}

// Função para destacar a miniatura ativa
function updateFooterHighlight() {
    const thumbnails = document.querySelectorAll('.image-footer img');
    thumbnails.forEach((thumbnail, index) => {
        if (index + 1 === currentPhotoIndex) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// Inicializa as miniaturas no rodapé
generateFooterThumbnails();
