const ACCESS_KEY = 'kfOPnNCgLZJepDunOg9Vt6RlMf1t8BybcxZbjtgkRXY';
const ACCESS_KEY2 = 'YisUcdG_-r1zyERJmgSH94sqSPS_o6-LtsdLlgTeZf8';
const ACCESS_KEY3 = 'V2_qc3wlqzic140eJ_PsKoIoOm6TmRueFrGzdcKqbXU';
const start_URL = 'https://api.unsplash.com';
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');

// eventlyssnare på vår sökknapp
searchButton.addEventListener('click', () => {
    console.log(searchInput.value);
    //getImages();
});

async function getImages() {
    // vår fetch mot API'et
    // fetch är async
    // '/photos/random' är vår endpoint
    // '&count=10' betyder att vi skickar in en parameter där vi vill ha 10 st bilder
    let data = await fetch(start_URL + '/photos/random/?client_id=' + ACCESS_KEY2 + '&count=10');
    data = await data.json();

    // fetchen returnerar en lista med objekt där vi har information som vi vill ha
    data.forEach(function(image) {
        // för varje element i listan vill vi trycka ut den i vårt UI
        console.log(image);
        // måste skapa vårt nya element i js först
        let img = document.createElement('img');
        img.setAttribute('src', image.urls.small);
        img.setAttribute('alt', image.alt_description);
        // för att den skall synas i ui behöver vi appenda det till ett redan existerande element där
        document.querySelector('.images-container').appendChild(img);
    });
};