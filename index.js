function dwarfRollCall(dwarves) {
  var lineDwarves = "";
  for ( let i = 0;  i < dwarves.length; i++){
  
  lineDwarves += (i+1) .toString() +  ". "  + dwarves[i] + " ";
  }
  return lineDwarves;
}

function summonCaptainPlanet(planeteerCalls){
  var linePlaneteers = [ ];
  
  for ( let i = 0; i < planeteerCalls.length; i++){

    linePlaneteers.push(planeteerCalls[i].toUpperCase() + "!");
  }
  console.log(planeteerCalls)
  return linePlaneteers;
}

function longPlaneteerCalls(words){
  var hasLongWords = false;
 for (let i=0; i< words.length; i++){
  if (words[i].length > 4){
   hasLongWords = true;
  }
    } 
  return hasLongWords;
}


function findTheCheese(foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++){
  for(let j=0; j < cheeses.length; j++){
   if ( cheeses[j] === foods[i] ){ 
   return foods[i];
   }
  }
 }
 return 'no cheese!';
}

