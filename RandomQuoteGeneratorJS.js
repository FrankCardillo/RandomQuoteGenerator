$(document).ready(function() {
  
  $('button').hover(function() {
    $(this).removeClass("myButton");
    $(this).addClass("hoverButton");
  }, 
                    function(){
    $(this).removeClass("hoverButton");
    $(this).addClass("myButton");
  });
  
  $('button').click(function() {
    $('#quoteBox').text(function() {
      var myArr = ["Life is about making an impact, not making an income.", "Whatever the mind of man can conceive and believe, it can achieve.", "Strive not to be a success, but rather to be of value.", "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "I attribute my success to this: I never gave or took any excuse.", "You miss 100% of the shots you don’t take.", "I’ve failed over and over and over again in my life. And that is why I succeed.", "The most difficult thing is the decision to act, the rest is merely tenacity.", "Every strike brings me closer to the next home run.", "Definiteness of purpose is the starting point of all achievement."];
      var random = Math.floor((Math.random() * myArr.length));
      return myArr[random];
    });
  });
});
