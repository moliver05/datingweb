$(document).ready(function() {

    $("#formOne").submit(function(event) {
      var age = parseInt($("#age").val());
      var gender = $("#gender").val();

      if (age < 40 && gender === "male") {
        $("#output").text("Congratulations, you've been matched with Mark");
        $("#output").append('<img src="../img/mark.jpeg"/>')

      }
      else if (age > 39 && gender ==="male") {
        $("#output").text("Congratulations, you've been matched with Jeff");
      }
      else if (age < 40 && gender === "female") {
        $("#output").text("Congratulations, you've been matched with Katie");
      }
      else {
        $("#output").text("Congratulations, you've been matched with Jennifer");
      }
      event.preventDefault();
     });
});
