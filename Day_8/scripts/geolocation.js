const locateEl = document.getElementById("locate");

locateEl.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
  })
});
