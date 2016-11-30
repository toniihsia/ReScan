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
    return regex.test($(elem)[attr.method](attr.property));
};

//Pulls all HTML elements with classnames matching 'desc' or 'summary'
var matches = $(':regex(class,desc|summary)');
var rawDesc = [];
for (var i = 0; i < matches.length; i++) {
  rawDesc.push(matches[i].innerText);
}
rawDesc = rawDesc.join(' ');

//Passes the information from content script back to extension
chrome.runtime.sendMessage({description: rawDesc});
