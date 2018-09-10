document.addEventListener("DOMContentLoaded", function(event) {
  var dateString = new Date().toString().split(' ').slice(0, 5).join(' ');
  document.getElementById('date-string').innerHTML = dateString;
});
