window.onload = function () {
    // Delay to show the flipping animation
    setTimeout(function () {
        document.getElementById('firstCard').style.transform = 'rotateY(180deg)';
        document.getElementById('cardContainer').style.display = 'none';  // Hide the card after it flips
        document.getElementById('contentContainer').style.display = 'block'; // Show the content after the flip
    }, 2000); // Adjust time as needed
};
