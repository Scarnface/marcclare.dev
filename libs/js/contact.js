$(document).ready(function () {
  var form = $("#contact"),
    email = $("#contactEmail"),
    subject = $("#contactSubject"),
    message = $("#contactMessage"),
    info = $("#contactInfo"),
    submit = $("#contactSubmit");

  submit.on("click", function (e) {
    e.preventDefault();
    if (validate()) {
      $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json",
      }).done(function (data) {
        if (data.success) {
          email.val("");
          subject.val("");
          message.val("");
          info.html("Message sent!").css("color", "green");
        } else {
          info.html("Message Failed!").css("color", "red");
        }
      });
    }
  });

  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(email.val())) {
      if ($.trim(email.val()) === "") {
        email.css("border-color", "red").attr("placeholder", "Email cannot be empty!").val("").focus();
        valid = false;
      } else {
        email.css("border-color", "red").attr("placeholder", "Invalid email!").val("").focus();
        valid = false;
      }
    }
    if ($.trim(subject.val()) === "") {
      subject.css("border-color", "red").attr("placeholder", "Subject cannot be empty!").val("").focus();
      valid = false;
    }
    if ($.trim(message.val()) === "") {
      message.css("border-color", "red").attr("placeholder", "Message cannot be empty!").val("").focus();
      valid = false;
    }

    return valid;
  }
});
