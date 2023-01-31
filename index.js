const ACCESS_KEY = 'kfOPnNCgLZJepDunOg9Vt6RlMf1t8BybcxZbjtgkRXY';
const ACCESS_KEY2 = 'YisUcdG_-r1zyERJmgSH94sqSPS_o6-LtsdLlgTeZf8';
const ACCESS_KEY3 = 'V2_qc3wlqzic140eJ_PsKoIoOm6TmRueFrGzdcKqbXU';
const start_URL = 'https://api.unsplash.com';

async function getRandomImages() {
    // vår fetch mot API'et
    // fetch är async
    // '/photos/random' är vår endpoint
    // '&count=10' betyder att vi skickar in en parameter där vi vill ha 10 st bilder
    let data = await fetch(start_URL + '/photos/random/?client_id=' + ACCESS_KEY + '&count=10');
    data = await data.json();
    console.log(data);

    // fetchen returnerar en lista med objekt där vi har information som vi vill ha
    
};

getRandomImages();