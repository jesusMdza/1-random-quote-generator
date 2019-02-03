/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//
// **** THIS PROJECT IS ATTEMPTING TO RECEIVE AN "EXCEEDS EXPECTATIONS" GRADE *****
//
//
// A NEW QUOTE IS PRINTED EVERY 20 SECONDS
//

// 3 variables that hold a reference to the container div, quote and source paragraphs
let container = document.getElementsByClassName('container')[0];
let quoteParagraph = document.getElementsByClassName('quote')[0];
let sourceParagraph = document.getElementsByClassName('source')[0];

// An array that contains 5 objects with several key value pairs
let quotes = [
  {
    quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
    source: 'Jim Rohn',
    citation: 'Facebook',
    year: 2014,
    categorization: 'Inspirational',
  }, {
    quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
    source: 'Oscar Wilde',
    citation: 'The Soul of Man under Socialism',
    year: 1891,
    categorization: 'Philosophy',
  }, {
    quote: "Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life.",
    source: 'Shakuntala Devi',
    categorization: 'Knowledge',
  }, {
    quote: 'How far you go in life depends on your being tender with the young, compassionate with the aged, sympathetic with the striving and tolerant of the weak and strong. Because someday in your life you will have been all of these.',
    source: 'George Washington Carver',
    categorization: 'Respect',
  }, {
    quote: "There is only one thing more painful than learning from experience and that is not learning from experience.",
    source: 'Archibald MacLeish',
    categorization: 'Experience',
  },
];

// An array that holds a list of colors
let colorList = [
  'rgb(40, 116, 27)',
  'rgb(194, 61, 57)',
  'rgb(26, 4, 113)',
  'rgb(215, 110, 0)',
  'rgb(139, 47, 150)',
  'rgb(15, 160, 199)',
  'rgb(0, 77, 63)',
];

// This function stores and returns a random quote from the 'quotes' array
function getRandomQuote(array) {

  let randomQuote = array[Math.floor(Math.random() * array.length)];
  return randomQuote;
}

// The value of my "randomQuote" variable was helped by seeing an answer on stackoverflow by the user "Kit"
// Link: https://stackoverflow.com/questions/42211863/pick-a-random-item-from-a-javascript-array

// Function stores and returns a random color from the 'colorList' array
function getBgColor(list) {

  let randomColor = list[Math.floor(Math.random() * list.length)];
  return randomColor;
}

// Function prints random quote and its properties to the document
function printQuote() {

  let generateQuote = getRandomQuote(quotes);
  let htmlQuote = '';
  let htmlSource = '';
  htmlQuote = generateQuote.quote;
  htmlSource = generateQuote.source;

  if (generateQuote.citation) {
    htmlSource += ', ' + generateQuote.citation;
  }
  if (generateQuote.year) {
    htmlSource += ', ' + generateQuote.year;
  }
  if (generateQuote.categorization) {
    htmlSource += ', ' + generateQuote.categorization;
  }

  quoteParagraph.innerHTML = htmlQuote;
  sourceParagraph.innerHTML = htmlSource;
}

// Function styles the document body with a random color
function displayBgColor() {

  let generateColor = getBgColor(colorList);
  document.body.style.background = generateColor;
}

// Function calls 'printQuote' function and 'displayBgColor' function
function displayQuoteAndColor() {

  printQuote();
  displayBgColor();
}

// Function will call the 'displayQuoteAndColor'  and repeat it every 20 seconds
function intervalFunction() {

  displayQuoteAndColor();
  setInterval(displayQuoteAndColor, 20000);
}

// Function starts the project
intervalFunction();
