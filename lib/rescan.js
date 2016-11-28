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

  // resume = Parser.readFromTextArea(resume);

  chrome.storage.sync.get('resume', (_resume) => {
    resume = _resume;
  });

  document.getElementById("extract-description").addEventListener('click',getDescription);
});

const getDescription = () => {
  chrome.tabs.executeScript({file: "./lib/pullDescription.js"});
};
