var a;
var b;

var getQuote= function (data)
{
  $("#abc").text(data.quoteText);
  a=data.quoteText;
  b=data.quoteAuthor;
}


$(document).ready(function(){
    $("#def").click(function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",getQuote);
    });
  $("#tweet").click(function(){
     $('.twitter-share').attr('href','https://twitter.com/intent/tweet?text='+a+' Author: '+b);
    
  })
  
  
});