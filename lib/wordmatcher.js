import {
  LEADERSHIP,
  INITIATIVE,
  OPTIMIZATION,
  CUSTOMER_SERVICE,
  TEAM_ORIENTED,
  RESEARCH_ORIENTED,
  ACHIEVEMENT,
  COMMUNICATION } from './word_bank.js';

export function similarityScore(parsedInfo, modifierCallback) {
  // parsedInfo should contain parsedResume & parsedJobDescription (JD) in this format:
  // { "files": [["parsedJD", "this is a parsed JD"], ["parsedResume", "this is a parsedResume"]] }
  Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41")
       .algo("algo://PetiteProgrammer/TextSimilarity/0.1.2")
       .pipe(parsedInfo)
       .then(function(output) {
         console.log(output);
         modifierCallback(Math.floor(output.result[0][0] * 100))
       });
}

function modifyResultsPercentage(percentage) {
  document.getElementById('results-percentage').innerHTML = `Your resume has a similarity match of ${percentage}%!`
}

export function findKeywords(parsedInfo, modifierCallback, divId) {
  // parsedInfo should be in this format: [["this is a parsed resume", ""], 3]
  // you will use findKeywords twice -- once to find resume keywords, and once to find JD keywords
  const client = Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41");
  let keywords;
  let input = parsedInfo;
  // let input = [["this is a wow wow wow is hello this this this", ""], 3]
  Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41")
       .algo("algo://nlp/KeywordsForDocumentSet/0.1.7")
       .pipe(input)
       .then(function(output) {
         sortedKeywords = sortKeywords(output.result[0])
         modifierCallback(sortedKeywords, divId);
       });
}

function sortKeywords(keywords) {
  // keywords come in the form of an object { "word1": 0.182, "word2": 0.871 }
  let keywordsArray = [];
  for (var keyword in keywords)
  keywordsArray.push([keyword, keywords[keyword]]);

  keywordsArray.sort(function(a, b) {
    return a[1] - b[1];
  });

  let sortedKeywords = [];
  for (let i = 0; i < keywordsArray.length; i++) {
    sortedKeywords.push(keywordsArray[i][0]);
  }

  return sortedKeywords;
}

function modifyKeywords(keywords, divId) {
  let keywordsString = "";
  if (keywords.length == 1) {
    keywordsString = keywords[0]
  } else if (keywords.length == 2) {
    keywordsString = `${keywords[0]} and ${keywords[1]}`
  } else {
    for (let i = 0; i < keywords.length; i++) {
      if (i < keywords.length - 1) {
        keywordsString += `${keywords[i]}, `
      } else {
        keywordsString += `and ${keywords[i]}`
      }
    }
  }

  let keywordPossesser;
  let preposition;
  if (divId === 'resume-keywords') {
    preposition = "Your";
    keywordPosesser = "resume";
  } else {
    preposition = "The";
    keywordPosesser = "job description";
  }

  document.getElementById(`${divId}`).innerHTML = `${preposition} ${keywordPosesser}'s keywords are ${keywordsString}.`;
}

export function suggestedKeywords(resumeKeywords, jdKeywords) {
  let suggestedKeywords = [];
  for (let i = 0; i < jdKeywords.length; i++) {
    if (!resumeKeywords.includes(jdKeywords[i])) {
      suggestedKeywords.push(findSuggestions(jdKeywords[i]));
    } else {
      suggestedKeywords.push(["You are already using similar", "identical", "or synonymous terms!"]);
    }
  }

  document.getElementById('suggestion-1').innerHTML = `${suggestedKeywords[0][0]}, ${suggestedKeywords[0][1]}, ${suggestedKeywords[0][2]}`
  document.getElementById('suggestion-2').innerHTML = `${suggestedKeywords[1][0]}, ${suggestedKeywords[1][1]}, ${suggestedKeywords[1][2]}`
  document.getElementById('suggestion-3').innerHTML = `${suggestedKeywords[2][0]}, ${suggestedKeywords[2][1]}, ${suggestedKeywords[2][2]}`
}

function findSuggestions(jdKeyword) {
  debugger
  let randomIdx = randomInt(1, 10);
  switch(jdKeyword) {
    case jdKeyword === LEADERSHIP[0]:
      return LEADERSHIP.slice(randomInt, randomInt + 3);
    case jdKeyword === INITIATIVE[0]:
      return INITIATIVE.slice(randomInt, randomInt + 3);
    case jdKeyword === OPTIMIZATION[0]:
      return OPTIMIZATION.slice(randomInt, randomInt + 3);
    case jdKeyword === CUSTOMER_SERVICE[0]:
      return CUSTOMER_SERVICE.slice(randomInt, randomInt + 3);
    case TEAM_ORIENTED[0]:
      return TEAM_ORIENTED.slice(randomIdx, randomIdx + 3);
    case jdKeyword === RESEARCH_ORIENTED[0]:
      return RESEARCH_ORIENTED.slice(randomInt, randomInt + 3);
    case jdKeyword === ACHIEVEMENT[0]:
      return ACHIEVEMENT.slice(randomInt, randomInt + 3);
    case jdKeyword === COMMUNICATION[0]:
      return COMMUNICATION.slice(randomInt, randomInt + 3);
    default:
      return ["Try using similar", "identical", "or synonymous terms."]
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min + 1 ) + min);
}
