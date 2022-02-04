let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting; 
};

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const imgNode = entry.target;
    const imagen = imgNode.firstChild;
    const url = imagen.dataset.src;
    //cargar la imagen
    imagen.src = url;

    observer.unobserve(container);
        loadedImages += 1;
        logState();

    observer.unobserve(imgNode);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});


export const registerImage = (imagen) => {
   
    observer.observe(imagen);
    totalImages += 1;
    logState();
};

function logState() {
    console.log(`○ Total Imágenes: ${totalImages}`);
    console.log(`⭕️ Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}