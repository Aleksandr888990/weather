const city = prompt("Enter your city");

let showCity = document.querySelector(".cities");
showCity.innerHTML = city;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let myDescription = data.weather[0].description;
    let mainDescription = document.querySelector(".description");
    mainDescription.innerHTML = myDescription;
    let myTemperature = Math.round(data.main.temp);
    let mainTemperature = document.querySelector(".temp");
    mainTemperature.innerHTML = myTemperature;
    let myIcon = data.weather[0].icon;
    let mainIcon = document.querySelector("img");
    mainIcon.setAttribute("src", `https://openweathermap.org/img/w/${myIcon}.png`);
    let myWind = data.wind.speed;
    let mainWind = document.querySelector(".wind");
    mainWind.innerHTML = myWind;
    let myHumidity = data.main.humidity;
    let mainHumidity = document.querySelector(".humidity");
    mainHumidity.innerHTML = myHumidity;    
  });
