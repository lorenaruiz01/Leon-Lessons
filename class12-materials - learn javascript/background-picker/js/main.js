document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('pink').onclick = partyPink

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('h1').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('h1').style.color = 'white'
}

function partyBlue(){
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('h1').style.color = 'white'
}

function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgba(255, 105, 180, 1)'
  document.querySelector('h1').style.color = 'white'
}