const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "64dbc07fc8msh3c77495732761c7p1fb25ajsn3192623b2f74",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch(url + city, options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed06.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            console.log(response);
        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Biratnagar")

var otherWeather = (document.getElementById("otherCity").innerHTML);
switch(otherWeather){
    case "Janakpur":
    //console.log("Here i am")
    fetch(url + "Janakpur", options)
        .then(response => response.json())
        .then((response) => {

            jnk_cloud_pct.innerHTML = response.cloud_pct
            jnk_temp.innerHTML = response.temp
            jnk_feels_like.innerHTML = response.feels_like
            jnk_humidity.innerHTML = response.humidity
            jnk_min_temp.innerHTML = response.min_temp
            jnk_max_temp.innerHTML = response.max_temp
            jnk_wind_speed06.innerHTML = response.wind_speed
            jnk_wind_degrees.innerHTML = response.wind_degrees
            jnk_sunrise.innerHTML = response.sunrise
            jnk_sunset.innerHTML = response.sunset
            console.log("This is running")
        })
 case ("Pokhara"):
    console.log("Here i am")
    fetch(url + "Pokhara", options)
        .then(response => response.json())
        .then((response) => {

            pkr_cloud_pct.innerHTML = response.cloud_pct
            pkr_temp.innerHTML = response.temp
            pkr_feels_like.innerHTML = response.feels_like
            pkr_humidity.innerHTML = response.humidity
            pkr_min_temp.innerHTML = response.min_temp
            pkr_max_temp.innerHTML = response.max_temp
            pkr_wind_speed06.innerHTML = response.wind_speed
            pkr_wind_degrees.innerHTML = response.wind_degrees
            pkr_sunrise.innerHTML = response.sunrise
            pkr_sunset.innerHTML = response.sunset
            console.log("This is running")
        })
case (otherWeather == "Birendranagar"):
    console.log("Here i am")
    fetch(url + "Birendranagar", options)
        .then(response => response.json())
        .then((response) => {

            bir_cloud_pct.innerHTML = response.cloud_pct
            bir_temp.innerHTML = response.temp
            bir_feels_like.innerHTML = response.feels_like
            bir_humidity.innerHTML = response.humidity
            bir_min_temp.innerHTML = response.min_temp
            bir_max_temp.innerHTML = response.max_temp
            bir_wind_speed06.innerHTML = response.wind_speed
            bir_wind_degrees.innerHTML = response.wind_degrees
            bir_sunrise.innerHTML = response.sunrise
            bir_sunset.innerHTML = response.sunset
            console.log("This is running")
        })
case (otherWeather == "Bharatpur"):
    console.log("Here i am")
    fetch(url + "Bharatpur", options)
        .then(response => response.json())
        .then((response) => {

            bhr_cloud_pct.innerHTML = response.cloud_pct
            bhr_temp.innerHTML = response.temp
            bhr_feels_like.innerHTML = response.feels_like
            bhr_humidity.innerHTML = response.humidity
            bhr_min_temp.innerHTML = response.min_temp
            bhr_max_temp.innerHTML = response.max_temp
            bhr_wind_speed06.innerHTML = response.wind_speed
            bhr_wind_degrees.innerHTML = response.wind_degrees
            bhr_sunrise.innerHTML = response.sunrise
            bhr_sunset.innerHTML = response.sunset
            console.log("This is running")
        })
        default:
            console.log("Error occurred")
}
            console.log("Outer is running")