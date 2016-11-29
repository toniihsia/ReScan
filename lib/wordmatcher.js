import * as WORD_BANK from './word_bank.js';

class wordMatcher {
    constructor() {

    }

    similarityScore(parsedInfo) {
      // parsedInfo should contain parsedResume & parsedJobDescription (JD) in this format:
      // { "files": [["parsedJD", "this is a parsed JD"], ["parsedResume", "this is a parsedResume"]] }
      const client = Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41");
      // let input = parsedInfo;
      // let input = { "files": [
      //   ["resume", "leadership leadership leadership"],
      //   ["job description", "teamwork teamwork leadership"]
      // ]};
      let similarityScore;
      Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41")
           .algo("algo://PetiteProgrammer/TextSimilarity/0.1.2")
           .pipe(input)
           .then(function(output) {
             similarityScore = output;
             console.log(output);
           });
            return Math.floor(scoreOutput.result[0][0] * 100).toString() + "%";
    }

    findKeywords(parsedInfo) {
      // parsedInfo should be in this format: [["this is a parsed resume", ""], 3]
      // you will use findKeywords twice -- once to find resume keywords, and once to find JD keywords
      const client = Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41");
      let keywords;
      let input = parsedInfo;
      Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41")
           .algo("algo://nlp/KeywordsForDocumentSet/0.1.7")
           .pipe(input)
           .then(function(output) {
             keywords = output;
             console.log(output);
           });
      keywords = keywords.result[0];
      let sortedKeywords = this.sortKeywords(keywords);
      return sortedKeywords;
      // returns an array of keywords that are sorted by how heavily weighted they are
    }

    sortKeywords(keywords) {
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

    suggestedKeywords(resumeKeywords, jdKeywords) {
      let suggestedKeywords = [];
      for (let i = 0; i < jdKeywords.length; i++) {
        if (!resumeKeywords.includes(jdKeywords[i])) {
          let _ = require('underscore');
          let jdLibName = jdKeywords[i].toUpperCase();
          let sampleOfKeywords = _.sample(jdLibName, 5);
          suggestedKeywords.push({ jdLibName: sampleOfKeywords });
        }
      }

      return suggestedKeywords;
      // return value should follow this format:
      // [ { LEADERSHIP: ["chaired", "executed", "headed", "operated", "organized"] },
      //   { INITIATIVE: ["administered", "built", "devised", "formulated", "implemented"] } ]
    }

}
