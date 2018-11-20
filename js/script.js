/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//create array of quotes, each one stored in an object
var quotes = [
  {
    quote: "In the midst of chaos, there is also opportunity",
    source: "Sun-Tzu",
    tags: "War, Books"
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J.R.R Tolkien",
    citation: "The Fellowship of the Ring",
    tags: "Books, Movies, Travel"
  },
  {
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    source: "Barack Obama",
    year: 2008,
    tags: "Government, Motivational, Change, Leadership"
  },
  {
    quote: "We make a living by what we get, but we make a life by what we give.",
    source: "Winston Churchill",
    tags: "Positive Thinking, Life"
  },
  {
    quote: "They call it a Royale with cheese.",
    source: "Jules Winnfield",
    citation: "Pulp Fiction",
    year: 1994,
    tags: "Movies"
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favour.",
    source: "Elon Musk",
    tags: "Motivational, Inspirational"
  },
  {
    quote: "My best friend is the one who brings out the best in me.",
    source: "Henry Ford",
    tags: "Friends, Smile"
  },
  {
    quote: "Everything is funny, as long as it's happening to somebody else",
    source: "Will Rogers",
    tags: "Humour"
  },
  {
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    source: "Michael Jordan",
    citation: "Nike Culture",
    year: 1998,
    tags: "Sports, Motivational"
  }
];

var backgroundColors = ['#095256', '#087F8C', '#5AAA95', '#86A873','#BB9F06', '#B75D69', '#8B95C9', '#70163C'];
var quoteOnPage;
var timer;


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
  //check quote on page is not the same as new quote to print
  while(quoteOnPage === quoteObject.quote){
    quoteObject = getRandomQuote();
  }
  //Keep track of ONLY the quote that is printed on the quoteOnPage
  quoteOnPage = quoteObject.quote;
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
  //
  messageToPrint += '</p>';
  messageToPrint += '<p class="tags">Tags: ' + quoteObject.tags +  '</p>';
  //Grab the div and use innerHTML to print our string.
  document.getElementById('quote-box').innerHTML = messageToPrint;
  intervalTimer();
}

//run printQuote func so that a random quote is loaded onto the screen when page is loaded and interval is active
printQuote();

function intervalTimer() {
  //cleartimer
  clearInterval(timer);
  //restart timer, every 10 secs will call printQuote
  timer = setInterval(printQuote, 10000);
}

//Event Listener on button which will call print func
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
