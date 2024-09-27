const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow=document.querySelector(".arrow-left");
const rightArrow=document.querySelector(".arrow-right");
const totalOfSlides = slides.length;

let slideIndex=0;

dotsCreation();
dotsPosition();
caroussel(slideIndex);

function slideToPreviousPicture(){
	if (slideIndex ===0) {
		slideIndex=totalOfSlides-1;
	}
	else {
		slideIndex -- ;

	 }
	 caroussel(slideIndex);
	 
	
}

leftArrow.addEventListener("click", slideToPreviousPicture);

function slideToNextPicture(){
	if (slideIndex = totalOfSlides -1) {
		slideIndex = 0;
	}
	else {
		slideIndex ++;
	}
	caroussel(slideIndex);
}

rightArrow.addEventListener("click", slideToNextPicture);




function dotsCreation() {
	const dots= document.querySelector(".dots");
	for (let index = 0; index < totalOfSlides; index++) {
		const dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);

	}

}

function dotsPosition() {
	const numberOfDots = document.querySelectorAll(".dot");
	for (let index = 0; index < numberOfDots.length; index++) {
		const dot=numberOfDots[index];
		if (index == slideIndex) {
			dot.classList.add(".dot_selected");
		}
		else {
			dot.classList.remove(".dot-selected");
		}
	}
}

function caroussel(slideIndex) {
	const carousselPhotos = slides[slideIndex];
	console.log("photo");
	const image = document.querySelector(".banner-img");
	image.setAttribute("src","./assets/images/slideshow/" + carousselPhotos.image);
	const text = document.querySelector(".banner-tagline");
	text.innerHTML= carousselPhotos.tagLine;

	dotsPosition();
}

