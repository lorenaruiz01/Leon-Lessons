// *Variables*
// Declare a variable, assign it a boolean, and alert the value
    let trueOrFalseVar = true
    alert(trueOrFalseVar)
// Declare a variable, reassign it to your favorite color, and console log the value
    let myFavColor = "purple"
    myFavColor = "pink"
    console.log(myFavColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
    function sumThreeAndDivide(num1, num2, num3, num4){
        return((num1 + num2 + num3) / num4);
    }
    sumThreeAndDivide(10, 20, 30, 5)
    

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
    function twoNums(num1, num2){
        console.log(math.pow(num1, num2))
    }
    twoNums(2, 3)
    

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
    function alertOrLog(b, stri){
        if(b){
            alert(stri);
        }else {
            console.log(str);
        }
        }
        //ANOTHER WAY TO WRITE THE CODE BETWEEN CURLY BRACKETS USING TERNARY OPERATORS:
        //  b ? alert(stri) : console.log(stri)
        //ANOTHER WAY TO WRITE ENTIRE FUNCTION USING ARROW FUNCTIONS: 
        //  const alertOrLog = (b,stri) => b ? alert(stri) : console.log(stri)
   
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
        function fizzBuzz (){
           
        }