


$(document).ready(function() {
  $("#quote").on("click", getQuote);
  ! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + '://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, 'script', 'twitter-wjs');
  getQuote();
});

function getQuote() {
    
  var quote = newQuote();
  $("#message").html(quote.quote);
  $("#author").html(quote.author);
  
  $('.tweet-button iframe').remove();
  // Generate new markup
  var tweetBtn = $('<a></a>')
    .addClass('twitter-hashtag-button')
    .attr('href', 'https://twitter.com/intent/tweet?button_hashtag=freecodecamp')
    .attr('data-size', "large")
    .attr('data-text', quote.quote);
          
  $('.tweet-button').append(tweetBtn);
  
  twttr.widgets.load();

}

function newQuote() {
  var index = currIndex;
  while (index == currIndex) {
    index = Math.floor(Math.random() * Quotes.length);
  }
  
  currIndex = index;
  return Quotes[index];
}

var currIndex = -1;

var Quotes = [
  {
    quote: '"Coding, the only time men boast about their\'s being the shortest"',
    author: "Stephen James"
  },
  {
    quote: '"Don\'t cry because it\'s over, smile because it happened"',
    author: "Dr. Seuss"
  },
  {
    quote: '"A room without books is like a body without a soul"',
    author: "Marcus Tullius Cicero"
  },
  {
    quote: '"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals"',
    author: "J.K. Rowling"
  },
  {
    quote: '"Everybody dies frustrated and sad, and that is beautiful"',
    author: "They Might Be Giants"
  },
  {
    quote: '"People who think they know everything are a great annoyance to those of us who do"',
    author: "Isaac Asimov"
  },
  {
    quote: '"I have a very bad feeling about this"',
    author: "George Lucas"
  }
];
