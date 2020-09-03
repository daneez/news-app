(async function() {
  const url = 'https://newsapi.org/v2/top-headlines?country=au&q=covid&apiKey=136aa72cf68d46d1b4cc40ef6e1a4a34';
  const response = await fetch(url)
  const myJson = await response.json();
  const articles = myJson.articles;
  console.log(articles);
  articles.forEach(item => {
    var newsContainer = document.getElementById('news-container');
    newsContainer.insertAdjacentHTML('beforeend',`
    <div class="column is-half-tablet is-half-desktop">
          <article class="message">
            <div class="message-header">
              <p>${item.title}</p>
            </div>
            <div class="message-body">
            ${item.content}
            </div>
          </article>
        </div>
    `)
  });
})();