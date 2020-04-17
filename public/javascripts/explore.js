window.addEventListener('load', async () => {
  const response = await fetch('/explore/entries');
  const entries = await response.json();

  return entries.forEach((entry) => {
    document.getElementById('explore-entries').innerHTML += `
      <a href="/entries/${entry.entry_id}">
        <div class="entry">
          <h1 class="title">${entry.title}</h1>
          <p>By ${entry.username}</p>

          <button onclick="editEntry(${entry.entry_id})">Edit</button>
          <button onclick="deleteEntry(${entry.entry_id})">Delete</button>
        </div>
      </a>
    `;
  });
});

const deleteEntry = async (entryId) => {
  await fetch(`/entries/${entryId}`, { method: 'DELETE' });
  return window.location.reload();
};
