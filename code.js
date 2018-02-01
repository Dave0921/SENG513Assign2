//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    let nChars = txt.length;
    let nWords = 0;
    // finds length of an array split per new line; counts number of lines
    let nLines = (function findLines(text){
        let numLines = 0;
        if (text.length>0){
            numLines = text.split(/\r\n|\n|\r/).length;
        }
        return numLines;
    }(txt));
    // finds maximum line length
    let maxLineLength = (function findMaxLineLength(text){
        let lineArray = text.split(/\r\n|\n|\r/);
        let maxLength = lineArray[0].length;
        console.log(lineArray);
        for (i=0;i<(lineArray.length-1);i++){
            for (j=(i+1);j<lineArray.length;j++){
                if (lineArray[j].length>lineArray[i].length){
                    maxLength = lineArray[j].length;
                }
            }
        }
        return maxLength;
    }(txt));
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
    }(txt));
    // creates array of words
    let wordArray = (function findWords(text){
        arrayofwords = text
        // replace special characters with whitespace
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, ' ')
        // replace new lines, new tabs etc with whitespace
        .replace(/\r\n|\n|\t|\r/g, ' ')
        // splits string in terms of whitespace
        .split(' ')
        // filters out spaces from array
        .filter(function(array) {
            return array != ''
        });
        return arrayofwords;
    }(txt));
    nWords = wordArray.length;
    console.log(wordArray);

    return {
        nChars,
        nWords,
        nLines,
        nNonEmptyLines,
        averageWordLength: 3.3,
        maxLineLength,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

