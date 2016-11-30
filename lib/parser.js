import * as WORD_BANK from './word_bank.js';

export function formatForKeywords(rawText){
  return [[rawText], 3];
}

export function formatForKeywordsStripped(rawText){
  return [[parseToKeywords(rawText)], 3];
}

export function formatForSimilarityScore(resume,desc){
  return {file: [["parsedJD", desc],["parsedResume", resume]]};
}

export function readFromText(text){
  var uploadedResume = text;

  if (!uploadedResume || uploadedResume === ""){
    alert('Error: No text found');
    return;
  }
  let resume = parse(uploadedResume);
  chrome.storage.sync.set({'resume': resume}, () => {console.log('Resume saved')});
  return resume;
}

export function parse(string){
  return replaceKeywords(removeStopWords(string));
}

export function parseToKeywords(string){
  let res = string.split(" ");
  for (var i = 0; i < res.length; i++) {
    if (!WORD_BANK.KEYWORDS.includes(res[i])) {
      delete res[i];
    }
  }

  return res.join(" ").replace(/\s+/g, " ");
}

function removeStopWords(string){
  let res = string.toLowerCase().replace(/[^\w\s]|_/g, "");
  // let stopwords = WORD_BANK.STOP_WORDS;
  // for (var i = 0; i < stopwords.length; i++){
  //   res = res.split(stopwords[i]).join('');
  // }
  res = res.replace(/\s+/g, " ");
  return res;
}

function replaceKeywords(string){
  let res = showOptimization(showInitiative(showLeadership(string)));
  res = showResearchOriented(showTeamOriented(showCustomerService(res)));
  res = showCommunication(showAchievement(res));

  return res;
}


function showLeadership(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.LEADERSHIP.length; i++){
    res = res.split(WORD_BANK.LEADERSHIP[i]).join('leadership');
  }
  return res;
}
function showInitiative(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.INITIATIVE.length; i++){
    res = res.split(WORD_BANK.INITIATIVE[i]).join('initiative');
  }
  return res;
}
function showOptimization(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.OPTIMIZATION.length; i++){
    res = res.split(WORD_BANK.OPTIMIZATION[i]).join('optimization');
  }
  return res;
}
function showCustomerService(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.CUSTOMER_SERVICE.length; i++){
    res = res.split(WORD_BANK.CUSTOMER_SERVICE[i]).join('customer service');
  }
  return res;
}
function showTeamOriented(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.TEAM_ORIENTED.length; i++){
    res = res.split(WORD_BANK.TEAM_ORIENTED[i]).join('team oriented');
  }
  return res;
}
function showResearchOriented(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.RESEARCH_ORIENTED.length; i++){
    res = res.split(WORD_BANK.RESEARCH_ORIENTED[i]).join('research oriented');
  }
  return res;
}
function showAchievement(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.ACHIEVEMENT.length; i++){
    res = res.split(WORD_BANK.ACHIEVEMENT[i]).join('achievement');
  }
  return res;
}
function showCommunication(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.COMMUNICATION.length; i++){
    res = res.split(WORD_BANK.COMMUNICATION[i]).join('communication');
  }
  return res;
}
