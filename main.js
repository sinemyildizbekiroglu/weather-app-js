const api = {
  key: "41dbca3720e02fc42427ad1fe2655dd6",
  baseurl: "https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector(".search-box")
searchbox.addEventListener("keypress", setQuery)

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value)
    console.log(searchbox.value)
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json()
    })
    .then(displayResults)
}
