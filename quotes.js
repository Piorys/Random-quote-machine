
var quotesArr = ["When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love. - Marcus Aurelius", "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. - Marcus Aurelius", "Let men see, let them know, a real man, who lives as he was meant to live. - Marcus Aurelius", "I've got balls of steel! - Duke Nukem","Don't have time to play with myself. - Duke Nukem"  ];


$(document).ready(function() {

$("#quote-button").click(function() {
var item = quotesArr[Math.floor(Math.random() * quotesArr.length)];
$("#quote-placement").html(item);
});
});
