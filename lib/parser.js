// import * as WORD_BANK from './word_bank.js';
import $ from 'jquery';

//jQuery regex selector by James Padolsey
// http://james.padolsey.com/javascript/regex-selector-for-jquery/
$.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ?
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

export function parse(string){
  return replaceKeywords(removeStopWords(string));
}

export function removeStopWords(string){
  let res = string
  for (var i = 0; i < WORD_BANK.stopWords.length; i++){
    res = res.split(WORD_BANK.stopWords[i]).join('');
  }
  res = res.replace(/\s{2,}/g, " ");
  return res;
}

export function replaceKeywords(string){
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

export function readFromTextArea(text){
  var uploadedResume = text;

  if (!uploadedResume || uploadedResume === ""){
    message('Error: No text found');
    return;
  }
  resume = parse(uploadedResume);
  chrome.storage.sync.set({'resume': resume}, () => {message('Resume saved')});
}

export function readFromWebPage(){
  var $jobDescriptions = $('div:regex(class,*(job|desc|summary)*),span:regex(class,*(job|desc|summary)*)');

  console.log($jobDescriptions);
  // res = res.replace(/\s{2,}/g, " ");
}

export function showLeadership(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.Leadership.length; i++){
    res = res.split(WORD_BANK.Leadership[i]).join('');
  }
  return res;
}
