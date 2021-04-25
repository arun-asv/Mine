
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
      url:"https://script.google.com/macros/s/AKfycbzGXaZD6VX_c77jf1PhgYK7I52B1wVVmh0eZxi8FA/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          // window.location.reload()
          window.location.href="https://arun-asv.github.io/Mine/"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})
})
