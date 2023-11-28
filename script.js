// const url = 'http://api.openweathermap.org/data/2.5/';
// const key = 'a237eb6f83f758e42f5baf67d577b274';

// const setQuery = (e) => {
//     if (e.keyCode == '13')
//         getResult(searchBar.value);
// }

// const getResult = (cityName) => {
//     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;
//     fetch(query)
//     .then(weather => {
//         return weather.json()
//     })
//     .then(displayResult)
// }

// const displayResult = (result) => {
//     let city = document.querySelector('.city')
//     city.innerHTML = `${result.name}, ${result.sys.country}`

//     let temp = document.querySelector('.temp')
//     temp.innerHTML = `${Math.round(result.main.temp)}<sup>o</sup>C`

//     let minmax = document.querySelector('.minmax')
//     minmax.innerHTML = `${Math.round(result.main.temp_min)}<sup>o</sup>C /
//     ${Math.round(result.main.temp_max)}<sup>o</sup>C`
// }

// const searchBar = document.querySelector('#searchBar');
// searchBar.addEventListener('keypress', setQuery);


// const url = 'http://api.openweathermap.org/data/2.5/'
// const key = '2089d89e49a40061fac2e87097c1a95a'

// const searchBar = document.getElementById('searchBar')

// searchBar.addEventListener('keypress', setQuery)

// function setQuery (e) {
//     if (e.key === 'Enter') {
//         getResult(searchBar.value)
//     }
// }

// function getResult (cityName) {
//     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`
//     fetch(query)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             displayResult(data)
//         })
// }

// function displayResult (data) {
//     document.querySelector('.city').innerHTML = `${data.name}, ${data.sys.country}`
//     document.querySelector('.temp').innerHTML = `${data.main.temp}<sup>o</sup>`
// }















// http://api.openweathermap.org
// http://api.openweathermap.org/data/2.5/

const url = 'http://api.openweathermap.org/data/2.5/'
const key = '2089d89e49a40061fac2e87097c1a95a'

const searchBar = document.getElementById('searchBar')

searchBar.addEventListener('keypress', setQuery)

function setQuery(e) {
    if (e.key == 'Enter') {
        getResult(searchBar.value)
    }
}

function getResult(cityName) {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`
    fetch(query)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            displayResult(data)
        })
        .catch((err) => {
            console.log(err)
        })
}

function displayResult(data) {
    document.querySelector('.city').innerHTML = `${data.name} ${data.sys.country}`
    document.querySelector('.temp').innerHTML = `${data.main.temp} <sup>o</sup>`
}