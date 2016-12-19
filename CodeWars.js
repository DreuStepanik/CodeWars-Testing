ANALOGY BANK FROM CODE WARS:

/********************************************
            CODE WARS TEST 1
********************************************/

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

SOLUTION:

// Pass through an anonymous object to be reversed.
function spinWords(str) {
// attach the split property, to the anonymous property passed through the function.
// open set of strings to grab any string passed through.
// make sure to .split(' ') with a space, to split not the entire string of words as one,
// but to seperate the words with a space in between.
    return str.split(' ')
    // The map() method creates a new array with the results of calling a provided 
    // function on every element in this array.
    // pass through x as an object, to represent the new array of words.
        .map(function (x) {
        // the following statement, will only reverse words with the length of 5 or greater
            if (x.length >= 5) {
            // return the object (x)
            // use split to split the word
            // use .reverse() to then reverse the word
            // use .join() to then join the word together
                return x.split('').reverse().join('')
            }
            return x
            // use .join(' ') to join the words together with a space in between.
        }).join(' ')
}

/********************************************
            CODE WARS TEST 2
********************************************/

Its pretty straightforward. 
Your goal is to create a "function" that removes the first
and last characters of a string. You Are given one parameter.

SOLUTION :

function removeChar(str){

//Use the .slice() method ( array.slice(start, end) )
// The slice() method returns the selected elements in an array, 
//  as a new array object.
// The slice() method selects the elements starting at the given start argument,
//  and ends at, but does not include, the given end argument.
var result = str.slice(1, -1);
return result;
};


/********************************************
            CODE WARS TEST 3
********************************************/

Create a "function" that takes an integer as an argument and returns "Even" for even
numbers or "Odd" for odd numbers.

SOLUTION : 

function even_or_odd(number) {
  // ...    
    if(number % 2 === 0) {
    // % is the modulo operator.
    // === means 'is equal to'
    // The 0 means that when var number is divided by 2, there are 0 remainders.
      return "Even";
      } else {
        return "Odd";
        }
}


/********************************************
            CODE WARS TEST 4
********************************************/