//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.


function sumOfFirstNEvenNumbers(n: number): number {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      // Calculate the ith even number (2 * i)
      const evenNumber = 2 * i;
  
      // Add it to the sum
      sum += evenNumber;
    }
  
    return sum;
  }
  
  // Replace '5' with the desired value of n
  const n = 5;
  const result = sumOfFirstNEvenNumbers(n);
  
  console.log(`The sum of the first ${n} even numbers is: ${result}`);






//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.


  function printEvenNumbers(numbers: number[]): void {
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      if (currentNumber % 2 === 0) {
        console.log(currentNumber);
      }
    }
  }
  
  // Example array of numbers
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log("Even numbers in the array:");
  
  printEvenNumbers(numbersArray);



{
  //Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones


  function filterOddNumbers(numbers: number[]): number[] {
    return numbers.filter((number) => number % 2 !== 0);
  }
  
  // Example array of numbers
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log("Original array of numbers:", numbersArray);
  
  const oddNumbersArray = filterOddNumbers(numbersArray);
  
  console.log("Array with only odd numbers:", oddNumbersArray);
  

}
  

  


{
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function filterOddNumbers(numbers: number[]): number[] {
    const oddNumbers: number[] = [];
  
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      if (currentNumber % 2 !== 0) {
        oddNumbers.push(currentNumber);
      }
    }
  
    return oddNumbers;
  }
  
  // Example array of numbers
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log("Original array of numbers:", numbersArray);
  
  const oddNumbersArray = filterOddNumbers(numbersArray);
  
  console.log("Array with only odd numbers:", oddNumbersArray);
  
}





{
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

function filterOddNumbers(numbers: number[]): number[] {
    const oddNumbers: number[] = [];
  
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      if (currentNumber % 2 !== 0) {
        oddNumbers.push(currentNumber);
      }
    }
  
    return oddNumbers;
  }
  
  // Example array of numbers
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log("Original array of numbers:", numbersArray);
  
  const oddNumbersArray = filterOddNumbers(numbersArray);
  
  console.log("Array with only odd numbers:", oddNumbersArray);

  
}








    //Write a program that uses a function to find the largest element in an array of numbers.
    
    function findLargestElement(numbers: number[]): number {
        if (numbers.length === 0) {
          throw new Error("The array is empty.");
        }
      
        let largest = numbers[0];
      
        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > largest) {
            largest = numbers[i];
          }
        }
      
        return largest;
      

    }

