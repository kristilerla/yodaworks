

function showSelectedCity(event) {
        if (event.target.value.length > 0) {
          if (event.target.value === "paris") {
            alert(`${moment()
  .tz("Europe/Paris").format("dddd, MMMM D, YYYY HH:mm")}`)
          }
          if (event.target.value === "tokyo") {
            alert(`${moment()
  .tz("Asia/Tokyo").format("dddd, MMMM D, YYYY HH:mm")}`)
          }
          if (event.target.value === "sydney") {
           alert(`${moment()
  .tz("Australia/Sydney").format("dddd, MMMM D, YYYY HH:mm")}`)
          }
          if (event.target.value === "oslo") {
            alert(`${moment()
  .tz("Europe/Oslo").format("dddd, MMMM D, YYYY HH:mm")}`)
          }
        }
      }

      let countriesSelect = document.querySelector("#countries");
      countriesSelect.addEventListener("change", showSelectedCity);