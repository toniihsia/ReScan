import * as WORD_BANK from './word_bank.js';
import $ from 'jquery';


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

export function showLeadership(string){
  let res = string;
  for (var i = 0; i < WORD_BANK.Leadership.length; i++){
    res = res.split(WORD_BANK.Leadership[i]).join('');
  }
  return res;
}
