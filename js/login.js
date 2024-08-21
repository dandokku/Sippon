$(document).ready(function () {
    // SWAP LOGIN AND REGISTER FORM
    $(".swap-form").on("click", function(){
        console.log("Welp")
        
    let targetForm = $(this).data("form")

        console.log(targetForm)
        
        $(this).closest("form").addClass("hideform")


        $(`.${targetForm}`).removeClass("hideform")
    })

    function allLogin() {
        let loginBtn = $(".login-btn")
        loginBtn.attr("disabled", true)
      }
})


$(document).ready(function() {
  // Function to handle form submission and redirection
  function redirectToIndex() {
    window.location.href = "index.html";
  }

  // Listen for the submit event on the login form
  $(".login-section.form").submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    redirectToIndex(); // Redirect the user to the index page
    console.log("WelpWLPelpauosbobfour");
    $(".logs").hide()
  });

  // Listen for the submit event on the signup form
  $(".signup-section.form").submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    redirectToIndex(); // Redirect the user to the index page
  });
});
