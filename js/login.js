$(document).ready(function () {
    // SWAP LOGIN AND REGISTER FORM
    $(".swap-form").on("click", function(){
        console.log("Welp")
        
    let targetForm = $(this).data("form")

        console.log(targetForm)
        
        $(this).closest("form").addClass("hideform")


        $(`.${targetForm}`).removeClass("hideform")
    })
  
})

