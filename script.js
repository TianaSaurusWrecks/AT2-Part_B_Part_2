// Question 2.1 Build an object called "myMovie" 
// with the following properties and data:
//      Title: The Longest Day
//      Year: 1964

// Objects are like little containers holding pieces of related information

// create object called myMovie
const myMovie = { 
    // "Title" is the key (property name) and "The Longest Day" is the value
    Title: "The Longest Day", 
    // "Year" is the key and "1964" is the value
    Year: 1964,
    // Question 2.2 Add rating and summary to myMovie object
    Rating: 5,
    //summary
    Summary: "World War II movie about the Normandy landings"


};
// Print object to console
// console.log(myMovie);

// Question 2.3 Change the data of the properties
myMovie.Rating = 4; // updates the rating from 5 to 4
myMovie.Year = 1962; // updates year from 1964 to 1962

// print updated object to console
console.log(myMovie);