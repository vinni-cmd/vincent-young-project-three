import { calcWindDirection, convertUnixToLocal } from "./utilities";

const populateWeatherData = async (location, setStateFunction) => {
  const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  url.search = new URLSearchParams({
    appid: '2f2490bb3753f1067ab2e758ffc26e39',
    units: 'metric',
    q: location,
  });
  try {
    const data = await fetch(url);
    const response = await data.json();
    const curatedWeatherDetails = buildAppWeatherObject(response);
    setStateFunction(curatedWeatherDetails);
  } catch (error) {

  }
}

function buildAppWeatherObject(apiResponse) {
  const {
    name: city,
    sys: { country },
    clouds: { all: cloudCover },
    main: { temp },
    main: { feels_like: feelTemp },
    main: { humidity },
    wind: { speed: windSpeed },
  } = apiResponse;
  const windDirection = calcWindDirection(apiResponse.wind.deg);
  const sunrise = convertUnixToLocal(apiResponse.sys.sunrise, apiResponse.timezone)
  const sunset = convertUnixToLocal(apiResponse.sys.sunset, apiResponse.timezone)
  const conditions = apiResponse.weather.map(condition => condition.description);
  return {
    city,
    country,
    conditions,
    temp,
    feelTemp,
    windSpeed,
    windDirection,
    cloudCover,
    humidity,
    sunrise,
    sunset
  }
}

export { populateWeatherData }