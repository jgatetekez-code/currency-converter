$(document).ready(function () {

  // Sample rates: how much of each currency equals 1 US Dollar
  var rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 150,
    INR: 83
  };

  $("#convertBtn").click(function () {
    var amount = parseFloat($("#amount").val());
    var from = $("#from").val();
    var to = $("#to").val();

    if (isNaN(amount)) {
      $("#result").addClass("error").text("Please enter a valid number.");
      return;
    }

    var inUSD = amount / rates[from];
    var converted = inUSD * rates[to];

    $("#result")
      .removeClass("error")
      .text(amount + " " + from + " = " + converted.toFixed(2) + " " + to);
  });

});