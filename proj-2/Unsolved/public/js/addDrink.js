// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newDrink object
  var newDrink = {
    Name: $("#Name").val().trim(),
    Category: $("#Category").val().trim(),
    Alcoholic: $("#Alcoholic").val().trim(),
    Instructions: $("#Instructions").val().trim(),
    Ingredients: $("#Ingredients").val().trim(),
    Measurements: $("#Measurements").val().trim(),
    Image: $("#Image").val().trim(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/newDrink", newDrink)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });
  // Empty each input box by replacing the value with an empty string
  $("#Name").val(""),
  $("#Category").val(""),
  $("#Alcoholic").val(""),
  $("#Instructions").val(""),
  $("#Ingredients").val(""),
  $("#Measurements").val(""),
  $("#Image").val(""),
  });