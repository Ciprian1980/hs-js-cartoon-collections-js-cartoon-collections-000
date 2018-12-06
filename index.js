function dwarfRollCall(dwarves) {
  var lineDwarves = "";
  for ( let d = 0;  d < dwarves.length; d++){
  
  lineDwarves += (d+1) .toString() +  ". "  + dwarves[d] + " ";
  }
  return lineDwarves;
}

function summonCaptainPlanet(planeteerCalls){
  var linePlaneteers = [ ];
  
  for ( let p = 0; p < planeteerCalls.length; p++){

    linePlaneteers.push(planeteerCalls[p].toUpperCase() + "!");
  }
  return linePlaneteers;
}

function longPlaneteerCalls(words) {
  var hasLongWords = false;
 for (let i=0; i< words.length; i++){
  if (words[i].length > 4){
   hasLongWords = true;
  }
  return hasLongWords;
}

//function findTheCheese(foods) {
  
}
