import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Default place",
            feelsLike:24.5,
            temp:25.05,
            tempMin:23,
            tempMax:27,
            humidity:47,
            weather:"haze"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);

    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}