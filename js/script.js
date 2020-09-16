import { url } from "./api/url.js";
import { createHtml } from "./components/createHtml.js";
import { resultContainer } from "./constants/resultContainer.js";
import { displayMessage } from "./components/displayMessage.js";

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    createHtml(json.data);
  } catch (error) {
    console.log(error);
    resultContainer.innerHTML = displayMessage("error", error);
  }
}

callApi();
