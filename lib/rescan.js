// PSEUDO-CODE //
// Step 1. Parse resume; save parsed resume in variable.
// Step 2. Parse job-description; save parsed job-description in variable;
// Step 3. Analyze similarity between parsed resume and parsed job-description.
//         Should produce a percentage score.
// Step 5. Analyze which qualities are emphasized by parsed resume.
// Step 6. Analyze which qualities are emphasized by parsed job-description.
// Step 7. Produce resume suggestions based on job-description's quality emphases.

import * as Parser from './parser.js';
import * as WordMatcher from './wordmatcher.js';
import {getStopWords} from './word_bank.js';

var resume, jobDesc;

document.addEventListener("DOMContentLoaded", () => {
  //fetch stopwords from algorithmia which then get bound to window. Janky!
  getStopWords();

  //Pull existing resume
  chrome.storage.sync.get('resume', (_resume) => {
    resume = _resume.resume;
  });

  //Parses job description from content script pullDescription, then renders to extension
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>{
    jobDesc = Parser.parse(message.description);
    console.log(Parser.formatForKeywords(jobDesc));
    WordMatcher.similarityScore(Parser.formatForSimilarityScore(resume,jobDesc));
    WordMatcher.fetchKeywords(Parser.formatForKeywords(resume), Parser.formatForKeywords(jobDesc));
    // WordMatcher.findKeywords(Parser.formatForKeywords(resume),"resume-keywords");
    // WordMatcher.findKeywords(Parser.formatForKeywords(jobDesc),"jd-keywords");
    // WordMatcher.suggestedKeywords(window.resumeKeywords,window.jobKeywords);
  });

  //Adds description extractor
  document.getElementById("extract-description").addEventListener('click',getDescription);
  document.getElementById("upload-resume").addEventListener('click', createResumeBox);
});

//content scripts - load jquery then run pullDescription
function getDescription() {
  chrome.tabs.executeScript({file:"./lib/jquery-3.1.1.min.js"}, () => {
    chrome.tabs.executeScript({file: "./lib/pullDescription.js"});
  });
}

//Toggles and handles resume upload box
function createResumeBox() {
  var button = document.getElementById('upload-resume');
  if (button.innerHTML === "Upload Resume"){
    document.getElementById('resume-box').style.display = "inline-block";
    button.innerHTML = "Submit";
    document.getElementsByClassName('results-container')[0].style.display = "none";
    document.getElementsByClassName('suggestions-container')[0].style.display = "none";

  } else {
    var box = document.getElementById('resume-box');
    resume = Parser.readFromText(box.value);
    box.value = "";
    box.style.display = "none";
    button.innerHTML = "Upload Resume";
    document.getElementsByClassName('results-container')[0].style.display = "none";
    document.getElementsByClassName('suggestions-container')[0].style.display = "none";
  }
}
