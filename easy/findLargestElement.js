/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let limit = numbers.length;

    let largestNum = numbers[0];

    for(let i=1; i<limit; i++)
    {
        if(numbers[i]>largestNum)
            largestNum = numbers[i];
    }


    return largestNum;
    
}

module.exports = findLargestElement;