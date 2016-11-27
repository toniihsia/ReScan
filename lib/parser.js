// import * as WORD_BANK from './word_bank.js';

class Parser{
  parse(string){
    return replaceKeywords(removeStopWords(string));
  }

  removeStopWords(string){
    let res = string
    for (var i = 0; i < WORD_BANK.stopWords.length; i++){
      res = res.split(WORD_BANK.stopWords[i]).join('');
    }
    res = res.replace(/\s{2,}/g, " ");
  }

  replaceKeywords(string){
    let res = string;
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
  }

  readFromTextArea(text){
    var uploadedResume = text;

    if (!uploadedResume || uploadedResume === ""){
      message('Error: No text found');
      return;
    }
    resume = parse(uploadedResume);
    chrome.storage.sync.set({'resume': resume}, () => {message('Resume saved')});
  }

  readFromWebPage(){
    // var $jobDescriptions = $(:regex(class,""));

    // res = res.replace(/\s{2,}/g, " ");
  }

  showLeadership(string){
    let res = string;
    for (var i = 0; i < WORD_BANK.leadership.length; i++){
      res = res.split(WORD_BANK.leadership[i]).join('');
    }
    return res;
  }

}

export default Parser;
