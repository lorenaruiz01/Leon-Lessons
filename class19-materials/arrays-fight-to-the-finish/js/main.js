//Create an array of movie titles. Loop through the array and add each element to the h2.
    let movieTitles = ["movie1", "movie2", "movie3"]

    for (let i = 0; i < movieTitles.length; i++){
        document.querySelector('h2').innerText += movieTitles[i]
    }

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
    let arrayOfNumbers = [10, 20, 30, 40]

    arrayOfNumbers.forEach( (elem, idx, arr) => {
        arrayOfNumbers[idx] = elem + 3
    })

//Find the average of all the numbers from question three
