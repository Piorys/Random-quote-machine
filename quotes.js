var quotesJson = {
"quotes": [
  {
    "quote": "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
    "author": "Marcus Aurelius"
  },
  {
    "quote": "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    "autor": "Marcus Aurelius"
  },
  {
    "quote": "Let men see, let them know, a real man, who lives as he was meant to live.",
    "author": "Marcus Aurelius"
  },
  {
    "quote": "I've got balls of steel!",
    "author": "Duke Nukem"
  },
  {
    "quote": "Don't have time to play with myself.",
    "author": "Duke Nukem"
  }
]
};

function generateQuote(){
var random = quotesJson.quotes[Math.floor(Math.random() * quotesJson.quotes.length)];
document.getElementById("quote-placement").innerHTML = random;

  }
