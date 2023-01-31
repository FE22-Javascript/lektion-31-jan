const ACCESS_KEY = '';
const start_URL = 'https://api.unsplash.com';

async function getRandomImages() {
    // vår fetch mot API'et
    // '/photos/random' är vår endpoint
    let data = await fetch(start_URL + '/photos/random/?client_id=' + ACCESS_KEY);
    data = await data.json();

    let imageObject = {
        alt: data.alt_description,
        img_url: data.urls.small
    }

    let imgEl = document.querySelector('#random-image');
    imgEl.setAttribute('alt', imageObject.alt);
    imgEl.setAttribute('src', imageObject.img_url);
};

getRandomImages();