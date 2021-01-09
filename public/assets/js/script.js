$(document).ready(function () {


    // $("#projectLink").on('click', function (event) {
    //     $("#project").css("display", "block");
    // });

    // Add smooth scrolling to all links
    // $(document).on('click','#approve',function(){

    $(document).on('click', '.smoothLink', function (event) {
        $("#portfolio").css("display", "block");
        $("#about").css("display", "block");
        // $("#project").css("display", "block");
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if => most of this code for smooth scrolling was obtained from W3 Schools
    });

    $("#sendMessage").on("click", function (event) {
        event.preventDefault();
        //get gather form information and do some work with it

    })

    // When the user scrolls down 700px from the top of the document, show the back to top
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            $("#topBtn").css("display", "block");
        } else {
            $("#topBtn").css("display", "none");
        }
    }


    // Takes user to project info by refreshing the page to the portfolio and scrolling to the project info.
    if ($("#project").css("display") === "block") {
        let project = $("#project").data("project");
        window.location = `/${project}#portfolio`;
        var a = $("<a>");
        a.attr("href", "#project");
        a.attr("id", "link");
        a.addClass("smoothLink");
        $("#project").append(a);
        document.getElementById('link').click();
    }

});

