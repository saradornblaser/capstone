const generatePoem = (wordCorpus, numLines, numWords) => {
    const parseText = words => {
      return words.replace(/[^a-z\s]/ig, "").toLowerCase().split(' ');
    }
  
    const wordPairs = arr => {
      const obj = {};
  
      for (let i = 0; i < arr.length - 1; i++){
        const key = arr[i];
  
        if (!obj[key]) obj[key] = [];
        obj[key].push(arr[i + 1])
      }
  
      return obj;
    }
  
    const getRandomWord = arr => {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  
    const writeLine = (obj, n, numWords) => {
  
      const keys = Object.keys(obj);
      let startingWord = getRandomWord(keys);
      let newLine = [startingWord];
  
      const getNextWord = (word) => {
        while (!obj[word]) {
          word = getRandomWord(keys);
        }
  
        let newWord = getRandomWord(obj[word]);
        startingWord = newWord;
        return newWord;
      }
  
      for (let i = 0; i < n; i++) {
        newLine.push(getNextWord(startingWord));
      }
  
      return newLine.join(' ');
    }
  
    const corpusObj = wordPairs(parseText(wordCorpus));
    const poem = [];
    // If the number of words per line was not defined chose a random number
    if (!numWords) numWords =  Math.floor(Math.random() * numLines) + 1;
  
    // Creates each line of the poem
    for (let i = 0; i < numLines; i++){
      poem.push(writeLine(corpusObj, numWords));
    }
  
    return poem.join('\n');
  }
  
  let text = `Happiness, hit her like a train on a track
  Coming towards her, stuck still no turning back
  She hid around corners and she hid under beds
  She killed it with kisses and from it she fled
  With every bubble she sank with a drink
  And washed it away down the kitchen sink
  The dog days are over
  The dog days are done
  The horses are coming so you better run
  Run fast for your mother run fast for your father
  Run for your children for your sisters and brothers
  Leave all your love and your longing behind you
  Can't carry it with you if you want to survive
  The dog days are over
  The dog days are done
  Can't you hear the horses
  'Cause here they come
  And I never wanted anything from you
  Except everything you had
  And what was left after that too, oh.
  Happiness hit her like a bullet in the back
  Struck from a great height
  By someone who should know better than that
  The dog days are over
  The dog days are done
  Can you hear the horses
  'Cause here they come
  Run fast for your mother and fast for your father
  Run for your children for your sisters and brothers
  Leave all your love and your loving behind you
  Can't carry it with you if you want to survive
  The dog days are over
  The dog days are done
  Can you hear the horses
  'Cause here they come
  The dog days are over
  The dog days are done
  Can you hear the horses
  'Cause here they come
  The dog days are over
  The dog days are done
  The horses are coming
  So you better run`;
  // Dog Days Are Over - Florence + the Machine 
  
  console.log(generatePoem(text, 6));