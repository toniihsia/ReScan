
import {readFromWebPage} from './parser.js';



document.addEventListener("DOMContentLoaded", () => {
  var resume = "";

  chrome.storage.sync.get('resume', (_resume) => {
    resume = _resume;
  });

  document.getElementById('extract-description-button').addEventListener('click', getDescriptions);
});

function getDescriptions() {
    chrome.tabs.executeScript({file: "./lib/pullDescription.js"});
}
