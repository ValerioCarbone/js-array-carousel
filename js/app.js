// # Carousel 
//     - Creiamo un markup statico con un container contenente una foto
//     - Creiamo lo stesso layout tramite js
//         - Creiamo un array che contenga tutte le immagini(url)
//         - Creiamo un ciclo for che tramite il template literal mostri ciclicamente tutte le immagini
//         - Richiamiamo un elemento dall'html e al suo interno inseriamo le nostre immagini
//         - A tutte le immagini diamo la classe hidden

const imagesCarousel = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']

let boxDOMElement = document.querySelector('.box')

let thumbnailsDOMElement = document.querySelector('.thumbnails')

let currentImg 

for (let i = 0; i < imagesCarousel.length; i++) {

    currentImg = imagesCarousel[i]
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

const imgDOMElements = document.getElementsByClassName('hidden')

const thumbnailsDOMElements = document.getElementsByClassName('not-active')

let number = 0

let imgDisplayDOMElement = imgDOMElements[number]

let thumbnailsDisplayDOMElement = thumbnailsDOMElements[number]

imgDisplayDOMElement.classList.replace('hidden', 'display')

thumbnailsDisplayDOMElement.classList.replace('not-active', 'active')

const imgUpDOMElement = document.getElementById('arrow-up')

imgUpDOMElement.addEventListener('click', function() {

    thumbnailsDisplayDOMElement.classList.replace('active', 'not-active')
    
    imgDisplayDOMElement.classList.replace('display', 'hidden')
    
    number += 1
    if (number > 4){
        number = 0
    }
    imgDisplayDOMElement = imgDOMElements[number]

    thumbnailsDisplayDOMElement = thumbnailsDOMElements[number]
    
    imgDisplayDOMElement.classList.replace('hidden', 'display')

    thumbnailsDisplayDOMElement.classList.replace('not-active', 'active')
}
)

const imgDownDOMElement = document.getElementById('arrow-down')

imgDownDOMElement.addEventListener('click', function() {

    thumbnailsDisplayDOMElement.classList.replace('active', 'not-active')

    imgDisplayDOMElement.classList.replace('display', 'hidden')
    
    number -= 1
    if (number < 0){
        number = 4
    }
    imgDisplayDOMElement = imgDOMElements[number]
    
    thumbnailsDisplayDOMElement = thumbnailsDOMElements[number]

    imgDisplayDOMElement.classList.replace('hidden', 'display')

    thumbnailsDisplayDOMElement.classList.replace('not-active', 'active')
}
)


