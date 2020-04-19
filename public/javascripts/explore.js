window.addEventListener('load', async () => {
  const response = await fetch('/explore/entries');
  const entries = await response.json();

  return entries.forEach((entry) => {
    document.getElementById('explore-entries').innerHTML += `
    <a href="/explore/entries/${entry.entry_id}">
      <div class="card">
        <div class="card-content">
          <p class="title">${entry.title}</p>
          <p class="subtitle">By ${entry.username}</p>
          <p>${entry.date_created}</p>
        </div>
      </div>
    </a>
    `;
  });
});
