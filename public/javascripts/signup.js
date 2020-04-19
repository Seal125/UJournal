const warn = (warningStr) => {
  const warningParagraph = document.getElementById('warning');
  if (!warningParagraph.innerText) {
    warningParagraph.innerText = warningStr;
    window.setTimeout(() => {
      document.getElementById('warning').innerText = '';
    }, 3000);
  }
};

const attemptSignUp = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const isValidusername = validateUsername(username.trim());
  if (!isValidusername) return warn('Invalid username!');
  const isPasswordConfirmed = confirmPassword();
  if (!isPasswordConfirmed) return warn('Passwords do not match!');

  const loginInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  fetch('/users', loginInit).then((res) => {
    if (!(res.status === 201)) {
      warn('Error occurred! Please try again!');
    } else if (res.status === 201) {
      window.location.replace('/explore/entries');
    }
  });
};

const validateUsername = (username) => {
  const regex = /^\w+$/;
  const maxLength = 32;
  const minLength = 4;
  return (
    regex.test(username) &&
    username.length <= maxLength &&
    username.length >= minLength
  );
};

const confirmPassword = () => {
  return (
    document.getElementById('password').value ===
    document.getElementById('verifyPassword').value
  );
};

const interceptForm = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    attemptSignUp();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup');
  interceptForm(form);
});
