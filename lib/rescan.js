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

var resume, title, jobDesc;

document.addEventListener("DOMContentLoaded", () => {
  //fetch stopwords from algorithmia which then get bound to window. Janky!
  getStopWords();

  //Pull existing resume
  chrome.storage.sync.get(null, (data) => {
    if (data.resume) {
      resume = data.resume;
      title = data.title;

      document.getElementById('upload-resume').innerHTML = "Upload New Resume";
      document.getElementById('extract-description').style.display = "inline-block";
      document.getElementById('resume-title').innerHTML = "Resume \'"+title+"\' loaded";
    }
  });

  //Parses job description from content script pullDescription, then renders to extension
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>{
    jobDesc = Parser.parse(message.description);
    WordMatcher.similarityScore(Parser.formatForSimilarityScore(resume,jobDesc));
    WordMatcher.fetchKeywords(Parser.formatForKeywords(resume,5), Parser.formatForKeywords(jobDesc,5));
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
  let button = document.getElementById('upload-resume');
  if (button.innerHTML !== "Submit"){
    document.getElementById('resume-box').style.display = "inline-block";
    document.getElementById('title-box').style.display = "inline-block";

    button.innerHTML = "Submit";
  } else {
    let resumeBox = document.getElementById('resume-box');
    let titleBox = document.getElementById('title-box');

    resume = Parser.readFromText(resumeBox.value, titleBox.value);
    clearTextBoxes(resumeBox, titleBox);
    clearSuggestions();

    button.innerHTML = "Upload New Resume";
  }
}

function clearTextBoxes(resumebox, titlebox){
  resumebox.value = "";
  titlebox.value = "";
  resumebox.style.display = "none";
  titlebox.style.display = "none";
}

function clearSuggestions(){
  document.getElementsByClassName('results-container')[0].style.display = "none";
  document.getElementsByClassName('suggestions-container')[0].style.display = "none";
  document.getElementsByClassName('keywords-container')[0].style.display = "none";
}
