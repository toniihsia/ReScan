// PSEUDO-CODE //
// Step 1. Parse resume; save parsed resume in variable.
// Step 2. Parse job-description; save parsed job-description in variable;
// Step 3. Analyze similarity between parsed resume and parsed job-description.
//         Should produce a percentage score.
// Step 5. Analyze which qualities are emphasized by parsed resume.
// Step 6. Analyze which qualities are emphasized by parsed job-description.
// Step 7. Produce resume suggestions based on job-description's quality emphases.

import $ from 'jquery';
import * as Parser from './parser.js';

document.addEventListener("DOMContentLoaded", () => {
  var jobDesc;

  //////////////////////////////////
  jobDesc = "chaired new flavor of cheese, administered and launched some consolidated stuff while being educated and fostered";
  console.log(jobDesc);
  console.log(Parser.parse(jobDesc));
  console.log(Parser.parseToKeywords(Parser.parse(jobDesc)));
  //////////////////////////////////

  chrome.storage.sync.get('resume', (_resume) => {
    resume = _resume;
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>{
    jobDesc = Parser.parse(message.description);
    console.log(jobDesc);
  });

  document.getElementById("extract-description").addEventListener('click',getDescription);
});

const getDescription = () => {
  chrome.tabs.executeScript({file:"./lib/jquery-3.1.1.min.js"}, () => {
    chrome.tabs.executeScript({file: "./lib/pullDescription.js"});
  });
};
