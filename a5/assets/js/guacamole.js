 $(document).ready(function() {



   $(".sectionDirections").hide();

         var hideStatus = false;

         $(".how").on("click", function() {


         if(hideStatus == false){
                   $("Step 1").hide();
                   $("Step 2").hide();
                   $("Step 3").hide();
                   $("Step 4").hide();
                   $("Step 5").hide();
                   $(".sectionDirections").show();

                   hideStatus = true;

                 }
  else{

      $("Step 1").show();
      $("Step 2").show();
      $("Step 3").show();
      $("Step 4").show();
      $("Step 5").show();
      $(".sectionDirections").hide();
      hideStatus = false;
  }
      });

  $(".onionpic").hide ();

      var hideStatus = false;

      $(".onion").on("click", function() {

        if(hideStatus == false) {
            $(".onionpic").show();

            hideStatus = true;
        }
else{

    $(".onionpic").hide();
    hideStatus = false
}

      });
      $(".cilantropic").hide ();

          var hideStatus = false;

          $(".cilantro").on("click", function() {

            if(hideStatus == false) {
                $(".cilantropic").show();

                hideStatus = true;
            }
    else{

        $(".cilantropic").hide();
        hideStatus = false
    }

          });

          $(".jalepenopic").hide ();

              var hideStatus = false;

              $(".jalepeno").on("click", function() {

                if(hideStatus == false) {
                    $(".jalepenopic").show();

                    hideStatus = true;
                }
        else{

            $(".jalepenopic").hide();
            hideStatus = false
        }

                  });


    $(".saltpic").hide ();

        var hideStatus = false;

              $(".salt").on("click", function() {

            if(hideStatus == false) {
                  $(".saltpic").show();

                  hideStatus = true;
                                  }
                      else{

                $(".saltpic").hide();
                hideStatus = false
                          }

        });


                  $(".avopic").hide ();

                      var hideStatus = false;

                      $(".avo").on("click", function() {

                        if(hideStatus == false) {
                            $(".avopic").show();

                            hideStatus = true;
                        }
                else{

                    $(".avopic").hide();
                    hideStatus = false
                }

          });

          $(".hover-class").hover(function() {console.log('1');
                   $(this).stop().animate({left:"50px"});
              },
              function() {
                   $(this).stop().animate({left:"30px"});
              });


$("img").mouseover(function() {
  var color = $( this ).css( "border-style", "solid").css( "border-color", "white" );
});
$("img").mouseleave(function() {
  var color = $(this).css("border-style", "none").css("border-color", "none");
});

$( "img" ).click(function() {
  alert( "Guacamole is the best!" );
});

$(".ingredients").mouseover(function() {
  var color = $( this ).css("background-color", "yellow")
});

$(".button").click(function(){
        $(".text").html("Let's make Guacamole!");

});
});
