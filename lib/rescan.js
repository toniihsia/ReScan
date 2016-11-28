// PSEUDO-CODE //
// Step 1. Parse resume; save parsed resume in variable.
// Step 2. Parse job-description; save parsed job-description in variable;
// Step 3. Analyze similarity between parsed resume and parsed job-description.
//         Should produce a percentage score.
// Step 5. Analyze which qualities are emphasized by parsed resume.
// Step 6. Analyze which qualities are emphasized by parsed job-description.
// Step 7. Produce resume suggestions based on job-description's quality emphases.

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

document.addEventListener("DOMContentLoaded", () => {
  var resume = "";

  chrome.storage.sync.get('resume', (_resume) => {
    resume = _resume;
  });

  document.getElementById("extract-description").addEventListener('click',getDescription);
});

function getDescription(){
  chrome.tabs.executeScript({file: "./lib/pullDescription.js"});
}
