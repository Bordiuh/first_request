const requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=779222b5c67e8d3dfd38dae89311dd4f';

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send();
    })
}

sendRequest('GET', requestURL)
.then(data => console.log(data))
    .catch(err => console.log(err))



