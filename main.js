let input = document.querySelector("input");
let submitBtn = document.querySelector("button");
let content = document.querySelector(".content");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getWeather(input.value);
});

async function getWeather(city) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af2985d9610a1e1e7396793e40c5d48e&units=metric`
  );
  let data = await res.json();
  try {
    setContent(data);
  } catch (e) {
    alert(`Error: ${data.message}`);
  }
}

function setContent(data) {
  let HTMLcontent = `
  <div class="weather-data text-center">
  <h2 class="text-gray-700 font-bold text-2xl mb-1 text-left">
    ${data.name}
  </h2>
  <div class="status mb-2">
    <p class="text-gray-700 font-semibold text-lg">status</p>
    <span class="block">${data.weather[0].description}</span>
  </div>
  <div class="temp mb-2">
    <p class="text-gray-700 font-semibold text-lg">Weather</p>
    <ul>
      <li>Temp: ${data.main.temp} C</li>
      <li>Humidity: ${data.main.humidity}</li>
    </ul>
  </div>
  <div class="wind">
    <p class="text-gray-700 font-semibold text-lg">Wind</p>
    <ul>
      <li>speed: ${data.wind.speed}</li>
      <li>Deg: ${data.wind.deg}</li>
    </ul>
  </div>
</div>
  `;
  content.innerHTML = HTMLcontent;
}
