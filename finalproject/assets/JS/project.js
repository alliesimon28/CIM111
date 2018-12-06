$(document).ready(function() {

  var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 3000);
  }

  });
  function random_item(items)
{

return items[Math.floor(Math.random()*items.length)];

}

const items = ["Venom" , "Halloween" , "Killer Kate" , "Monster Party" , "Suspira" , "Instant Family" , "The Grinch" , "Night School" , "Green Book" , "The Long Dumb Road" , "A Star is Born" , "A Beautiful Boy" , "Bohemian Rhapsody" , "Boy Erased" , "Mary Queen of Scots" , "Robin Hood"];
console.log("And the best movie award goes to: " + random_item(items));

//var randomValue = myArray[Math.floor(Math.random() * myArray.length)];

//var movies = ["Venom", + "Halloween", + "Killer Kate", + "Monster Party", + "Suspira", "Instant Family", + "The Grinch", "Night School", "Green Book", "The Long Dumb Road", "A Star is Born", "A Beautiful Boy", "Bohemian Rhapsody", "Boy Erased", "Mary Queen of Scots", "Robin Hood" "Creed II", "The Girl in the Spider's Web", "Widows"];

//var show = movies[Math.floor(Math.random() * movies.length)];





  function goBack() {
    window.history.back()
  }
