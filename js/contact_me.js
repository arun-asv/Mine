// $(function() {

//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var phone = $("input#phone").val();
//       var message = $("textarea#message").val();
//       var firstName = name; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
//       $this = $("#sendMessageButton");
//       $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
//       $.ajax({
//         url: "././mail/contact_me.php",
//         type: "POST",
//         data: {
//           name: name,
//           phone: phone,
//           email: email,
//           message: message
//         },
//         cache: false,
//         success: function() {
//           // Success message
//           $('#success').html("<div class='alert alert-success'>");
//           $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-success')
//             .append("<strong>Your message has been sent. </strong>");
//           $('#success > .alert-success')
//             .append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         error: function() {
//           // Fail message
//           $('#success').html("<div class='alert alert-danger'>");
//           $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
//           $('#success > .alert-danger').append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         complete: function() {
//           setTimeout(function() {
//             $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//           }, 1000);
//         }
//       });
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });

//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });

$(document).ready(function () {
  var nflag=1,eflag=1,mflag=1
  $("#fname").blur(function () {
    var text = $(this).val()
    if (text.length < 4) {
      $("#error1").show()
      nflag=1
      $("#btn").attr('disabled', true)
    }
    else {
      $("#error1").hide()
      nflag=0
      if(eflag==0 && mflag==0){
        $("#btn").attr('disabled', false)
      }
    }
  })
  
  $("#emailaddress").blur(function () {
    var text = $(this).val()
    if (/^[A-Za-z0-9]+\@[a-z]+\.[a-z]+$/.test(text) == false) {
      $("#error3").show()
      eflag=1
      $("#btn").attr('disabled', true)
    }
    else {
      $("#error3").hide()
      eflag=0
      if(nflag==0 && mflag==0){
        $("#btn").attr('disabled', false)
      }
    }
  })
  $("#mnumber").blur(function () {
    var text = $(this).val()
    if (text.length == 10) {
      if (/^[0-9]+$/.test(text) == true) {
        $("#error4").hide()
        mflag=0
        if(eflag==0 && nflag==0){
        $("#btn").attr('disabled', false)}
       
      }
    }
      else {
        $("#error4").show()
        mflag=1
        $("#btn").attr('disabled', true)
  
      }
})
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzMZJRoeSpWJTl2rv5t1vPesj4x1J7zjod528JS/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
})
