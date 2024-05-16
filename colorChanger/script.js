function getRandomRGB(){
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)
	

	console.log(r,g,b)
	return `rgb(${r}, ${g}, ${b})`;
}
function showRGB(){
	const rgb = document.getElementById('rgb')
	rgb.innerText = getRandomRGB()
}
function changeColor(){
	const bg = document.getElementById('container')
	bg.style.backgroundColor = getRandomRGB()
	showRGB()
}
const btn = document.getElementById('btn')


btn.addEventListener('click', changeColor)
