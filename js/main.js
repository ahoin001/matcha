/************************************ 
 * Smooth Scroll When User Clicks Anchor Link
*************************************/

// $(document).ready(function () {

//     // Add smooth scrolling to all links
//     $("a").on('click', function (event) {

//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function () {

//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });

// });


// VANILLA JS WAY 

// Function to smooth scroll to a specific element
function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        // left: 0, (Not sure what this does?)
        top: element.offsetTop
    });
}
//   Assign click function to all <a> tags
document.querySelectorAll('a').forEach(aTag => {

    aTag.addEventListener('click', event => {

        // Get the href value in the nchor clicked
        let href = event.target.getAttribute('href');
        console.log(href);

        // Scroll to the element with the href link 
        scrollTo(document.getElementById(href));

    })

});

/************************************ 
 * Script for Duration of scroll effects 
*************************************/
// To initialize Scroll Animations
AOS.init({
    duration: 1400
});