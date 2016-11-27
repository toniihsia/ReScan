const client = Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41");

export const Leadership = {};
export const Creativity = {};
export const Initiative = {};
export const CustomerService = {};
export const TeamOriented = {};
export const ResearchOriented = {};
export const Achievement = {};
export const Communication = {};
export const Supportive = {};

var input = [];
const StopWords = Algorithmia.client("simPLf9TKXxaXZv9PqOjId1TBf71")
           .algo("algo://nlp/RetrieveStopWords/0.1.1")
           .pipe(input)
           .then(function(output) {
             console.log(output);
           });
