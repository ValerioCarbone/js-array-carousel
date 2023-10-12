// # Carousel 
//     - Creiamo un markup statico con un container contenente una foto
//     - Creiamo lo stesso layout tramite js
//         - Creiamo un array che contenga tutte le immagini(url)
//         - Creiamo un ciclo for che tramite il template literal che crei degli elementi nell'html con una classe
//         - Richiamiamo un elemento dall'html e al suo interno inseriamo le nostre immagini

const imagesCarousel = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']

let boxDOMElement = document.querySelector('.box')

let thumbnailsDOMElement = document.querySelector('.thumbnails')

for (let i = 0; i < imagesCarousel.length; i++) {

    let currentImg = imagesCarousel[i]
    const htmlImgString = ` 
    <div class = 'hidden'>
        <img src=${currentImg}>
    </div>
    `
    boxDOMElement.innerHTML += htmlImgString

    const htmlThumbnailsString = ` 
    <div class = 'not-active'>
        <img src=${currentImg}>
    </div>
    `
    thumbnailsDOMElement.innerHTML += htmlThumbnailsString
}

// Richiamare gli elementi per classe

const imgDOMElements = document.getElementsByClassName('hidden')

const thumbnailsDOMElements = document.getElementsByClassName('not-active')

// Dare la classe display e active all'elemento che voglio sia visibile e contornato

let currentIndex = 0

let imgDisplayDOMElement = imgDOMElements[currentIndex]

let thumbnailsDisplayDOMElement = thumbnailsDOMElements[currentIndex]

imgDisplayDOMElement.classList.replace('hidden', 'display')

thumbnailsDisplayDOMElement.classList.replace('not-active', 'active')

// Richiamare le freccette presenti nell'html
// Richiamare l'evento click per ogni freccetta
// Ad ogni click rimuovere le classi display e active dalla precedente img
// Ad ogni click cambiare l'elemento che ha la classe display e active 


const imgUpDOMElement = document.getElementById('arrow-up')

imgUpDOMElement.addEventListener('click', function () {

    thumbnailsDisplayDOMElement.classList.replace('active', 'not-active')

    imgDisplayDOMElement.classList.replace('display', 'hidden')

    currentIndex -= 1
    if (currentIndex < 0) {
        currentIndex = imagesCarousel.length - 1
    }

    imgDisplayDOMElement = imgDOMElements[currentIndex]

    thumbnailsDisplayDOMElement = thumbnailsDOMElements[currentIndex]

    imgDisplayDOMElement.classList.replace('hidden', 'display')

    thumbnailsDisplayDOMElement.classList.replace('not-active', 'active')
}
)

const imgDownDOMElement = document.getElementById('arrow-down')

imgDownDOMElement.addEventListener('click', function () {

    thumbnailsDisplayDOMElement.classList.replace('active', 'not-active')

    imgDisplayDOMElement.classList.replace('display', 'hidden')

    currentIndex += 1
    if (currentIndex > imagesCarousel.length - 1) {
        currentIndex = 0
    }

    imgDisplayDOMElement = imgDOMElements[currentIndex]

    thumbnailsDisplayDOMElement = thumbnailsDOMElements[currentIndex]

    imgDisplayDOMElement.classList.replace('hidden', 'display')

    thumbnailsDisplayDOMElement.classList.replace('not-active', 'active')
}
)
