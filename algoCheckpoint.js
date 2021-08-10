function count (str) {
    var trimmedStr = str.trim();
    var countCharac = trimmedStr.length;
    console.log(`The number of characters in this sentence is ${countCharac}`);
    var countWords = trimmedStr.split (" ");
    console.log(`The number of words in this sentence is ${countWords.length}`);
    var strLowerCase = str.toLowerCase();
    var vowels = 'aeiou';
    var vowelCount = 0;

    for(var x = 0; x < strLowerCase.length ; x++) {
        if (vowels.indexOf(strLowerCase[x]) !== -1){
            vowelCount ++;
        }
  }

  console.log(`The number of vowels in this sentence is ${vowelCount}`);
}