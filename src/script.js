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
}
updateTime();
setInterval(updateTime, 1000);
