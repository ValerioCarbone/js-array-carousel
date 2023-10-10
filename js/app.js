// # Carousel 
//     - Creiamo un markup statico con un container contenente una foto
//     - Creiamo lo stesso layout tramite js
//         - Creiamo un array che contenga tutte le immagini(url)
//         - Creiamo un ciclo for che tramite il template literal mostri ciclicamente tutte le immagini
//         - Richiamiamo un elemento dall'html e al suo interno inseriamo le nostre immagini
//         - A tutte le immagini tranne quella con la classe Display daremo la classe Hide 

const imagesCarousel = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']

let containerDOMElement = document.querySelector('.container')


for (let i = 0; i <= imagesCarousel.length - 1; i++) {

    const currentImg = imagesCarousel[i]
    const htmlImgString = ` 
    <div class = 'hidden'>
        <img src=${currentImg}>
    </div>
    `
    containerDOMElement.innerHTML += htmlImgString

}

const imgDOMElements = document.getElementsByClassName('hidden')
console.log(imgDOMElements)

let imgDisplayDOMElement = imgDOMElements[1]
console.log(imgDisplayDOMElement)

imgDisplayDOMElement.classList.replace('hidden', 'display')

// const imgDOMElements = document.getElementsByClassName('hidden')

// const imgDisplayDOMElement = imgDOMElements[0]

// imgDisplayDOMElement.classList.add('display')