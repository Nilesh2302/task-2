// Get the form element
const form = document.querySelector('#survey-form');

// Get the form elements
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const roleDropdown = document.querySelector('#dropdown');
const sourceRadios = document.querySelectorAll('input[type="radio"][name="source"]');
const preferCheckboxes = document.querySelectorAll('input[type="checkbox"][name="prefer"]');
const feedbackTextarea = document.querySelector('#feedback');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Initialize the error flag
  let hasError = false;

  // Validate the name field
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Please enter your name');
    hasError = true;
  } else {
    showSuccess(nameInput);
  }

  // Validate the email field
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Please enter your email');
    hasError = true;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email');
    hasError = true;
  } else {
    showSuccess(emailInput);
  }

  // Validate the phone field
  if (phoneInput.value.trim() === '') {
    showError(phoneInput, 'Please enter your phone number');
    hasError = true;
  } else if (!isValidPhone(phoneInput.value)) {
    showError(phoneInput, 'Please enter a valid phone number');
    hasError = true;
  } else {
    showSuccess(phoneInput);
  }

  // Validate the role dropdown
  if (roleDropdown.value === '') {
    showError(roleDropdown, 'Please select your current role');
    hasError = true;
  } else {
    showSuccess(roleDropdown);
  }

  // Validate the source radios
  let hasCheckedSourceRadio = false;
  sourceRadios.forEach(function(radio) {
    if (radio.checked) {
      hasCheckedSourceRadio = true;
    }
  });
  if (!hasCheckedSourceRadio) {
    showError(document.querySelector('#quest'), 'Please select how you came to know about WEBHUB');
    hasError = true;
  } else {
    showSuccess(document.querySelector('#quest'));
  }

  // Validate the prefer checkboxes
  let hasCheckedPreferCheckbox = false;
  preferCheckboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      hasCheckedPreferCheckbox = true;
    }
  });
  if (!hasCheckedPreferCheckbox) {
    showError(document.querySelector('#quest'), 'Please select what you would like to see improved');
    hasError = true;
  } else {
    showSuccess(document.querySelector('#quest'));
  }

  // Validate the feedback textarea
  if (feedbackTextarea.value.trim() === '') {
    showError(feedbackTextarea, 'Please enter your feedback');
    hasError = true;
  } else {
    showSuccess(feedbackTextarea);
  }

  // If there's no error, submit the form
  if (!hasError) {
    form.submit();
  }
});

// Helper function to show error message
function showError(input, message) {
  const formGroup = input.closest('.form-group');
  const error = formGroup.querySelector('.error');
  if (error) {
    error.textContent = message;
  } else {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = message;
    formGroup.appendChild(errorElement);
  }
}
