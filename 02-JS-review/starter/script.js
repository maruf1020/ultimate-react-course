const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring -
const books = getBooks();

const book = getBook(1);
book;

// const title = book.title;
// const author = book.author;
// const genres = book.genres;
const { title: name, author, genres } = book;
console.log("name:", name, "   author:", author);


// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// const otherGenres = genres.slice(2);
//... rest operator in this case
//we must need to use rest operator in the last
[primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log("primaryGenre:", primaryGenre, "   secondaryGenre:", secondaryGenre, "   otherGenres:", otherGenres);


//SPREAD OPERATOR IN ARRAY
//Here I will use ... syntax to spread the array (spreed operator)
//There is no condition to use spread operator, We can use it anywhere in the array
const newArray = ["Bangladeshi", "dark fantasy", "City life"];
const newGenres = [...genres, "dark fantasy", ...newArray];
console.log(newGenres);

//SPREAD OPERATOR IN OBJECT
const updatedBook = {
  //spread operator
  ...book,
  //we can update any property of the object
  title: "The Lord of the Rings: The Fellowship of the Ring 2000",
  //we can update any property of the object
  pages: 1216 + 100,
  //we can add new property of the object
  publicationDate: "1954-07-29"
};
console.log(updatedBook);


//Template literal 
const summary = `${updatedBook.title}, is a ${updatedBook.pages}-page long book, written by ${updatedBook.author} and published on ${updatedBook.publicationDate.split("-")[0]}`;
console.log(summary);


//Ternary operator
const hasMovieAdaptation = updatedBook.hasMovieAdaptation ? "Yes" : "No";
console.log(hasMovieAdaptation);


//Arrow function
const getBookSummary = (book) => {
  return `${book.title}, is a ${book.pages}-page long book, written by ${book.author} and published on ${book.publicationDate.split("-")[0]}`;
}
console.log(getBookSummary(updatedBook));

//Short circuiting 
//If the first value is true then it will return the first value
//If the first value is false then it will return the second value
const hasMovieAdaptation2 = updatedBook.hasMovieAdaptation && "Yes" || "No";
console.log(hasMovieAdaptation2);

// Example 2 
const hasMovieAdaptation3 = updatedBook.hasMovieAdaptation && "Yes";
console.log(hasMovieAdaptation3);

// Falsy values in javascript
// 1. 0 is a falsy value
// 2. "" is a falsy value
// 3. undefined is a falsy value
// 4. null is a falsy value
// 5. NaN is a falsy value
// 6. false is a falsy value
// 7. -0 is a falsy value
// 8. 0n is a falsy value


// Truthy values in javascript
// 1. "0" is a truthy value
// 2. " " is a truthy value
// 3. [] is a truthy value
// 4. {} is a truthy value
// 5. function(){} is a truthy value
// 6. true is a truthy value
// 7. 1 is a truthy value
// 8. -1 is a truthy value
// 9. 0.1 is a truthy value
// 10. -0.1 is a truthy value
// 11. 1n is a truthy value
// 12. -1n is a truthy value
// 13. Infinity is a truthy value
// 14. -Infinity is a truthy value

//Nullish coalescing operator (??)
//If the first value is null or undefined then it will return the second value
//If the first value is not null or undefined then it will return the first value
const hasMovieAdaptation4 = updatedBook.hasMovieAdaptation ?? "No";
console.log(hasMovieAdaptation4);


//Optional chaining operator (?.)
//If the first value is null or undefined then it will return undefined
//If the first value is not null or undefined then it will return the first value
const rating = updatedBook.reviews?.goodreads?.rating;
console.log(rating);

// example 2 
const rating2 = updatedBook.reviews?.goodreads?.rating ?? "No rating found";
console.log(rating2);

// Array Method 
let numbers = [1, 12, 3, 40, 4, 6, 7, 8, 19];
let numbers2 = [10, 101, 1200, 103, 14, 15, 160, 17, 18, 19];
let numbers3 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let characters2 = ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
let characters3 = ["u", "v", "w", "x", "y", "z"];
let fruits = ["apple", "banana", "orange", "mango", "grape", "pineapple", "jackfruit", "watermelon", "papaya", "coconut"];
let vegetables = ["potato", "tomato", "carrot", "cucumber", "cabbage", "cauliflower", "broccoli", "onion", "garlic", "ginger"];
let peopleObject = [{
  id: 123,
  name: "Rahim",
  age: 20,
  education: "SSC"
},
{
  id: 456,
  name: "Karim",
  age: 25,
  education: "HSC"
},
{
  id: 546,
  name: "Rahima",
  age: 22,
  education: "BSC"
},
{
  id: 789,
  name: "Karima",
  age: 27,
  education: "MSC"
},
{
  id: 987,
  name: "Rahimuddin",
  age: 30,
  education: "BSC"
},
];
let peopleObject2 = [{
  id: 123,
  name: "Rahim",
  languages: ["Bangla", "English", "Hindi"]
},
{
  id: 456,
  name: "Karim",
  languages: ["Bangla", "English"]
},
{
  id: 546,
  name: "Rahima",
  languages: ["Bangla", "English", "Hindi", "Arabic"]
},
{
  id: 789,
  name: "Karima",
  languages: ["Bangla", "English", "Hindi"]
},
{
  id: 987,
  name: "Rahimuddin",
  languages: ["Bangla", "English", "Hindi", "Arabic", "Spanish"]
},
];
let peopleObject3 = [{
  id: 123,
  programmingLanguages: ["JavaScript", "Python", "Java"],
  frameworks: ["React", "Angular", "Vue"],
  experience: 5,
  experienceBasedOnLanguage: {
    JavaScript: 3,
    Python: 2,
    Java: 4,
    React: 2,
    Angular: 3,
    Vue: 1
  }
},
{
  id: 456,
  programmingLanguages: ["JavaScript", "Python"],
  frameworks: ["React", "Angular"],
  experience: 3,
  experienceBasedOnLanguage: {
    JavaScript: 2,
    Python: 1,
    Java: 2,
    React: 1,
    Angular: 2,
    Vue: 0
  },
},
{
  id: 546,
  programmingLanguages: ["JavaScript", "Python", "Java", "C++"],
  frameworks: ["React", "Angular", "Vue", "Django"],
  experience: 7,
  experienceBasedOnLanguage: {
    JavaScript: 5,
    Python: 3,
    Java: 5,
    React: 3,
    Angular: 4,
    Vue: 2,
    Django: 2,
    "C++": 2,
  }
},
{
  id: 789,
  programmingLanguages: ["JavaScript", "Python", "Java", "C++", "C#"],
  frameworks: ["React", "Angular", "Vue", "Django", "Spring"],
  experience: 10,
  experienceBasedOnLanguage: {
    JavaScript: 7,
    Python: 5,
    Java: 7,
    React: 5,
    Angular: 6,
    Vue: 4,
    Django: 4,
    "C++": 4,
    "C#": 3,
    Spring: 3,
  }
},
{
  id: 987,
  programmingLanguages: ["JavaScript", "Python", "Java", "C++", "C#", "PHP"],
  frameworks: ["React", "Angular", "Vue", "Django", "Spring", "Laravel"],
  experience: 12,
  experienceBasedOnLanguage: {
    JavaScript: 9,
    Python: 7,
    Java: 9,
    React: 7,
    Angular: 8,
    Vue: 6,
    Django: 6,
    "C++": 6,
    "C#": 5,
    Spring: 5,
    PHP: 4,
    Laravel: 4,
  }
}
];

//.............................................//
//.............................................//
//ARRAY METHODS|||ARRAY METHODS|||ARRAY METHODS//
//.............................................//
//.............................................//
{
  //.............................................//
  // 1. map()
  //.............................................//
  // map() method creates a new array with the results of calling a provided function on every element in the calling array.
  // map() method calls the provided function once for each element in an array, in order.
  // map() method does not change the original array.
  // map() method returns a new array of the same length with the results of calling a provided function on every element in the calling array.
  // map() method can take 3 arguments: currentElement, index, array.
  // Example 
  const numbers4 = numbers.map((number) => {
    return number * 2;
  });
  console.log(numbers4);


  //.............................................//
  // 2. filter()
  //.............................................//
  // filter() method creates a new array with all elements that pass the test implemented by the provided function.
  // filter() method calls a provided function once for each element in an array, and constructs a new array of all the values for which the provided function returns true.
  // filter() method does not change the original array.
  // filter() method returns a new array with the elements that pass the test.
  // filter() method can take 3 arguments: currentElement, index, array.
  // Example
  const numbers5 = numbers.filter((number) => {
    return number % 2 === 0;
  });
  console.log(numbers5);

  //.............................................//
  // 3. find()
  //.............................................//
  // find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  // find() method calls the provided function once for each element in an array, in ascending order, until it finds one where callback returns a true value.
  // find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
  // find() method does not change the original array.
  // find() method can take 3 arguments: currentElement, index, array.
  // Example
  const expectedNumber = peopleObject3.find((people, index, array) => {
    return peopleObject[index].age < 30 && peopleObject2[index].languages.length > 1;
  });
  console.log(expectedNumber);

  //.............................................//
  // 4. findIndex()
  //.............................................//
  // findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
  // findIndex() method calls the provided function once for each element in an array, in ascending order, until it finds one where callback returns a true value.
  //Example
  const expectedNumberIndex = vegetables.findIndex((vegetable) => {
    return vegetable === "cucumber";
  });
  console.log(expectedNumberIndex);

  //.............................................//
  // 5. forEach()
  //.............................................//
  // forEach() method executes a provided function once for each array element.
  // forEach() method does not change the original array. But it can change the original array if the provided function changes the original array.
  // forEach() method can take 3 arguments: currentElement, index, array.
  // Example
  numbers.forEach((number) => {
    console.log(number);
  });

  //.............................................//
  // 6. some()
  //.............................................//
  // some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
  // some() method calls the provided function once for each element in an array, until it finds one where callback returns a true value. If such an element is found, some() immediately returns true. Otherwise, some() returns false.
  // some() method does not change the original array.
  // some() method can take 3 arguments: currentElement, index, array.
  // Example
  const isEven = peopleObject3.some((person) => {
    return person.age % 2 === 0;
  });
  console.log(isEven);
  //complex example using peopleObject and peopleObject2 and peopleObject3
  const isEven2 = peopleObject3.some((person, index, array) => {
    return peopleObject[index].age % 2 === 0 && peopleObject2[index].languages.length > 1;
  });
  console.log(isEven2);


  //.............................................//
  // 7. every()
  //.............................................//
  // every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  // every() method calls the provided function once for each element in an array, until it finds one where callback returns a false value. If such an element is found, every() immediately returns false. Otherwise, every() returns true.
  // every() method does not change the original array.
  // every() method can take 3 arguments: currentElement, index, array.
  // Example
  const isEven3 = peopleObject3.every((person, index) => {
    return peopleObject[index].age > 18;
  });
  console.log(isEven3);


  //.............................................//
  // 8. reduce()
  //.............................................//
  // reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  // reduce() method does not change the original array.
  // reduce() method can take 4 arguments: accumulator, currentElement, index, array.
  // Example
  const sum = numbers.reduce((accumulator, number) => {
    console.log(accumulator);
    console.log(number);
    return accumulator + number;
  }, 0);
  console.log(sum);

  //when reduce make an array example
  const sum1 = numbers.reduce((accumulator, number) => {
    accumulator.push(number);
    return accumulator;
  }, []);
  console.log(sum1);

  //.............................................//
  // 9. reduceRight()
  //.............................................//
  // reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
  //It is same as reduce() method but it starts from the end of the array. like if we reverse the array and then use reduce() method.
  // reduceRight() method does not change the original array.
  // reduceRight() method can take 4 arguments: accumulator, currentElement, index, array.
  // Example
  const sum2 = numbers.reduceRight((accumulator, number) => {
    console.log(accumulator);
    console.log(number);
    return accumulator + number;
  }, 0);

  //.............................................//
  // 10. sort()
  //.............................................//
  // sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
  // sort() method changes the original array.
  // sort() method can take 2 arguments: firstElement, secondElement.
  // Example
  numbers = [1, 30, 4, 21, 100000];
  const sortedNumbers = numbers.sort((firstElement, secondElement) => {
    console.log(firstElement);
    console.log(secondElement);
    return firstElement - secondElement;
  });
  console.log(sortedNumbers);

  //.............................................//
  // 11. reverse()
  //.............................................//
  // reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
  // reverse() method changes the original array.
  // Example
  const reversedNumbers = numbers.reverse();
  console.log(reversedNumbers);


  //.............................................//
  // 12. slice()
  //.............................................//
  // slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
  // slice() method does not change the original array.
  // slice() method can take 2 arguments: begin, end.
  // Example
  const slicedNumbers = numbers.slice(1, 3);
  console.log(slicedNumbers);

  //Complex example
  const slicedNumbers2 = numbers.slice(1, numbers.length - 1);
  console.log(slicedNumbers2);

  //last items
  const slicedNumbers3 = numbers.slice(-2);
  console.log(slicedNumbers3);

  //First items
  const slicedNumbers4 = numbers.slice(0, 2);
  console.log(slicedNumbers4);

  //from 3rd item to before last 2 items
  const slicedNumbers5 = numbers.slice(2, -2);
  console.log(slicedNumbers5);

  //.............................................//
  // 13. splice()
  //.............................................//
  // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
  // splice() method changes the original array.
  // splice() method can take 3 arguments: start, deleteCount, item1, item2, itemN. (item1, item2, itemN are optional)
  // A video to understand: https://www.youtube.com/watch?v=jleFHKtgllE
  // Example
  console.log(numbers);
  const splicedNumbers = numbers.splice(1, 2, 100, 200, 300);
  console.log(splicedNumbers);
  console.log(numbers);

  //Example 2
  const splicedNumbers2 = numbers.splice(-1, 0, 100, 200, 300);
  console.log(splicedNumbers2);
  console.log(numbers);


  //.............................................//
  // 14. concat()
  //.............................................//
  // concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
  // concat() method does not change the original array.
  // concat() method can take 2 arguments: array1, array2.
  // Example

  const concatNumbers = numbers.concat(numbers3, numbers4);
  console.log(concatNumbers);


  //.............................................//
  // 15. includes()
  //.............................................//
  // includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  // includes() method does not change the original array.
  // includes() method can take 2 arguments: searchElement, fromIndex.
  // Example
  const includesNumber = numbers.includes(1);
  console.log(includesNumber);


  //.............................................//
  // 16. indexOf()
  //.............................................//
  // indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  // indexOf() method does not change the original array.
  // indexOf() method can take 2 arguments: searchElement, fromIndex.
  // Example
  const indexOfNumber = numbers.indexOf(100);
  console.log(indexOfNumber);

  //.............................................//
  // 17. lastIndexOf()
  //.............................................//
  // lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
  // lastIndexOf() method does not change the original array.
  // lastIndexOf() method can take 2 arguments: searchElement, fromIndex.
  // Example
  numbers;
  const lastIndexOfNumber = numbers.lastIndexOf(300, 100);
  console.log(lastIndexOfNumber);

  // example 2
  const lastIndexOfNumber2 = numbers.lastIndexOf(100, 200, 4);
  console.log(lastIndexOfNumber2);


  //.............................................//
  // 18. join()
  //.............................................//
  // join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
  // join() method does not change the original array.
  // join() method can take 1 argument: separator.
  // Example
  const joinedNumbers = numbers.join("||");
  console.log(joinedNumbers);

  //.............................................//
  // 19. toString()
  //.............................................//
  // toString() method returns a string representing the specified array and its elements.
  // toString() method does not change the original array.
  // toString() method does not take any argument.
  // Example
  const stringNumbers = numbers.toString();
  console.log(stringNumbers);
  console.log(typeof stringNumbers)


  //.............................................//
  // 20. toLocaleString()
  //.............................................//
  // toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).
  // toLocaleString() method does not change the original array.
  // toLocaleString() method does not take any argument.
  // Example
  const localeStringNumbers = numbers.toLocaleString("bn-BD");
  console.log(localeStringNumbers);

  //.............................................//
  // 21. push()
  //.............................................//
  // push() method adds one or more elements to the end of an array and returns the new length of the array.
  // push() method changes the original array.
  // push() method can take 1 or more arguments: item1, item2, itemN.
  // Example
  numbers;
  const pushedNumbers = numbers.push(100, 200, 300);
  console.log(pushedNumbers); //returns the new length of the array
  console.log(numbers);

  //.............................................//
  // 22. pop()
  //.............................................//
  // pop() method removes the last element from an array and returns that element. This method changes the length of the array.
  // pop() method changes the original array.
  // pop() method does not take any argument.
  // Example
  numbers;
  const poppedNumber = numbers.pop();
  console.log(poppedNumber); //returns the removed element
  console.log(numbers);

  //.............................................//
  // 23. shift()
  //.............................................//
  // shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
  // shift() method changes the original array.
  // shift() method does not take any argument.
  // Example
  numbers;
  const shiftedNumber = numbers.shift();
  console.log(shiftedNumber); //returns the removed element
  console.log(numbers);

  //.............................................//
  // 24. unshift()
  //.............................................//
  // unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
  // unshift() method changes the original array.
  // unshift() method can take 1 or more arguments: item1, item2, itemN.
  // Example
  numbers;
  const unshiftedNumber = numbers.unshift(100, 200, 300);
  console.log(unshiftedNumber); //returns the new length of the array
  console.log(numbers);

  //.............................................//
  // 25. fill()
  //.............................................//
  // fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.
  // fill() method changes the original array.
  // fill() method can take 3 arguments: value, start, end.
  // Example
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filledNumbers = numbers.fill(100, 2, 4);
  console.log(filledNumbers);
  console.log(numbers);


  //.............................................//
  // 26. copyWithin()
  //.............................................//
  // copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
  // copyWithin() method changes the original array.
  // copyWithin() method can take 2 arguments: target, start, end.
  //Video Tutorial: https://www.youtube.com/watch?v=lIbjL50kl90
  // Example
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const copiedNumbers = numbers.copyWithin(2, 4, 6);
  console.log(copiedNumbers);
  console.log(numbers);

  //Example 2
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const copiedNumbers2 = numbers.copyWithin(5, 100);
  console.log(copiedNumbers2);
  console.log(numbers);

  //Example 3
  let languages = ["C", "C++", "Java", "JavaScript", "Python", "PHP", "Ruby", "Go", "Rust"];
  const copiedLanguages = languages.copyWithin(5, 0, 1); // here 5 is the target index, 0 is the start index and 4 is the end index
  console.log(copiedLanguages);

  //.............................................//
  // 27. flat()
  //.............................................//
  // flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  // flat() method does not change the original array.
  // flat() method can take 1 argument: depth.
  // Example
  const nestedNumbers = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10]]]];
  const flattenedNumbers = nestedNumbers.flat(2);
  console.log(flattenedNumbers);
  console.log(nestedNumbers);
  const flattenedNumbers1 = nestedNumbers.flat(3);
  console.log(flattenedNumbers1);
  const flattenedNumbers2 = nestedNumbers.flat(Infinity);
  console.log(flattenedNumbers2);

  //.............................................//
  // 28. flatMap()
  //.............................................//
  // flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient.
  // flatMap() method does not change the original array.
  // flatMap() method can take 1 argument: callback(currentValue, index, array).
  // Example
  numbers = [1, 2, 3, 4, 5];
  const mappedNumbers = numbers.map((x) => [x + 2]);
  console.log(mappedNumbers);
  const mappedNumbers1 = numbers.flatMap((x) => [x + 2]);
  console.log(mappedNumbers1);  //returns the same result but in a single array

  //example 2
  numbers = [1, 2, 3, 4, 5];
  let numbersInString = ["one", "two", "three", "four", "five"];
  const mappedNumbers2 = numbers.map((x, index) => [x, numbersInString[index]]);
  console.log(mappedNumbers2);
  const mappedNumbers3 = numbers.flatMap((x, index) => [x, numbersInString[index]]);
  console.log(mappedNumbers3);  //returns the same result but in a single array


  //.............................................//
  // 29. entries()
  //.............................................//
  // entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
  // entries() method does not change the original array.
  // entries() method does not take any argument.
  // Example
  numbers = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  const entries = Object.entries(numbers);
  console.log(entries);



  //.............................................//
  // 30. keys()
  //.............................................//
  // keys() method returns a new Array Iterator object that contains the keys for each index in the array.
  // keys() method does not change the original array.
  // keys() method does not take any argument.
  // Example
  numbers = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  const keys = Object.keys(numbers);
  console.log(keys);


  //.............................................//
  // 31. values()
  //.............................................//
  // values() method returns a new Array Iterator object that contains the values for each index in the array.
  // values() method does not change the original array.
  // values() method does not take any argument.
  // Example
  numbers = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  const values = Object.values(numbers);
  console.log(values);


  //.............................................//
  // 32. from()
  //.............................................//
  // from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
  // from() method does not change the original array.
  // from() method can take 2 arguments: arrayLike, mapFn(currentValue, index, array).
  // Example
  const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
  const array = Array.from(arrayLike);
  console.log(array);

  //Example 2
  let num = "12345";
  const numArray = Array.from(num);
  console.log(numArray);

  // Example 3 
  const friends = ["siam", "miraz", "saif", "miraz", "saif"];
  console.log(new Set(friends));
  const uniqueFriends = Array.from(new Set(friends));
  console.log(uniqueFriends);


  //.............................................//
  // 33. isArray()
  //.............................................//
  // isArray() method determines whether the passed value is an Array.
  // isArray() method does not change the original array.
  // isArray() method can take 1 argument: value.
  // Example
  const isArray = Array.isArray([1, 2, 3, 4, 5]);
  console.log(isArray);

  //.............................................//
  // 34. of()
  //.............................................//
  // of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
  // of() method does not change the original array.
  // of() method can take any number of arguments.
  // Example
  const array1 = Array.of(1, 2, 3, 4, 5);
  console.log(array1);

  //example 2
  console.log(Array.of('foo', 2, 'bar', true));
  console.log(Array.of());
  // Expected output: Array []

  //example 3
  console.log(Array.of(7));
  console.log(Array(7));
}


// Working with Immutable Arrays
const newBook = {
  id: 007,
  title: "The Alchemist",
  author: "Paulo Coelho",
}

//add newBook to books array
const newBooks = [...books, newBook];
console.log(newBooks);

//remove book with id 2
const removedBook = books.filter(book => book.id !== 2);

//update book with id 3
const updatedBook1 = books.map(book => {
  if (book.id === 3) {
    return { ...book, title: "The Alchemist", author: "Paulo Coelho" }
  }
  return book;
})

console.log(updatedBook1);



//Promise
fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

console.log("Hello World");

//Same work using async await
async function fetchTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const data = await res.json();
  console.log(data);
}
fetchTodo();