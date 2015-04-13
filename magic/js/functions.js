$(document).ready(function(){
  $('#menu').load("navbar.html");
});

function sendEmail() {
  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var message = $("#contact-message").val();
  var link = "mailto:m.isabellee@gmail.com"
             + "?subject=" + encodeURIComponent("Contact Form Response")
             + "&body=" + encodeURIComponent(message+"\n\nFrom:\n"+name+"\n"+email);
  window.location.href = link;
  console.log(link);
}
