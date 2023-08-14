const url = 'https://api.openweathermap.org/data/2.5/'
const myApiKey = 'c3af7e0d92860c125611293711d1dda5'


const setQuery = (event) => {

    if (event.keyCode == '13') {
        getResult(searchBox.value)

    }
}

// şehir adı girildiğinde sonuçları getirir
const getResult = (cityName) => {
    // istek yapılacak url
    let query = `${url}weather?q=${cityName}&appid=${myApiKey}&units=metric&lang=tr`

    // fetch ile istek yapılır
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log(result)

    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let description = document.querySelector('.description')
    description.innerText = `${result.weather[0].description}`

    let minMaxTemp = document.querySelector('.minMax')
    minMaxTemp.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

// enter tuşuna basıldığında setQuery fonksiyonunu çalıştırır
const searchBox = document.querySelector('#searchBar')
searchBox.addEventListener('keypress', setQuery)

// Sayfa yüklendiğinde varsayılan olarak İstanbul hava durumunu gösterir.s
window.addEventListener('load', () => {
    getResult('Istanbul');
});