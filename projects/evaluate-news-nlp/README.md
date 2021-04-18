# Articles Analyzer

Articles Analyzer is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites and classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is postive, neutral, or negative in tone.

## Get Up and Running
Clone the branch down to your computer:
```git clone https://github.com/AmrHosam/fend.git```
cd into /projects/evaluate-news-nlp/ and run:
- ```npm install``
- ```npm run build-dev``` to start the webpack dev server
- ```npm run build-prod``` to generate a dist folder for prod
- ```npm start``` to run the Express server on port 8080
- open [localhost](http://localhost:8080/) on port 8080 in your browser
- Type your article url in the input field and click submit

## Testing
We use Jest, a framework for testing javascript projeces, to test the functionality of each function defined in src/client/js. the testcases will check if the functions are behaving expectedly when provided an input.
Jest can be run by runnung the following command ```npm run test```.
