var total = 1;
var calculate = function(number)  {
  if (number > 0) {
    for (index = number; index > 1; index--) {
      total *= index;
    }
  }
  else {
    alert("Please enter a positive integer.")
  }
}


$(document).ready(function()  {
  $("form#factorials").submit(function(event)  {
    var number = parseInt($("#textbox").val());
    calculate(number);
    $(".output").show();
    $("output").text(total);
    event.preventDefault();
  });
});
