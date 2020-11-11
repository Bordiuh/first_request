const requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=779222b5c67e8d3dfd38dae89311dd4f';

function sendRequest(method, url, body = null) {
    return fetch(url).then(response =>{
        return response.json()
    })
}





sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))
