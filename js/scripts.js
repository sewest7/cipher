//(not a function)prompt user to enter a sentence and print sentence to console

let sentencePrompt = prompt("Enter a sentence. Make it really cool!");

//return first and last letter, capitalizes and return sentence as new string

function firstLast(sentence){
    let firstChar = sentence.charAt(0);
    let lastChar = sentence.charAt(sentence.length - 1);
    let nextSentence = (firstChar + lastChar).toUpperCase();
    return nextSentence;
  }
  
  alert(firstLast(sentencePrompt));
//take return value of first function, and reverse.


//call first two functions and concatenate first sentence and second sentence 



//count number of letters in original sentence, divide by two, and output letter at result's index then concat at beginning


//Bonus - reverse return from fourth function