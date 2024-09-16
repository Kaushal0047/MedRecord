// Get the form elements
const form = document.querySelector('form');
const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputPassword1');
const confirmPasswordInput = document.getElementById('cexampleInputPassword1');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Validate the input fields
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (email === '') {
    alert('Please enter a valid email address');
    return;
  }

  if (password === '') {
    alert('Please enter a password');
    return;
  }

  if (confirmPassword === '') {
    alert('Please confirm your password');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // If all validations pass, create the account
  console.log('Account created successfully!');
  // You can add your API call or other logic to create the account here
});