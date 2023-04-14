document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if ( day == 'tuesday' || day == 'thursdays'){
    alert('it\'s class day')
  }else if( day == 'saturday' || day == 'sunday'){
    alert ('it is the weekend')
  }else {
    alert ('boring day')
  }
  }


  // JAVASCRIPT.INFO TASKS

  // working with variables
let admin
let name 

