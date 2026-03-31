const urlSearch = window.location.search;
console.log(urlSearch);
console.log(window.location); // для себе роблю виводи

const newUrl = new URL("https://offer.com");
newUrl.search = urlSearch;
console.log(newUrl.toString());

const primaryUrlTxt = document.getElementById("primary-url");
const urlLocation = window.location.href;
primaryUrlTxt.textContent = urlLocation;

const generatedUrlTxt = document.getElementById("generated-url");
generatedUrlTxt.textContent = newUrl.toString();
const generatedUrlLink = document.getElementById("generated-link");
generatedUrlLink.href = newUrl.toString();
