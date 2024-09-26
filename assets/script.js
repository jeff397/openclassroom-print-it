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

function slideToPreviousPicture(){
	slideIndex= slideIndex-1;
}

leftArrow.addEventListener("click", slideToPreviousPicture);

function slideToNextPicture(){
	slideIndex= slideIndex+1;
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

