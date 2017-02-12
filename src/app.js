const R = require('ramda');

// const publishedInYear = (book, year) => book.year === year;
// const publishedInYear = year => book => book.year === year;
// const titlesForYear = (books, year) => {
//   const selected = R.filter(book => publishedInYear(book, year), books);
//   return R.map(book => book.title, selected);
// };

/*
Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.
*/
// imperative
// const diffArray = (arr1, arr2) => {
//   const result = [];

//   for (let i = 0; i < arr1.length; i += 1) {
//     for (let j = 0; j < arr2.length; j += 1) {
//       if (arr1[i] !== arr2[j]) {
//         result.push(arr1[i]);
//       }
//     }
//   }
//   return result;
// };

// functional1
// const diffArray = R.curry(R.difference());

// functional2
const diffArray = (arr1, arr2) => {
  // spread operator to create 1 array
  const newArr = [...arr1, ...arr2];
  // check if item is in array
  const symmetricDifferences = (array1, array2) => item => {
    if(array1.indexOf(item) === -1 || array2.indexOf(item) === -1) {
      return item;
    }
  };
  return R.filter(symmetricDifferences(arr1, arr2), newArr);
};
console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));

module.exports = {
  diffArray,
};
