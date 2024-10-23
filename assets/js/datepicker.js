// Initialize bootstrap-datepicker on the input field
$("#registrationDate").datepicker({
  format: "ddth MM yyyy",
  autoclose: true,
  orientation: "bottom",
});
$("#openCalendar").on("click", function () {
  $("#registrationDate").datepicker("show");
});
$("#expiryDate").datepicker({
  format: "ddth MM yyyy",
  autoclose: true,
  orientation: "bottom",
});
$("#openCalendarExpiry").on("click", function () {
  $("#expiryDate").datepicker("show");
});
$("#objectionDate").datepicker({
  format: "ddth MM yyyy",
  autoclose: true,
  orientation: "bottom",
});
$("#openCalendarObjection").on("click", function () {
  $("#objectionDate").datepicker("show");
});