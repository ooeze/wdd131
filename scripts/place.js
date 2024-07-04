document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;
});

const temperature = 5; // °C
const windSpeed = 10; // km/h

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(2);
}

function displayWindChill() {
    const weatherSection = document.querySelector(".weather");
    const windChillElement = document.createElement("p");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `Wind Chill: ${windChill} °C`;
    } else {
        windChillElement.textContent = "Wind Chill: N/A";
    }

    weatherSection.appendChild(windChillElement);
}

document.addEventListener("DOMContentLoaded", () => {
    displayWindChill();
});