/*
What is function composition?
-----------------------------
Function composition is a mechanism of combining multiple simple functions to build a more complicated one. 
The result of each function is passed to the next one. 

Function composition is a mathematical concept that allows you to combine two or more functions into a new function

Advantages of function composition
----------------------------------
helps create powerful functions


*/

//Example 1
const add = (a, b) => a + b;
const mult = (a, b) => a * b;
add(2, mult(3, 5))
// This is a form of function composition since this is the result of the multiplication that is passed to the add function

//Example 2
const add = x => y => x + y
const multiply = x => y => x * y
const add2Multiply3 = compose(multiply(3), add(2))

//Example 3
const sum = (a, b) => a + b
const square = x => x * x
const addTen = x => x + 10

const computeNumbers = addTen(square(sum(3, 5))) // 74

/*
To avoid unnecessary confusion we can use Ramda’s compose function. 
The benefit of using a library is that the syntax can be easily understood

*/

const compute = compose(addTen,square,sum)  
compute(3, 5) // 74


    
    
    
  
  