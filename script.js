async function getWeather() {
    const apiKey = '6c1fcc919b43f8d524b8d98ca7883686'; // Api key
    const city = document.getElementById("cityInput").value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=metric';

  
    try {
      const response = await fetch(url);
      const data = await response.json();

      
      if (data.cod === 200) {
        document.getElementById("cityName").innerText = 'Weather in '+data.name;
        document.getElementById("temperature").innerText = 'Temperature: '+data.main.temp+'°C';
        document.getElementById("description").innerText = 'Description: '+data.weather[0].description;
      } else {
        alert("City not found. Please enter a valid city.");
      }
    } catch (error) {
      alert("Error fetching data. Please try again later.");
    }
  }

let showWeather = document.getElementById('weatherSearch');

showWeather.addEventListener('click',getWeather);