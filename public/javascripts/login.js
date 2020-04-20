const validateUsername = (username) => {
  // matches server validation, faster feedback
  const regex = /^\w+$/;
  const maxLength = 32;
  const minLength = 4;
  return (
    regex.test(username)
    && username.length <= maxLength
    && username.length >= minLength
  );
};

const warnInvalidUsername = () => {
  const input = document.getElementById('username');
  const warningText = 'Invalid username!';
  let warning = document.getElementById('username-warning');
  if (!warning) {
    input.insertAdjacentHTML(
      'afterend',
      `<p id="username-warning">${warningText}</p>`,
    );
    warning = document.getElementById('username-warning');
    warning.style.color = 'red';

    window.setTimeout(() => {
      const fieldset = document.getElementById('loginField');
      fieldset.removeChild(document.getElementById('username-warning'));
    }, 3000);
  }
};

const attemptLogin = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const isValidusername = validateUsername(username.trim());
  if (!isValidusername) warnInvalidUsername();
  const loginInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  fetch('/login', loginInit).then((res) => {
    if (!(res.status === 200)) {
      const form = document.getElementById('login');
      form.username.style.border = '2px red solid';
      form.password.style.border = '2px red solid';
    } else if (res.status === 200) {
      window.location.replace('/explore/entries');
    }
  });
};

const interceptForm = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    attemptLogin();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login');
  interceptForm(form);
});
