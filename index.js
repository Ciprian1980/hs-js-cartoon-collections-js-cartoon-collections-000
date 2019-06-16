function dwarfRollCall(arrayDwarves){
  let stringDwarves = "";
  for( let i = 0; i < arrayDwarves.length; i++){
  arrayDwarves += ( i + 1 + ". " + arrayDwarves[i] + " " );
  }
  return stringDwarves;
}
//"1. Doc 2. Dopey 3. Bashful 4. Grumpy "


