// Event listener for button click
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {

  // Get form values
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var calendar = document.getElementById('calendar').value;
  var dropdown = document.getElementById('dropdown').value;
  var extras = [];

  // Get selected checkboxes for extras
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function(checkbox) {
    extras.push(checkbox.value);
  });

  // Perform desired actions with form values
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Calendar:', calendar);
  console.log('Dropdown:', dropdown);
  console.log('Extras:', extras);

  // Add your custom logic here for form submission
  // For example, you can send the form data to a server using AJAX or perform any other desired operations.
});

// Event listener for mouseover event
document.querySelectorAll('.grid-item').forEach(function(item) {
  item.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'orange';
  });
});

// Event listener for keypress event
document.addEventListener('keypress', function(event) {
  console.log('Key Pressed:', event.key);
});

// Animation using requestAnimationFrame
var animationElement = document.querySelector('.grid-item');
var animationRequestId;
var position = 0;
var direction = 1;

animationElement.addEventListener('click', function() {
  animate();
});

animationElement.addEventListener('mouseout', function() {
  cancelAnimationFrame(animationRequestId);
  animationElement.style.transform = 'translateX(0)';
});

function animate() {
  position += direction * 5;
  animationElement.style.transform = 'translateX(' + position + 'px)';

  if (position >= 100 || position <= -100) {
    direction *= -1;
  }

  animationRequestId = requestAnimationFrame(animate);
}
