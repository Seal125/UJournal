window.addEventListener('load', async () => {
  const response = await fetch('/explore/entries');
  const entries = await response.json();

  return entries.forEach((entry) => {
    document.getElementById('explore-entries').innerHTML += `
      <a href="/entries/${entry.entry_id}">
        <div class="entry">
          <h1 class="title">${entry.title}</h1>
          <p>By ${entry.username}</p>
        </div>
      </a>
    `;
  });
});
