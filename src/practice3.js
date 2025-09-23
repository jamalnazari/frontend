import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";





function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  let Navigat=useNavigate()

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=9e721cddd7746e20512eb25aa1ee6303&units=metric"
    )
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("خطا در گرفتن دیتا:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>در حال بارگذاری...</h2>;
  if (!weather) return <h2>مشکلی در دریافت اطلاعات پیش اومده</h2>;

  return (

    <React.Fragment>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤 آب‌وهوای {weather.name}</h1>
      <h2>{weather.main.temp}°C</h2>
      <p>رطوبت: {weather.main.humidity}%</p>
      <p>وضعیت: {weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
    </div>
      <button onClick={()=>
         Navigat("/")}>بازگشت به خانه</button>
    </React.Fragment>
  );
}

export default App;


/*

function Api(){   
  const [name, setName] = useState("");       // ورودی کاربر
  const [result, setResult] = useState(null); // خروجی API

  const change = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then(res => setResult(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <input 
        placeholder='example: jamal' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={change}>fetch data</button>

      {result && (
        <div>
          <p>اسم: {result.name}</p>
          <p>سن تخمینی: {result.age}</p>
          <p>تعداد نمونه‌ها: {result.count}</p>
        </div>
      )}
    </div>
  );
}
export default Api

*/