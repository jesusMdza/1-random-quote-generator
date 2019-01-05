/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

let quotes = [
    {
      quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
      source: 'Jim Rohn'
    }, {
      quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
      source: 'Oscar Wilde'
    }, {
      quote: "Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life.",
      source: 'Shakuntala Devi'
    }, {
      quote: 'How far you go in life depends on your being tender with the young, compassionate with the aged, sympathetic with the striving and tolerant of the weak and strong. Because someday in your life you will have been all of these.',
      source: 'George Washington Carver'
    }, {
      quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
      source: 'Jim Rohn'
    },
  ],

  /***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

  /***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.