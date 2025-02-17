import { useState, useEffect } from 'react';
import './Clock.css';
import { WEATHER_API_KEY } from './config';

// Import assets
import clock from './assets/clock.svg';
import clockHand from './assets/clock-hand.svg';

import spring from './assets/spring.svg';
import summer from './assets/summer.svg';
import autumn from './assets/autumn.svg';
import winter from './assets/winter.svg';

import festival from './assets/festival.svg';
import rain from './assets/rain.svg';
import snow from './assets/snow.svg';
import wind_spring from './assets/wind_spring.svg';
import storm from './assets/storm.svg';
import sun from './assets/sun.svg';
import wedding_day from './assets/wedding_day.svg';
import wind_autumn from './assets/wind_autumn.svg';

interface Props {
  setIsNightTime: (isNightTime: boolean) => void;
}

const Clock: React.FC<Props> = ({ setIsNightTime }) => {
  const [date, setDate] = useState<Date>(new Date()); // Current date and time
  const [isNightTime, setIsNightTimeState] = useState<boolean>(false); // Night time between 12am - 6am

  // Update date every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Check if it's night time
  useEffect(() => {
    const hours = date.getHours();
    const isNight = hours >= 0 && hours < 6; // Night time between 12am - 6am
    setIsNightTime(isNight);
    setIsNightTimeState(isNight);
  }, [date, setIsNightTime]);

  // Format date and time
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const formattedDate: string = `${days[date.getDay()]}. ${date.getDate()}`;

  // Format time
  const formattedTime: string = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const shakeClass = isNightTime ? 'shake' : ''; // Shake effect at night

  // Determine season
  const month: number = date.getMonth();
  let season: string;
  if (month >= 2 && month <= 4) {
    season = spring;
  } else if (month >= 5 && month <= 7) {
    season = summer;
  } else if (month >= 8 && month <= 10) {
    season = autumn;
  } else {
    season = winter;
  }

  const [weatherCode, setWeatherCode] = useState<number | null>(null); // Weather code
  const [weatherText, setWeatherText] = useState<string | null>(null); // Weather text

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = () => {
      fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=auto:ip`)
        .then(response => response.json())
        .then(data => {
          setWeatherCode(data.current.condition.code);
          setWeatherText(data.current.condition.text);
        })
        .catch(error => console.error('Error fetching weather:', error));
    };
    
    fetchWeather();
    const timer = setInterval(fetchWeather, 3600000);

    return () => clearInterval(timer);
  }, []);

  // Determine weather
  let weather: string;
  const weatherRain: number[] = [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1273, 1276];
  const weatherSnow: number[] = [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264, 1279, 1282];
  const weatherWind: number[] = [1030, 1135, 1147];
  const weatherStorm: number[] = [1087, 1273, 1276, 1279, 1282];
  const weatherSun: number[] = [1000, 1003, 1006, 1009];

  // Weather icons
  if (weatherCode !== null) {
    if (weatherRain.includes(weatherCode)) {
      weather = rain;
    } else if (weatherSnow.includes(weatherCode)) {
      weather = snow;
    } else if (weatherWind.includes(weatherCode)) {
      weather = (season === spring || season === summer) ? wind_spring : wind_autumn;
    } else if (weatherStorm.includes(weatherCode)) {
      weather = storm;
    } else if (weatherSun.includes(weatherCode)) {
      weather = sun;
    } else {
      weather = sun;
    }
  } else {
    weather = sun;
  }

  // Determine clock hand rotation
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let rotation: number;

  const normalizedHours = hours < 6 ? hours + 24 : hours;

  if (normalizedHours >= 6 && normalizedHours < 26) {
    const totalSeconds = (normalizedHours - 6) * 3600 + minutes * 60 + seconds;
    rotation = -180 + (totalSeconds / 72000) * 180;
  } else {
    rotation = 0;
  }


  // Streak counter
  let streak: number = 88888888;
  let streakArray: string[] = streak.toString().split('');
  const streakComponent = streakArray.map((digit, index) => (
    <span key={index}>{digit}</span>
  ))

  return (
    <div className='Clock prevent-select'>
      <img className='season' src={season} alt="Season" />
      <img className='weather' src={weather} alt="Weather" />
      <img src={clock} alt="Clock" />
      <p className='date'>{formattedDate}</p>
      <p className={`time ${shakeClass}`} style={{ color: isNightTime ? 'red' : 'inherit' }}>{formattedTime}</p>
      <div className='streak'>
        {streakComponent}
      </div>
      <img className='clock-hand' src={clockHand} alt="Clock Hand" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 1s linear' }} />
    </div>
  )
}

export default Clock;
