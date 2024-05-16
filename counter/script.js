const number = document.getElementById('number')
const increaseBtn = document.getElementById('increase').addEventListener('click', increase)
const decreaseBtn = document.getElementById('decrease').addEventListener('click', decrease)
const resetBtn = document.getElementById('reset').addEventListener('click', reset)


let num = 0

function increase(){
	num++
	number.textContent = num
	updateColor()
}
function decrease(){
	num--
	number.textContent = num
	updateColor()
}
function reset(){
	num = 0
	number.textContent = num
	updateColor()
}

function updateColor(){
	if(num > 0){
		number.style.color = 'green'
	}else if(num <0){
		number.style.color = 'red'
	}else{
		number.style.color = 'black'
	}
}
