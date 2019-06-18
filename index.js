function dwarfRollCall(arrayDwarves){
  let stringDwarves = "";
  for( let i = 0; i < arrayDwarves.length/2; i++){
  stringDwarves += ( i + 1 + ". " + arrayDwarves[i] + " " );
  }
  return stringDwarves;
}
//"1. Doc 2. Dopey 3. Bashful 4. Grumpy "

function summonCaptainPlanet(planeteerCalls){
  let newArray = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    newArray.push(planeteerCalls[i].toUpperCase() + "!" );
  }
  return newArray;
}

function longPlaneteerCalls(arrayOfCalls){
  let longPlaneteerCalls = false;
  for(let i = 0; i < arrayOfCalls.length; i++){
    if(arrayOfCalls[i].length > 4)
      longPlaneteerCalls = true;
  }
  return longPlaneteerCalls
}

function findTheCheese(arrayOfStrings){
let cheeses = ['gouda', 'cheddar', 'camembert']
for(let i = 0; i < arrayOfStrings.length; i++){
  for(let j = 0; j < cheeses.length; j++){
    if(cheeses[j] === arrayOfStrings[i]){
      return arrayOfStrings[i];
      }
    }
  }
  return 'no cheese!';
}

function wordsWithB(words){
  let newWords = [];
  for( let i = 0; i < words.length; i++){
    if(words[i][0] === 'b'){
      newWords.push(words[i]);
    }
  }
  return newWords;
}
