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
                  // Again, we could shorten that to `userName` if we know for sure that the user is current.
                  // Modern editors and autocomplete make long variable names easy to write. Don’t save on them. A name with 3 words in it is fine.



// Uppercase const?
//          Examine the following code:

              const birthday = '18.04.1982';

              const age = someCode(birthday);

//          Here we have a constant birthday for the date, and also the age constant.

//          The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet    (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

//          Would it be right to use upper case for birthday? For age? Or even for both?

              const BIRTHDAY = '18.04.1982'; // make birthday uppercase? 
                  YES  // birth date is hard-coded (does not change)

              const AGE = someCode(BIRTHDAY); // make age uppercase?
                  NO  //the age changes based on the calculation that occurs in function someCode()