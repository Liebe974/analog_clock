const container = document.querySelector(".container");
const searchBox = document.querySelector(".search-box");
const inputRange = document.querySelector("#number");
const inputSpan = document.querySelector("#value");
const btns = document.querySelectorAll(".btn button");
let countries = [];

async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    countries = await response.json();
    displayCountries();
  } catch (error) {
    console.log(error);
  }
}
    //traduire le nom du pays en français

function displayCountries() {
  countries = data;
  countries.map((country) => {
    container.innerHTML += ` 
    <div class="country">
    <div class="flag">
    <img src="${country.flags.png}" alt="${country.name.common}">
    </div>
    <div class="country-info">
    <h2 class="country-name">${country.translations.fra.common}</h2>
    <h3 class="country-capital">Capital: ${country.capital}</h3>
    <h3 class="country-population">Population: ${country.population}</h3>
    </div>
    `;
  });
}

searchBox.addEventListener("input", (e) => {
  const value = e.target.value;
  container.innerHTML = "";
  countries.forEach((country) => {
    if (country.translations.fra.common.toLowerCase().includes(value.toLowerCase())) {
      container.innerHTML += ` 
      <div class="country">
      <div class="flag">
      <img src="${country.flags.png}" alt="${country.name.common}">
      </div>
      <div class="country-info">
      <h2 class="country-name">${country.translations.fra.common}</h2>
      <h3 class="country-capital">Capital: ${country.capital}</h3>
      <h3 class="country-population">Population: ${country.population}</h3
      </div>
      `;
  }
});
})

//Gérer le nombre de pays afficher avec l'input range. Avant le map, vous pouvez utiliser le fonction slice(0, valeurSouhaitée)
inputRange.addEventListener("input", (e) => {
  const value = e.target.value;
  inputSpan.innerHTML = value;
  container.innerHTML = "";
  countries.slice(0, value).forEach((country) => {
    container.innerHTML += ` 
    <div class="country">
    <div class="flag">
    <img src="${country.flags.png}" alt="${country.name.common}">
    </div>
    <div class="country-info">
    <h2 class="country-name">${country.translations.fra.common}</h2>
    <h3 class="country-capital">Capital: ${country.capital}</h3>
    <h3 class="country-population">Population: ${country.population}</h
    `;
  });
})

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    if (value === "Croissant") {
      const sortedCountries = countries.sort((a, b) => {
        return a.population - b.population;
      });
      container.innerHTML = "";
      sortedCountries.forEach((country) => {
        container.innerHTML += ` 
        <div class="country">
        <div class="flag">
        <img src="${country.flags.png}" alt="${country.name.common}">
        </div>
        <div class="country-info">
        <h2 class="country-name">${country.translations.fra.common}</h2>
        <h3 class="country-capital">Capital: ${country.capital}</h3>
        <h3 class="country-population">Population: ${country.population}</h3>
        `;
      });
    } else if (value === "Décroissant") {
      const sortedCountries = countries.sort((a, b) => {
        return b.population - a.population;
      });
      container.innerHTML = "";
      sortedCountries.forEach((country) => {
        container.innerHTML += ` 
        <div class="country">
        <div class="flag">
        <img src="${country.flags.png}" alt="${country.name.common}">
        </div>
        <div class="country-info">
        <h2 class="country-name">${country.translations.fra.common}</h2>
        <h3 class="country-capital">Capital: ${country.capital}</h3>
        <h3 class="country-population">Population: ${country.population}</h3>
        `;
      });
    } else if (value === "Alphabétique") {
      const sortedCountries = countries.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
      container.innerHTML = "";
      sortedCountries.forEach((country) => {
        container.innerHTML += ` 
        <div class="country">
        <div class="flag">
        <img src="${country.flags.png}" alt="${country.name.common}">
        </div>
        <div class="country-info">
        <h2 class="country-name">${country.translations.fra.common}</h2>
        <h3 class="country-capital">Capital: ${country.capital}</h3>
        <h3 class="country-population">Population: ${country.population}</h3>
        `;
      });
    }
  });
});

fetchCountries();
