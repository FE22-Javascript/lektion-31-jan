const UNSPLASH_URL = 'https://api.unsplash.com/search/photos/?client_id=kfOPnNCgLZJepDunOg9Vt6RlMf1t8BybcxZbjtgkRXY&per_page=1&query=cats';

let promise = getPromise(UNSPLASH_URL);

function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else if (req.status == 404) {
        reject("There is a 404 error here");
      } else {
        reject("Unknown status")
      }
    };
    req.send();
  });
  return promise;
}

function consumer() {
  promise.then(
    (result) => {
      console.log({ result });
    },
    (error) => {
      console.log('We have encountered an Error!', error);
    });
}

consumer();