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
        loginBtn.attr("disabled", false)
      }
})


// $(document).ready(function() {
//   // Function to handle form submission and redirection
//   function redirectToIndex() {
//     window.location.href = "/index.html";
//   }

//   // Listen for the submit event on the login form
//   $(".login-section.form").submit(function(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally
//     redirectToIndex(); // Redirect the user to the index page
//   });

//   // Listen for the submit event on the signup form
//   $(".signup-section.form").submit(function(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally
//     redirectToIndex(); // Redirect the user to the index page
//   });
// });



// $(document).ready(function() {
//   // Function to handle form submission and redirection
//   function redirectToPreviousPage() {
//     const previousPage = sessionStorage.getItem('previousPage');
//     if (previousPage) {
//       window.location.href = previousPage;
//     } else {
//       // If there's no previous page, redirect to the index page
//       window.location.href = "/index.html";
//     }
//   }

//   // Listen for the submit event on the login form
//   $(".login-section.form").submit(function(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally
//     sessionStorage.setItem('previousPage', window.location.href); // Store the current page's URL
//     redirectToPreviousPage(); // Redirect the user back to the previous page
//   });

//   // Listen for the submit event on the signup form
//   $(".signup-section.form").submit(function(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally
//     sessionStorage.setItem('previousPage', window.location.href); // Store the current page's URL
//     redirectToPreviousPage(); // Redirect the user back to the previous page
//   });
// });




// $(document).ready(function() {
//   // Function to handle form submission and redirection
//   function redirectToPreviousPage() {
//     const previousPage = sessionStorage.getItem('previousPage');
//     if (previousPage) {
//       sessionStorage.removeItem('previousPage'); // Clear the stored URL after redirection
//       window.location.href = previousPage;
//     } else {
//       // If there's no previous page, redirect to the index page
//       window.location.href = "/index.html";
//     }
//   }

//   // Listen for the submit event on the login form
//   $(".login-section.form").submit(function(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally
//     sessionStorage.setItem('previousPage', document.referrer); // Store the previous page's URL
//     redirectToPreviousPage(); // Redirect the user back to the previous page
//   });

//   // Listen for the submit event on the signup form
//   $(".signup-section.form").submit(function(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally
//     sessionStorage.setItem('previousPage', document.referrer); // Store the previous page's URL
//     redirectToPreviousPage(); // Redirect the user back to the previous page
//   });
// });







$(document).ready(function() {
  // Function to handle form submission and redirection
  function redirectToPreviousPage() {
    const previousPage = sessionStorage.getItem('previousPage');
    if (previousPage) {
      sessionStorage.removeItem('previousPage'); // Clear the stored URL after redirection
      window.location.href = previousPage;
    } else {
      // If there's no previous page, redirect to the index page
      window.location.href = "/index.html";
    }
  }

  // Listen for the submit event on the login form
  $(".login-section.form").submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    sessionStorage.setItem('previousPage', document.referrer); // Store the previous page's URL
    redirectToPreviousPage(); // Redirect the user back to the previous page
  });

  // Listen for the submit event on the signup form
  $(".signup-section.form").submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    sessionStorage.setItem('previousPage', document.referrer); // Store the previous page's URL
    redirectToPreviousPage(); // Redirect the user back to the previous page
  });

  // Hide the login link on the redirected page (login.html) if the parameter is present
  const urlParams = new URLSearchParams(window.location.search);
  const hideLoginLink = urlParams.get('hideLoginLink');
  if (hideLoginLink) {
    $('.logshii').hide();
  }
});
