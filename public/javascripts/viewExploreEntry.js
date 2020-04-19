const title = document.getElementById('exploreTitle');
const user = document.getElementById('exploreUsername');
const date = document.getElementById('exploreDateCreated');
const body = document.getElementById('exploreBodyText');
const param = window.location.pathname.replace('/explore/entries/', '');


window.addEventListener('load', async () => {
  const response = await fetch(`/api/explore/entries/${param}`);
  const entryData = await response.json();

  title.innerText = entryData[0].title;
  user.innerText = `By ${entryData[0].username}`;
  date.innerText = entryData[0].date_created;
  body.innerText = entryData[0].entry_body;
});
