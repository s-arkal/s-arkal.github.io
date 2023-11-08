document.addEventListener("DOMContentLoaded", function () {
    const finalMessageImage = document.querySelector("#image-container img");
    const drawingImage = document.querySelector("#image-container-2 img");
    const recordPlayerImage = document.querySelector("#record-player-container");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");
    const audioContainer = document.createElement("div"); 

    finalMessageImage.addEventListener("click", function () {
        openLightbox("/assets/finalmessage.png");
    });

    drawingImage.addEventListener("click", function () {
        openLightbox("/assets/drawing.png");
    });

    recordPlayerImage.addEventListener("click", function () {
        openLightbox("/assets/record.png");
    });

    closeLightbox.addEventListener("click", function () {
        closeLightboxFunction();
    });

    function openLightbox(imageSrc) {
        if (imageSrc == "/assets/record.png") {
            lightbox.style.display = "block";
            lightboxImage.src = imageSrc;

           
            const audio = document.createElement("audio");
            audio.src = "/assets/audio.wav"; 
            audio.controls = true; 

            
            audioContainer.innerHTML = ""; 
            audioContainer.appendChild(audio);
            lightboxImage.parentElement.appendChild(audioContainer);
        } else {
            lightbox.style.display = "block";
            lightboxImage.src = imageSrc;
        }
    }

    function closeLightboxFunction() {
        lightbox.style.display = "none";
        lightboxImage.src = "";
        audioContainer.innerHTML = ""; 
    }
});
