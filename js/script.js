const carouselWrapper = document.getElementById('carousel_wrapper');

let givenImages = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let imgContainer;
let imgArray = [];
let iconWrapper = document.querySelector('.icons-wrapper');
console.log(iconWrapper);

 for (let index = 0; index < givenImages.length; index++) {
    
    imgContainer = document.createElement('img');
    imgContainer.classList.add('img-fluid');
    imgContainer.setAttribute('src', givenImages[index]);
    carouselWrapper.append(imgContainer);

    imgArray.push(imgContainer);
    
}

let activeImg = 0;

imgArray[activeImg].classList.add('active');

const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');

// impostiamo un intervallo ogni 3 secondi
const clock = setInterval(carouselAutoplay,3000);

function carouselAutoplay(){
    imgArray[activeImg].classList.remove('active');
    
    activeImg++;

    if (activeImg === imgArray.length){
        activeImg = 0;
    }

    imgArray[activeImg].classList.add('active');
}

nextBtn.addEventListener('click', function(){

    
    imgArray[activeImg].classList.remove('active');
    
    activeImg++;

    if (activeImg === imgArray.length){
        activeImg = 0;
    }

    imgArray[activeImg].classList.add('active');

    // al click, l'immagine andrà avanti, ma dopo tot inattvitià tornerà a scorrere
    clearInterval(clock);

    clock = setTimeout(function(){
        clock = setInterval(carouselAutoplay,3000);
    }, 10000);


})


prevBtn.addEventListener('click', function(){

    imgArray[activeImg].classList.remove('active');

    activeImg--;

    if (activeImg === -1){
        activeImg = 5;
    }

    imgArray[activeImg].classList.add('active');

    clearInterval(clock);

    clock = setTimeout(function(){
        clock = setInterval(carouselAutoplay,3000);
    }, 10000);

    
})