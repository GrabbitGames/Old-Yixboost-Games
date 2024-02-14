window.addEventListener('load', function() {
  var loadingLogo = document.getElementById('loading-logo');
  var gameIframe = document.getElementById('game-iframe');

  setTimeout(function() {
    loadingLogo.style.opacity = '1';
    setTimeout(function() {
      loadingLogo.style.opacity = '0'; // Het logo en de tekst verdwijnen na 2 seconden
      gameIframe.style.opacity = '1';
      gameIframe.classList.remove('loading'); // Verwijder de "loading" klasse om de blauwe achtergrond te verwijderen
    }, 3000); // 2 seconden vertraging voordat het iframe wordt weergegeven
  }, 0); // 0 milliseconden vertraging om ervoor te zorgen dat de animatie wordt weergegeven
});

const iframe = document.querySelector('iframe');
let isFullscreen = false;

document.addEventListener('keydown', (event) => {
  if (event.key === 'f' || event.key === 'F') {
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      isFullscreen = false;
    } else {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
      isFullscreen = true;
    }
  }
});


const shareButtons = document.querySelectorAll('.share-button');
shareButtons.forEach(button => {
  button.addEventListener('click', shareContent);
});

function shareContent(event) {
  event.preventDefault();

  const url = window.location.href;

  const socialMediaHandle = event.currentTarget.classList[1];

  switch (socialMediaHandle) {
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
      break;
    case 'twitter':
      window.open(`https://twitter.com/share?url=${url}`);
      break;
    case 'linkedin':
      window.open(`https://www.linkedin.com/shareArticle?url=${url}`);
      break;
    case 'whatsapp':
      window.open(`https://api.whatsapp.com/send?text=${url}`);
      break;
    case 'teams':
      window.open(`https://teams.microsoft.com/share?href=${url}`);
      break;
    default:
      break;
  }
}
const body = document.querySelector('body');
let currentColor = getRandomColor();

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  const nextColor = getRandomColor();
  body.style.transition = 'background-color 1s'; // Voeg een overgangseffect toe van 1 seconde
  body.style.backgroundColor = nextColor;
  currentColor = nextColor;
}

setInterval(changeBackgroundColor, 4000);


document.addEventListener("keydown", function(event) {
  if (event.key === "x") {
    document.body.style.transform = "rotate(360deg)";
    document.body.style.transition = "transform 6s";
  }
});