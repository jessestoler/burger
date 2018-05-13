
$(function() {
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newburger");
  
      var goodBurger = {
        sleepy: newBurger
      };
  
    
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: goodBurger
      }).then(
        function() {
          console.log("changed sleep to", newBurger);
         
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
    
      event.preventDefault();
  
      var grill = {
        name: $("#ca").val().trim(),
        sleepy: false
        
      };
  
    
      $.ajax("/api/cats", {
        type: "POST",
        data: grill
      }).then(
        function() {
          console.log("created new cat");
         
          location.reload();
        }
      );
    });
  
  
  });