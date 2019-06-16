function dwarfRollCall(arrayDwarves){
  let stringDwarves = "";
  for( let i = 0; i < arrayDwarves.length; i++){
  stringDwarves += ( i + 1 + ". " + arrayDwarves[i] + " " );
  }
  return stringDwarves;
}
//"1. Doc 2. Dopey 3. Bashful 4. Grumpy "

function summonCaptainPLanet(planeteerCalls){
  let newArray = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    newArray.push(planeteerCalls[i].toUpperCase + "! " );
  }
  return newArray;
}


