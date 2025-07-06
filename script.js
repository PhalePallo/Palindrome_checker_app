const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const themeToggle = document.getElementById('theme-toggle');

/**
 * Check if a string is a palindrome, ignoring non-alphanumeric chars and case.
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

checkBtn.addEventListener('click', () => {
  const userInput = textInput.value.trim();

  if (!userInput) {
    alert('Please input a value.');
    return;
  }

  if (isPalindrome(userInput)) {
    result.textContent = `${userInput} is a palindrome`;
  } else {
    result.textContent = `${userInput} is not a palindrome`;
  }
});

// Dark mode toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Optionally store preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load theme preference
document.addEventListener('DOMContentLoaded', () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
