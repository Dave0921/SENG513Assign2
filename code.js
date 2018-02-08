//
function getStats(txt) {
    // sets all word characters to lowercase characters
    let lowercasetxt = txt.toLowerCase();
    let nChars = txt.length;
    let nWords = 0;
    // finds length of an array split per new line; counts number of lines
    let nLines = (function findLines(text){
        let numLines = 0;
        if (text.length>0){
            numLines = text.split(/\r\n|\n|\r/).length;
        }
        return numLines;
    }(lowercasetxt));
    // finds maximum line length
    let maxLineLength = (function findMaxLineLength(text){
        let lineArray = text.split(/\r\n|\n|\r/);
        let maxLength = lineArray[0].length;
        for (i=1;i<lineArray.length;i++){
            if (lineArray[i].length>maxLength){
                maxLength = lineArray[i].length;
            }
        }
        return maxLength;
    }(lowercasetxt));
    // find number of non empty lines
    let nNonEmptyLines = (function findLines(text){
        let count = 0;
        let lineArray = text.split(/\r\n|\n|\r/);
        for (i=0;i<lineArray.length;i++){
            if (lineArray[i].replace(/\s/g,'').length){
                count++;
            }
        }
        return count;
    }(lowercasetxt));
    // creates array of words
    let wordArray = (function findWords(text){
        arrayofwords = text
        // replace special characters with whitespace
        .replace(/[`~!@#$%^&*()_—|+\-=?;:'",.<>\{\}\[\]\\\/]/g, ' ')
        // replace new lines, new tabs etc with whitespace
        .replace(/\r\n|\n|\t|\r/g, ' ')
        // replace curly quotation marks
        .replace(/[\u201C\u201D\u2018\u2019]/g,' ')
        // splits string in terms of whitespace
        .split(' ')
        // filters out whitespaces from array
        .filter(function(array) {
            return array != ''
        });
        return arrayofwords;
    }(lowercasetxt));
    nWords = wordArray.length;
    // calculates average word length from array of words
    let averageWordLength = (function findavgwordlength(warray){
        let sum = 0;
        let avg = 0;
        if (warray.length>0){
            for (i=0;i<warray.length;i++){
                sum = sum + warray[i].length;
            }
            avg = sum/warray.length;
        }
        return avg;
    }(wordArray));
    // finds palindromes in array of words
    palindromes = (function findpalindrome(warray){
        let paliArray = [];
        let isPalindrome = false;
        for (i=0;i<warray.length;i++){
            // word length must be greater than 2
            if (warray[i].length>2){
                for (j=0;j<(warray[i].length/2);j++){
                    if (warray[i][j]!==warray[i][warray[i].length-j-1]){
                        isPalindrome = false;
                        break;
                    }
                    isPalindrome = true;
                }
                if (isPalindrome === true){
                    paliArray.push(warray[i]);
                }
            }
        }
        return paliArray;
    }(wordArray));
    // remove duplicates from word array
    noDupWordArray = wordArray.filter(function(item, index, inputArray){
        return inputArray.indexOf(item) === index;
    });
    // finds 10 longest words in word array
    let longestWords = (function findLongest(warray){
        let longestArray = warray;
        longestArray.sort(function(a, b){
            // compare if word b is longer than word a and then compare if word a is greater than b alphabetically
            return b.length - a.length || (a > b ? 1 : -1);
        });
        if (longestArray.length>10) longestArray = longestArray.slice(0,10);
        return longestArray;
    }(noDupWordArray));
    // finds 10 most frequent words in word array
    let mostFrequentWords = (function findFrequent(warray){
        let dictionaryArray = {};
        let freqArray = [];
        // count frequency of words and store it into object
        for (let words of warray){
            if (dictionaryArray[words] === undefined) dictionaryArray[words] = 1;
            else dictionaryArray[words]++;
        }
        // sort object keys by most frequent word and alphabetically and store results, which are formated, into an array
        freqArray = Object.keys(dictionaryArray).map(function (key){
            return [key, this[key]]
        }, dictionaryArray).sort(function (a, b){
            return b[1] - a[1] || (a > b ? 1 : -1);
        }).map(function(word){
            return word[0] + '(' + word[1] + ')';
        });
        if (freqArray.length>10) freqArray = freqArray.slice(0,10);
        // console.log(freqArray);
        return freqArray;
    }(wordArray));
    return {
        nChars,
        nWords,
        nLines,
        nNonEmptyLines,
        averageWordLength,
        maxLineLength,
        palindromes,
        longestWords,
        mostFrequentWords
    };
}
