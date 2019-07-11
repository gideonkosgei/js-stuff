/*

Currying
-----------
Currying is the process of taking a function with multiple arguments and returning a series of functions that take one argument and eventually resolve to a value.

What is a curried function?
A curried function is a function that takes multiple arguments one at a time. 
Given a function with 3 parameters, the curried version will take one argument and return a function that takes the next argument, 
which returns a function that takes the third argument. The last function returns the result of applying the function to all of its arguments

you can do the same thing with more or fewer parameters

So, currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument.


Advatages of Currying
----------------------
1. Currying helps you to avoid passing the same variable again and again.
2. It helps to create a higher order function. It extremely helpful in event handling.
3. Little pieces can be configured and reused with ease.
4. Syntactic sugar 
*/

//Let’s look at a simple example:
function multiply(a, b, c) {
    return a * b * c;
}

multiply(1,2,3); // 6

// convert to curred function
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
multiply(1)(2)(3) // 6

//We could separate this multiply(1)(2)(3) to understand it better:
const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
console.log(result); // 6


//another example:
function volume(l,w,h) {
    return l * w * h;
}
const aCylinder = volume(100,20,90) // 180000l

//curred
function volume(l) {
    return (w) => {
        return (h) => {
            return l * w * h
        }
    }
}
const aCylinder = volume(100)(20)(90) // 180000