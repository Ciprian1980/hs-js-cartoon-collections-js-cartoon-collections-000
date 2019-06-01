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
  for(let i = 0; i <= arrayOfCalls.length; i++){
    if(longPlaneteerCalls === true && arrayOfCalls[i].length > 4){
      }
   }
  return longPlaneteerCalls;
}