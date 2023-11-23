const mainImage = document.querySelector('.main-image');
const hoverImage = document.querySelector('.hover-image');


mainImage.style.display = 'block';
hoverImage.style.display = 'none'; 

mainImage.addEventListener('mouseover', function() {
    mainImage.style.display = 'none';
    hoverImage.style.display = 'block'; // Show the hover image
});

// Add event listener for mouseout (optional: to hide the hover image when the mouse leaves)
mainImage.addEventListener('mouseout', function() {
    hoverImage.style.display = 'none'; // Hide the hover image
    mainImage.style.display = 'block';
});

$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        $('.navbar-nav').toggleClass('active');
    });
});
const trucksound = document.getElementById('truckSound');
document.querySelector('.right-image').addEventListener('click', function() {
    trucksound.play();
        const truckImage = document.querySelector('.left-image img');

    truckImage.style.transition = 'left 5s linear'; // Adjust the duration as needed
    truckImage.style.left = 'calc(100% + 1300px)'; // Move the truck to the right end of the highway
    setTimeout(function() {
        window.location.href = 'videvo.html'; // Redirect to another webpage after animation completes
    }, 5000); // Adjust timing to match animation duration
});
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
// Add click event listeners to strings
