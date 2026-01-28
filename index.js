
import fetch from "node-fetch";

const city = process.argv[2];

if (!city) {
  console.log("Please provide a city name");
  process.exit(1);
}

const url = `https://wttr.in/${city}?format=j1`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const temp = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;

    console.log(`Weather in ${city}: ${temp}°C,${desc}`);
  } catch (err) {
    console.log("Error fetching weather");
  }
}

getWeather();