const title = document.getElementById('exploreTitle');
const user = document.getElementById('exploreUsername');
const date = document.getElementById('exploreDateCreated');
const body = document.getElementById('exploreBodyText');
const param = Number(window.location.pathname.replace(/a-z\//ig, ''));

window.addEventListener('load', async () => {
  const response = await fetch(`/explore/entries/${param}`);
  const entryData = await response.json();

  title.innerText = `${entryData.title}`;
  user.innerText = `By ${entryData.username}`;
  date.innerText = `${entryData.date_created}`;
  body.innerText = `${entryData.entry_body}`;
});
