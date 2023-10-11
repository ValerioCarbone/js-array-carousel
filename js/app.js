// # Carousel 
//     - Creiamo un markup statico con un container contenente una foto
//     - Creiamo lo stesso layout tramite js
//         - Creiamo un array che contenga tutte le immagini(url)
//         - Creiamo un ciclo for che tramite il template literal mostri ciclicamente tutte le immagini
//         - Richiamiamo un elemento dall'html e al suo interno inseriamo le nostre immagini
//         - A tutte le immagini tranne quella con la classe Display daremo la classe Hide 

const imagesCarousel = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']

let boxDOMElement = document.querySelector('.box')


for (let i = 0; i < imagesCarousel.length; i++) {

    const currentImg = imagesCarousel[i]
    const htmlImgString = ` 
    <div class = 'hidden'>
        <img src=${currentImg}>
    </div>
    `
    boxDOMElement.innerHTML += htmlImgString

}

const imgDOMElements = document.getElementsByClassName('hidden')

let number = 0

let imgDisplayDOMElement = imgDOMElements[number]

imgDisplayDOMElement.classList.replace('hidden', 'display')

const imgUpDOMElement = document.getElementById('arrow-up')

imgUpDOMElement.addEventListener('click', function() {

    imgDisplayDOMElement.classList.replace('display', 'hidden')
    number += 1
    if (number > 3){
        number = 0
    }
    imgDisplayDOMElement = imgDOMElements[number]
    imgDisplayDOMElement.classList.replace('hidden', 'display')
}
)

const imgDownDOMElement = document.getElementById('arrow-down')

imgDownDOMElement.addEventListener('click', function() {

    imgDisplayDOMElement.classList.replace('display', 'hidden')
    number -= 1
    if (number < 0){
        number = 4
    }
    imgDisplayDOMElement = imgDOMElements[number]
    imgDisplayDOMElement.classList.replace('hidden', 'display')
}
)


// imgUpDOMElement.addEventListener('click', function() {

//     imgDisplayDOMElement.classList.remove('display')

//     number += 1
//     if (number > 3){
//     number = 0
//     }

//     imgDisplayDOMElement.classList.add('display')
// }
// )

// const imgDownDOMElement = document.getElementById('arrow-down')

// imgDownDOMElement.addEventListener('click', function() {

//     imgDisplayDOMElement.classList.replace('display', 'hidden')

//     number -= 1
//     if (number < 0){
//     number = 3
//     }

//     imgDisplayDOMElement.classList.replace('hidden', 'display')
// }
// )

// // imgDownDOMElement.addEventListener('click', function(){

// //     number -= 1
// //     if (number < 0){
// //         number = 3
// //     }
// //     console.log(imgDOMElements[number])
// //     let imgDisplayDOMElement = imgDOMElements[number]

// //     imgDisplayDOMElement.classList.add('display')
// // }
// // )

