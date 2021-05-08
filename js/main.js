const scrollArea = document.querySelector('.main__scroll');
scrollArea.addEventListener('click', doScrollDown);
const ourStoryArea = document.getElementById('navbar');

function doScrollDown() {
	ourStoryArea.scrollIntoView({
		behavior: 'smooth',
	});
};


const homeButton = document.querySelector('.menu__item-home');
homeButton.addEventListener('click', doScrollHome);
const homeArea = document.getElementById('home');

function doScrollHome() {
	homeArea.scrollIntoView({
		behavior: 'smooth',
	});
};

const servicesButton = document.querySelector('.menu__item-caps');
servicesButton.addEventListener('click', doScrollCaps);
const capsArea = document.getElementById('caps');

function doScrollCaps() {
	capsArea.scrollIntoView({
		behavior: 'smooth',
	});
};

const workButton = document.querySelector('.menu__item-work');
workButton.addEventListener('click', doScrollWork);
const workArea = document.getElementById('work');

function doScrollWork() {
	workArea.scrollIntoView({
		behavior: 'smooth',
	});
};

const contactButton = document.querySelector('.menu__item-contact');
contactButton.addEventListener('click', doScrollContact);
const contactArea = document.getElementById('contact');

function doScrollContact() {
	contactArea.scrollIntoView({
		behavior: 'smooth',
	});
};