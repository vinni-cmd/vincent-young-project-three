const Comparison = ({ userWeather, neighborWeather, weatherSelection }) => {
  const {
    temperatureSelected,
    cloudSelected,
    windSelected,
    humiditySelected,
    twilightSelected
  } = weatherSelection

  const comparison = calcDiff(userWeather, neighborWeather);

  function calcDiff(weatherObj1, weatherObj2) {
    const diffObj = {};
    for (let prop in weatherObj2) {
      if (typeof (weatherObj2[prop]) === "number") {
        diffObj[prop] = weatherObj2[prop] - weatherObj1[prop];
      }
    }
    return diffObj;
  }

  return (
    <div className="comparison">
      <h3>Comparison</h3>
      <ul>
        {
          !temperatureSelected ? null : (
            <>
              <li>Your neighbor is {Math.round(Math.abs(comparison.temp) * 100) / 100}°C {
                (comparison.temp) > 0 ? 'warmer' : 'colder'
              }</li>
              <li>Your neighbor feels {Math.round(Math.abs(comparison.feelTemp) * 100) / 100}°C {
                (comparison.feelTemp) > 0 ? 'warmer' : 'colder'
              }</li>
            </>
          )
        }
        {
          !windSelected ? null : (
            <li>Your neighbor's city is {comparison.windSpeed > 0 ? 'more' : comparison.windSpeed < 0 ? 'less' : 'just as'} windy</li>
          )
        }
        {
          !humiditySelected ? null : (
            <li>Your neighbor is {Math.abs(comparison.humidityPerc)}% {comparison.humidityPerc > 0 ? 'more likely' : 'less likely'} to work up a sweat*</li>
          )
        }
        {
          !cloudSelected ? null : (
            <li>Your neighbor is having a {comparison.cloudCover > 10 ? 'more' : comparison.cloudCover < -10 ? 'less' : 'similarly'} cloudy day</li>
          )
        }
        {
          !twilightSelected ? null : (
            <li>Your neighbor's gets {comparison.daylightInMin === 0 ? 'the same amount of' : `${Math.abs(comparison.daylightInMin)} minutes`} {comparison.daylightInMin > 0 ? 'more' : 'less'} daylight</li>
          )
        }
      </ul>
    </div>
  )
}

export default Comparison