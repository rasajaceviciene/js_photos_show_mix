// Nuotrauku masyvas
const images = [
    '1_img.jpg',
    '2_img.jpg',
    '3_img.jpg',
    '4_img.jpg',
    '5_img.jpg',
    '6_img.jpg',
    '7_img.jpg',
    '8_img.jpg',
    '9_img.jpg',
    '10_img.jpg'
]

// Paspaudus mygtuka "rodyti", sukuriami ir parodomi elementai
document.querySelector('.rodyti').addEventListener('click', () =>{
    document.querySelector('.galery').innerHTML = ''; // Isvalomi duomenys galerijoje, kad butu rodomi tik naujai prideti elementai
    for(let i = 0; i < images.length; i++){
        const div = document.createElement('div'); // Sukuriamas elementas div
        const img = document.createElement('img'); // Sukuriamas elementas img
        img.src = `img/${images[i]}`; // Priskiriamas paveikslelio kelias (src) is masyvo
        img.style.width = "300px";
        img.style.height = "200px";
        // Jei naudosime querySelector visus img sudes i pirmaji div
        div.appendChild(img); // img elementas pridedamas i div
        document.querySelector('.galery').appendChild(div); // Elementas div pridedamas i galerija
    }
})

// Funkcija masyvo elementu maisymui
const mixedImages = (array) =>{
    for(let i = array.length - 1; i > 0; i--){ // Atgalinis iteravimas
        const j = Math.floor(Math.random() * (i + 1)); // Sugeneruojamas atsitiktinis indeksas
        [array[i], array[j]] = [array[j], array[i]];  // Sukeicia vietomis su atsitiktiniu elementu 
    }
    return array;
}

// Nuotraukos maisomos kiekviena karta paspaudus mygtuka "maisyti" 
document.querySelector('.maisyti').addEventListener('click', () => {
    const allImages = document.querySelectorAll('img'); // Surenkami visi jau rodomi paveiksleliai is galerijos
    const mixedImagesArray = mixedImages([...images]); // Iskvieciama funkcija "mixeedImages" ir sukuriamas naujas masyvas su sumaisytais masyvo "images" elementais
    for (let i = 0; i < allImages.length; i++) { 
        allImages[i].src = `img/${mixedImagesArray[i]}`; // Priskiriamas naujas kelias is sumaisyto masyvo
    }
});

// Pakeicia paveiksleli po dvigubo paspaudimo
const defaultImage = 'img/default_image.jpg'; // Numatytas naujas paveikslelis
document.querySelector('.galery').addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'IMG') { // Tikrinama, ar elementas yra img
        e.target.src = defaultImage; // Pakeicia paveikslelio saltinį
    }
});