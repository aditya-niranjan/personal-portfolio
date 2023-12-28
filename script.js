// Function to adjust the class based on the screen width
// function responsiveScreen() {
//     // Get the current screen width
//     var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


//     // Get the element you want to modify by its ID
//     var element = document.getElementById('mydiv'); // Assuming the ID of your target element is 'targetElement'

//     // Check the condition and modify the class accordingly
//     if (screenWidth < 416){
//         // When the screen width is less than 416px, add a new class
//         element.classList.remove(''); // Remove this class if it was added previously
//         element.classList.add(''); // Add this class when screen width is less than 416px
//     } else {
//         // When the screen width is 416px or more, add the original class
//         element.classList.remove(''); // Remove this class if it was added previously
//         element.classList.add(''); // Add this class when screen width is 416px or more
        
//     }
// }

// // Event listener to adjust the class when the window is resized
// window.addEventListener('resize', responsiveScreen);

// // Initially call the function to set the class based on the current screen width
// responsiveScreen();






// ---------------------------------------------------from here this is diffrent code og js ---------------------------------------------


function myFunction() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light";
  }
  myFunction()


  $('.button').on('click', function() {
    alert('You clicked the Learn More button!');
  });

  


  document.addEventListener("DOMContentLoaded", function() {
    // Get the More button element by its ID
    const moreButton = document.getElementById("moreButton");
  
    // Get the content card element by its ID
    const contentCard = document.getElementById("contentCard");
  
    // Add a click event listener to the More button
    moreButton.addEventListener("click", function(event) {
      // Prevent the click event from bubbling up to the document
      event.stopPropagation();
      
      // Check if the content card is hidden
      if (contentCard.style.display === 'none' || contentCard.style.display === '') {
        // Display the content card (slide down effect)
        $(contentCard).slideDown();
      } else {
        // Hide the content card (slide up effect)
        $(contentCard).slideUp();
      }
    });
  
    // Add a click event listener to the document
    document.addEventListener("click", function() {
      // Hide the content card (slide up effect)
      $(contentCard).slideUp();
    });
    
    // Stop propagation when clicking inside the content card
    contentCard.addEventListener("click", function(event) {
      event.stopPropagation();
    });
  });
  
  