function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesCurrentTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  //Barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDate = barcelonaElement.querySelector(".date");
  let barcelonaTime = barcelonaElement.querySelector(".time");
  let barcelonaCurrentTime = moment().tz("Europe/Madrid");
  barcelonaDate.innerHTML = barcelonaCurrentTime.format("MMMM Do YYYY");
  barcelonaTime.innerHTML = barcelonaCurrentTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  //Shanghai
  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDate = shanghaiElement.querySelector(".date");
  let shanghaiTime = shanghaiElement.querySelector(".time");
  let shanghaiCurrentTime = moment().tz("Asia/Shanghai");
  shanghaiDate.innerHTML = shanghaiCurrentTime.format("MMMM Do YYYY");
  shanghaiTime.innerHTML = shanghaiCurrentTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/");
  if (cityName.length === 3) {
    cityName = cityTimeZone.replace("_", " ").split("/")[2];
  } else {
    cityName = cityTimeZone.replace("_", " ").split("/")[1];
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-time");
  citiesElement.innerHTML = `<div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm[<small>]A[</small>]"
            )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);
