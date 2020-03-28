// Function for formatting a value to 2 digits.
const forceTwoDigit = num => ( ( '0' + num ).slice( -2 ) );

const countdownForm = document.querySelector( 'form' );
const enteredTimeField = document.querySelector( '[name="time"]' );
const minutes = document.querySelector( 'dd span' );
const seconds = document.querySelector( 'dd span ~ span' );

let countdownInterval;
let remainingTime = 0;

// Logic for counting down the time.
const updateTime = () => {
  // Decrease remaining time by one second.
  remainingTime = Number( remainingTime ) - 1000;
  // Update minutes.
  minutes.textContent = forceTwoDigit( parseInt( remainingTime / 60000 ) );
  // Update seconds.
  seconds.textContent = forceTwoDigit( parseInt( remainingTime % 60000 ) / 1000 );
  // Kill the countdown if we reach zero.
  if ( remainingTime <= 0 )
    clearInterval( countdownInterval );
}

countdownForm.addEventListener( 'submit', function() {
  event.preventDefault();
  // Get current entered time (expected: seconds.)
  remainingTime = Number( enteredTimeField.value ) * 1000; // Convert to seconds (1000 miliseconds to a second.)
  // Clear any old countdown.
  clearInterval( countdownInterval );
  // Update minutes.
  minutes.textContent = forceTwoDigit( parseInt( remainingTime / 60000 ) );
  // Update seconds.
  seconds.textContent = forceTwoDigit( parseInt( remainingTime % 60000 ) / 1000 );
  // Set new countdown.
  countdownInterval = setInterval( updateTime, 1000 ); // "Tick" per second.
} );
