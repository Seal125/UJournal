const url = window.location.href;
const strUrl = url.toString();
const index = strUrl.split('/');
const id = index[index.length - 1];

document.getElementById('myBtn').addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const entryBody = document.getElementById('entryBody').value;

  fetch(`/edit/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, entryBody }),
  })
    .then((res) => {
      if (res.status === 200) {
        window.location.replace('/entries');
      }
    });
});
