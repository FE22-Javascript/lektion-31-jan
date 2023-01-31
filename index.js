
const start_URL = 'https://api.unsplash.com';
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');

// eventlyssnare på vår sökknapp
searchButton.addEventListener('click', (event) => {
    // för att inte genomföra default actions som sker vid knapptryck på submitknapp i form
    event.preventDefault();
    getImages(searchInput.value);
});

async function getImages(searchTerm) {
    try {
        // vår fetch mot API'et
        // fetch är async
        // '/photos/random' är vår endpoint
        // för att gå mot search-endpointen som api'et har; '/search/photos/'
        // '&count=10' betyder att vi skickar in en parameter där vi vill ha 10 st bilder
        let data = await fetch(start_URL
            + '/search/photos/?client_id=' + ACCESS_KEY2
            + '&per_page=3&query=' + searchTerm);
        data = await data.json();
        // url: https://api.unsplash.com/search/photos/?client_id=<ACCESS_KEY>&per_page=10&query=cats

        // töm elementet som innehåller bilder, ifall det finns tidigare värden och man söker igen
        document.querySelector('.images-container').innerHTML = "";

        // fetchen returnerar en lista med objekt där vi har information som vi vill ha
        data.results.forEach(function (image) {
            // för varje element i listan vill vi trycka ut den i vårt UI
            // måste skapa vårt nya element i js först
            let img = document.createElement('img');
            img.setAttribute('src', image.urls.small);
            img.setAttribute('alt', image.alt_description);
            // för att den skall synas i ui behöver vi appenda det till ett redan existerande element där
            document.querySelector('.images-container').appendChild(img);
        });
    } catch (error) {
        console.log('det blev detta felet: ', error);
    }
};