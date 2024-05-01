function getWeather() {
  var city = document.getElementById('cityInput').value;
  var apiKey = '6S85DpDmkjFaxMBChEAdpPz0w8JFVhqG'; // Tomorrow.io API key
  var apiUrl = 'https://api.tomorrow.io/v4/timelines?location=' + city + '&fields=temperature&timesteps=current&apikey=' + apiKey;

  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var currentTemp = data.data.timelines[0].intervals[0].values.temperature;
      document.getElementById('weatherInfo').innerHTML = 'Current Temperature in ' + city + ': ' + currentTemp + '°C';
    })
    .catch(function(error) {
      console.log('Error fetching weather data:', error);
    });
}
