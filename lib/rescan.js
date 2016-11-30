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
import * as WordBank from './word_bank.js';

var resume, jobDesc;

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get('resume', (_resume) => {
    resume = _resume.resume;
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>{
    jobDesc = Parser.parse(message.description);
    //WordBank.analyze(jobDesc);
  });

  document.getElementById("extract-description").addEventListener('click',getDescription);
  document.getElementById("upload-resume").addEventListener('click', createResumeBox);
});

const getDescription = () => {
  chrome.tabs.executeScript({file:"./lib/jquery-3.1.1.min.js"}, () => {
    chrome.tabs.executeScript({file: "./lib/pullDescription.js"});
  });
};

const createResumeBox = () => {
  var button = document.getElementById('upload-resume');
  if (button.innerHTML === "Upload Resume"){
    document.getElementById('resume-box').style.display = "block";
    button.innerHTML = "Submit";
  } else {
    var box = document.getElementById('resume-box');
    resume = Parser.readFromText(box.value);
    box.value = "";
    box.style.display = "none";
    button.innerHTML = "Upload Resume";
  }
};
