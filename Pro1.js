function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("loginError").innerText = "Please enter username and password!";
        return;
    }

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginPage").classList.remove("active");
        document.getElementById("dashboard").classList.add("active");
    } else {
        document.getElementById("loginError").innerText = "Invalid Login!";
    }
}

function logout() {
    document.getElementById("dashboard").classList.remove("active");
    document.getElementById("loginPage").classList.add("active");
}

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Enter a city name!");
        return;
    }

    const apiKey = "3f98b245c92121607383877411a29565";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + " °C";
        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + " %";
        document.getElementById("pressure").innerText = "Pressure: " + data.main.pressure + " hPa";
        document.getElementById("wind").innerText = "Wind Direction: " + data.wind.deg + "°";

    } catch (error) {
        alert("Error fetching weather data!");
        console.error(error);
    }
}