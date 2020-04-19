const tag = fetch('/getTags')
  .then((res) => res.json())
  .then((res) => renderTags(res));

const renderTags = (tags) => {
  const tagSection = document.getElementsByClassName('tagSection')[0];
  let completeHtml = '<div class="tags">';
  for (let i = 0; i < tags.length; i++) {
    const x = `<span class="tag is-medium">${tags[i].name}</span>`;
    completeHtml += ` ${x}`;
  }
  completeHtml += ' </div>';
  tagSection.innerHTML = completeHtml;
};

const entry = fetch('/getEntries')
  .then((res) => res.json())
  .then((res) => renderEntries(res));

const renderEntries = (entry) => {
  const cardSection = document.getElementsByClassName('cardSection')[0];
  let cardsHtml = '<div class="columns is-multiline">';
  for (let i = 0; i < entry.length; i++) {
    let preview = entry[i].entry_body.slice(0, 47);
    if (preview.length < 20) {
      preview += '<br> <br>';
    } else if (preview.length < 47) {
      preview += '<br>';
    } else {
      preview += '...';
    }

    const date = entry[i].date_created.slice(0, 10);
    console.log(entry[i].entry_id);
    const x = `
    <div class="column is-one-third">
    <div class="card">
  <div class="card-content">
    <p>
      ${preview}
    </p>
    <p class="subtitle">
        ${entry[i].title}<br>
      ${date}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      <a class="button" href= '/edit/${entry[i].entry_id}' >
         Edit
       </a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
      <a class="button" href= '/remove/${entry[i].entry_id}' >
         Delete
       </a>
      </span>
    </p>
  </footer>
</div>

    </div>`;
    cardsHtml += x;
  }
  cardsHtml += '</div>';
  cardSection.innerHTML = cardsHtml;
};
