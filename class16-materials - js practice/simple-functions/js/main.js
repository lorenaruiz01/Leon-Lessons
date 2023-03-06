//---Easy
//create a function that subtracts two numbers and alerts the difference
    function subTwoNums (num1, num2){
       alert(num1-num2) 
    }
   
    subTwoNums(50,30)


//create a function that divides three numbers and console logs the quotient
    function dividesThreeNums (num1, num2, num3){
        console.log(num1 / num2 / num3)
    }

    dividesThreeNums(12,4,3)
      
//create a function that multiplys three numbers and returns the product
    function multiThreeNums (num1, num2, num3){
        return num1 * num2 * num3  //don't use parenthesis here. return is not a function so it does not use parenthesis. what return does is return the value that is being called multiThreeNums(2,4,6) back into itself, where it was called. once it's called, it disappears. so it is not alerted or printed to the console.
    }

    multiThreeNums(2,4,6)

        //since the returned product is not alerted or printed to the console. what we can do, is store the multiThreeNums function in a variable and alert the product: 
        //  let product = multiThreeNums(2,4,6)
        //  alert(product)
        //  (can also console log the product)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
