function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'f0c2e7c963488b7004b2190e9fbc1fdb'; // Replace with your actual API key 17:00h (17/092024)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
