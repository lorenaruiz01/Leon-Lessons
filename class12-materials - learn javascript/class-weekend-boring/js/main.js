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

//  Working With Variables
//          Declare two variables: admin and name.
              let name 
              let admin 
//          Assign the value "John" to name.
              name = "John"
//          Copy the value from name to admin.
              name = admin
//          Show the value of admin using alert (must output “John”).
              alert (admin) 
//  Solution:
            let admin, name; // can declare two variables at once

            name = "John";

            admin = name;

            alert( admin ); // "John"



//  Giving The Right Name
//          Create a variable with the name of our planet. How would you name such a variable?
              let nameOfOurPlanet = "Earth";
                  // Note, we could use a shorter name planet, but it might not be obvious what planet it refers to. It’s nice to be more verbose. At least until the variable isNotTooLong.
//          Create a variable to store the name of a current visitor to a website. How would you name that variable?
              let currentUserName = "John";
