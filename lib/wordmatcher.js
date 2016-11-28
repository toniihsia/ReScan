class wordMatcher {
    constructor() {

    }

    similarityScore(parsedInfo) {
      // parsedInfo should contain parsedResume & parsedJobDescription (JD) in this format:
      // { "files": [["parsedJD", "this is a parsed JD"], ["parsedResume", "this is a parsedResume"]] }
      const client = Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41");
      let input = parsedInfo;
      let similarityScore;
      Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41")
           .algo("algo://PetiteProgrammer/TextSimilarity/0.1.2")
           .pipe(input)
           .then(function(output) {
             similarityScore = output;
             console.log(output);
           });
      return Math.floor(similarityScore.result[0][0] * 100).toString() + "%";
    }

    resumeKeywords(parsedResume) {
      // parsedResume should be in this format: [["this is a parsed resume", ""], 3]
      const client = Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41");
      let resumeKeywords;
      let input = parsedResume;
      Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41")
           .algo("algo://nlp/KeywordsForDocumentSet/0.1.7")
           .pipe(input)
           .then(function(output) {
             resumeKeywords = output;
             console.log(output);
           });
      resumeKeywords = resumeKeywords.result[0];
      // these resumeKeywords are unsorted
    }



}
