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

  
  var words = document.getElementsByClassName('word');
  var wordArray = [];
  var currentWord = 0;
  
  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }
  
  function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }
    
    for (var i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
  }
  
  function animateLetterOut(cw, i) {
    setTimeout(function() {
      cw[i].className = 'letter out';
    }, i*80);
  }
  
  function animateLetterIn(nw, i) {
    setTimeout(function() {
      nw[i].className = 'letter in';
    }, 340+(i*80));
  }
  
  function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement('span');
      letter.className = 'letter';
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    
    wordArray.push(letters);
  }
  
  changeWord();
  setInterval(changeWord, 4000);
  