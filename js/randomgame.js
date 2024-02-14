function openRandomURL() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'sitemap.txt', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var sitemapText = xhr.responseText;
      var urls = sitemapText.split('\n');

      var randomIndex = Math.floor(Math.random() * urls.length);
      var randomURL = urls[randomIndex];

      window.location.href = randomURL;
    }
  };
  xhr.send();
}

var button2 = document.querySelector('.button2');
button2.addEventListener('click', openRandomURL);
