import $ from 'jquery';
import Parser from './parser.js';

document.addEventListener("DOMContentLoaded", () => {
  var resume = "";

  chrome.storage.sync.get('resume', (_resume) => {
    resume = _resume;
  });

  var but = document.getElementById('extract-description');
  but.addEventListener('click', Parser.readFromWebPage());
});
