let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting; 
};

const loadImage = (entry) => {
    const imgNode = entry.target;
    const imagen = imgNode.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;

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