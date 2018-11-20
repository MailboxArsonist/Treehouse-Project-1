/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//create array of quotes, each one stored in an object
var quotes = [
  {
    quote: "In the midst of chaos, there is also opportunity",
    source: "Sun-Tzu"
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J.R.R Tolkien",
    citation: "The Fellowship of the Ring"
  },
  {
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    source: "Barack Obama",
    year: 2008
  },
  {
    quote: "We make a living by what we get, but we make a life by what we give.",
    source: "Winston Churchill"
  },
  {
    quote: "They call it a Royale with cheese.",
    source: "Jules Winnfield",
    citation: "Pulp Fiction",
    year: 1994
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favour.",
    source: "Elon Musk"
  }
];

var backgroundColors = ['#095256', '#087F8C', '#5AAA95', '#86A873','#BB9F06'];


//This function will create a random quote from quotes array
function getRandomQuote(){
  //Generate a random number from 0 - quotes.length and assigns to var
  var randomQuote = Math.floor(Math.random() * quotes.length);
  //return the object with index of the random number
  return quotes[randomQuote];
}

//This function changes the background color of the page when the quote changes.
function colorChange(){
  //Generate a random number from 0 - backgroundColors.length.
  var randomColor = Math.floor(Math.random() * backgroundColors.length);
  //selects the body and changes the background-color to randomly selected one from array.
  document.querySelector('body').style.backgroundColor = backgroundColors[randomColor];
}

//Function will replace the quote on page
function printQuote(){
  //run colorchange func to change background color
  colorChange();
  //assign random object to var
  var quoteObject = getRandomQuote();
  //building string to print quote
  var messageToPrint = '<p class="quote">' + quoteObject.quote  + '</p>';
  messageToPrint += '<p class="source">' + quoteObject.source;
  //check if quote has citation, if so, add to string
  if(quoteObject['citation']){
    messageToPrint += '<span class="citation">' + quoteObject.citation +  '</span>';
  }
  //check if quote has year, if so add it
  if(quoteObject['year']){
    messageToPrint += '<span class="year">' + quoteObject.year +  '</span>';
  }
  messageToPrint += '</p>';
  //Grab the div and use innerHTML to print our string.
  document.getElementById('quote-box').innerHTML = messageToPrint;
}
//run printQuote func so that a random quote is loaded onto the screen when page is loaded.
printQuote();

//Set interval will auto print quote after 20 secs
setInterval(printQuote, 20000);

//Event Listener on button which will call print func
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
