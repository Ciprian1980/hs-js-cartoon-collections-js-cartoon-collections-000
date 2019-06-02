function dwarfRollCall(array){
  let dwarfes = "";
  for(let i = 0; i < array.length; i++){
    dwarfes += (i + 1 + ". " +  array[i] + " ");
  }
  return dwarfes;
//'1. Dopey 2. Grumpy 3. Bashful '
}

function summonCaptainPlanet(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i].toUpperCase() + "!");
  }
  return newArray;
}

function longPlaneteerCalls(arrayOfCalls){
  let longPlaneteerCalls = false;
  for(let i = 0; i < arrayOfCalls.length; i++){
    if(arrayOfCalls[i].length > 4){
      longPlaneteerCalls = true;
      }
   }
  return longPlaneteerCalls;
}

function findTheCheese(arrayOfStrings){
  let cheeses = ['gouda', 'cheddar', 'camembert'];
  for(let i = 0; i < cheeses.length; i++){
  for(let j = 0; j < arrayOfStrings.length; j++){
    if(arrayOfStrings[j] === cheeses[i]){
      return arrayOfStrings[j];
    }
   }
  }
  return 'no cheese!';
}