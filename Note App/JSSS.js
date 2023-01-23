var button = document.getElementById('btn')
var colorHexName = document.getElementById('hex-value')
var colorHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
var body = document.body.style

function randomBackgroundHexColor(){
var hexNumber = '#'
for(let i = 0; i < 6; i++){
hexNumber += colorHex[Math.floor(Math.random() * colorHex.length)]
}
body.backgroundColor = hexNumber
colorHexName.textContent = hexNumber
}
button.addEventListener("click", randomBackgroundHexColor)