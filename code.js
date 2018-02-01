//
// this is just a stub for a function you need to implement
//
function getStats(txt) {


    let nChars = txt.length;
    let nWords = 0;
    // finds length of an array split per new line
    let nLines = (function findLines(text){
        return text.split(/\r\n|\n|\r/).length;
    }(txt));
    // find number of non empty lines
    let nNonEmptyLines = (function findLines(text){
        let count = 0;
        lineArray = text.split(/\r\n|\n|\r/);
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
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

