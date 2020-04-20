window.addEventListener('load', async () => {
  const response = await fetch('/api/explore/entries');
  const entries = await response.json();

  return entries.forEach((entry) => {
    const date = new Date(entry.date_created);
    document.getElementById('explore-entries').innerHTML += `
    <a href="/explore/entries/${entry.entry_id}">
      <div class="column is-one-third">
        <div class="card">
          <div class="card-content">
            <p class="title">${entry.title}</p>
            <p class="subtitle">By ${entry.username}</p>
            <p>${date.toDateString()}</p>
          </div>
        </div>
      </div>
    </a>
    `;
  });
});
