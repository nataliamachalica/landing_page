function imgSlider(starbucks) {
	document.querySelector('.matcha').src = starbucks;
}

function circleColorChange(color) {
	const circle = document.querySelector('.circle');
	circle.style.background = color;
}

function toggleMenu(){
	const menuToggle = document.querySelector('.toggle');
	const navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}