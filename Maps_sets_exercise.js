/* Quick Question #1
What does the following code return? */

new Set ([1, 1, 2, 2, 3, 4]);

//returns an object
//Set(4) {1, 2, 3, 4}

/*Quick Question #2
What does the following code return? */

//[...new Set("referee")].join("");// "refs"

/* Quick Questions #3
What does the Map m look like after running the following code? */
//m.set you need to pass in a key and a value
//keys can be any sort of data, i.e. numbers,functions, booleans, strings, objects, arrays
/*Side note** when using an empty array as a key, arrays are reference types, i.e. [] === [] => false
they are different & unique arrays. They are different in how they are stored & the actual references in those arrays */
let m = new Map ();
m.set ([1, 2, 3], true);
m.set ([1, 2, 3], false);
//Map(2) {Array(3) => true, Array(3) => false}
/*[[Entries]]
0: {Array(3) => true}
1: {Array(3) => false}
key: (3) [1, 2, 3]
value: false */

/* hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
*/
hasDuplicate ([1, 3, 2, 1]); // true
hasDuplicate ([1, 5, -1, 4]); // false

function hasDuplicate (arr) {
  const myMap = new Map ();
  myMap.set ([1, 3, 2, 1], true);
  myMap.set ([1, 5, -1, 4], false);
}

/* vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. */
vowelCount ('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount ('Colt'); // Map { 'o' => 1 }

function vowelCount (str) {
    let numOfVow = 'aeiou';
    let vCount = 0;
  const myMap = new Map ();
  //iterate thru the vowels in the str
  for (let vowels of str) {
  }
}
