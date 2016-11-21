## ReScan

### Background


### Functionality & MVP

With this extension, users will be able to:

- [ ] Upload and parse a copy of their resume
- [ ] Parse a job application page for keywords
- [ ] Obtain a similarity percentage between the uploaded resume and the job application

### Wireframes


### Technologies & Technical Challenges

This extension will be implemented using the standard Chrome extension technology: Javascript, HTML, and CSS.  In addition to the `manifest.json` and `package.json` files, there will be two scripts:

- `parser.js` which will contain the logic for parsing documents
- `wordmatcher.js`which will contain the logic for term matching and frequency of key words.

The primary technical challenges will be:

- Parsing through both the uploaded resume and the job application page
- Determining weight and frequency of key words
- Matching the frequency of all key words to generate a single percentage

The uploaded resume and job application will be parsed while ignoring stop words. Once both documents parsed, each key word and several synonyms from the job application will be compared against the uploaded resume. The frequency of the keywords located within the job application will be compared with the matching keywords in the resume to result in a singular percentage number to denote similarity.

### Implementation Timeline

<!-- Day 1 left for example -->
<!-- just to be sure this isn't ingored -->
<!-- THIS IS JUST FOR EXAMPLE -->

**Day 1**: Get started on the infrastructure of the extension, following <a href="https://developer.chrome.com/extensions/getstarted">this guide</a> from Chrome.  By the end of the day, I will have:

- A completed `package.json`
- A completed `manifest.json`
- The ability to locate and alter a DOM element by class

**Day 2**:

-
-

**Day 3**:

-
-

**Day 4**:

-
-
