import { FaWind, FaCloudSun } from 'react-icons/fa';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';
import { GiClothes } from 'react-icons/gi';
import { SiSnowflake } from 'react-icons/si';

const CityResult = ({ cityWeather, weatherSelection }) => {

  const {
    temperatureSelected,
    cloudSelected,
    windSelected,
    humiditySelected,
    twilightSelected
  } = weatherSelection

  const {
    city,
    country,
    conditions,
    temp,
    feelTemp,
    windSpeed,
    windDirection,
    cloudCover,
    humidityPerc,
    sunrise,
    sunset
  } = cityWeather

  return (
    <div>
      <h3>{city}, {country}</h3>
      {
        // using condition as the key here because it will never be repeated within a given array
        conditions.map(condition => <p key={condition}>{condition}</p>)
      }
      <ul>
        {
          !temperatureSelected ? null : (
            <>
              <li> <SiSnowflake className='weather-icon' />Temperature <span className="result-value">{temp}°C</span>
              </li>
              <li><GiClothes className='weather-icon' />Feels like <span className="result-value">{feelTemp}°C</span></li>
            </>
          )
        }
        {
          !windSelected ? null : (
            <li><FaWind className='weather-icon' />Wind <span className="result-value">{windDirection} {windSpeed} m/s</span></li>
          )
        }
        {
          !humiditySelected ? null : (
            <li><WiHumidity className='weather-icon' />Humidity <span className="result-value">{humidityPerc}%</span></li>
          )
        }
        {
          !cloudSelected ? null : (
            <li><FaCloudSun className='weather-icon' />Cloud Cover <span className="result-value">{cloudCover}%</span></li>
          )
        }
        {
          !twilightSelected ? null : (
            <>
              <li><FiSunrise className='weather-icon' />Sunrise <span className="result-value">{sunrise}</span></li>
              <li><FiSunset className='weather-icon' />Sunset <span className='result-value'>{sunset}</span></li>
            </>
          )
        }
      </ul>
    </div>
  )
}

export default CityResult;