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
  
  let text = `You used to call me on my, you used to, you used to
  You used to call me on my cell phone
  Late night when you need my love
  Call me on my cell phone
  Late night when you need my love
  I know when that hotline bling
  That can only mean one thing
  I know when that hotline bling
  That can only mean one thing
  Ever since I left the city you
  Got a reputation for yourself now
  Everybody knows and I feel left out
  Girl you got me down, you got me stressed out
  Cause ever since I left the city, you
  Started wearing less and goin' out more
  Glasses of champagne out on the dance floor
  Hangin' with some girls I've never seen before
  You used to call me on my cell phone
  Late night when you need my love
  Call me on my cell phone
  Late night when you need my love
  I know when that hotline bling
  That can only mean one thing
  I know when that hotline bling
  That can only mean one thing
  Ever since I left the city, you, you, you
  You and me we just don't get along
  You make me feel like I did you wrong
  Going places where you don't belong
  Ever since I left the city, you
  You got exactly what you asked for
  Running out of pages in your passport
  Hanging with some girls I've never seen before
  You used to call me on my cell phone
  Late night when you need my love
  Call me on my cell phone
  Late night when you need my love
  I know when that hotline bling
  That can only mean one thing
  I know when that hotline bling
  That can only mean one thing
  These days, all I do is
  Wonder if you bendin' over backwards for someone else
  Wonder if your rollin' backwoods for someone else
  Doing things I taught you gettin' nasty for someone else
  You don't need no one else
  You don't need nobody else, no
  Why you never alone
  Why you always touching road
  Used to always stay at home, be a good girl
  You was in the zone
  You should just be yourself
  Right now, you're someone else
  You used to call me on my cell phone
  Late night when you need my love
  Call me on my cell phone
  Late night when you need my love
  I know when that hotline bling
  That can only mean one thing
  I know when that hotline bling
  That can only mean one thing
  Ever since I left the city`;
  
  console.log(generatePoem(text, 6));