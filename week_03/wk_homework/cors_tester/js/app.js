document.addEventListener('DOMContentLoaded',  () => {
  console.log("Loading...");

  const url = "https://restcountries.eu/rest/v2/all";

  getData()
    .then(data => console.log(data));

  function getData() {
    return fetch(url)
      .then((res) => res.json());
  }

});
