// Code your solution in this file!
 function distanceFromHqInBlocks(pickUp, ){
    const headQuaters = 42;
const distance = Math.abs(pickUp -headQuaters);
return distance
}
function distanceFromHqInFeet(pickUp){
    const feet = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickUp);
    const distanceInFeet = distanceInBlocks * feet;
    return distanceInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock){
const feet =264;
const distanceInBlocks = Math.abs(endBlock - startBlock);
const distanceInFeet = distanceInBlocks * feet;
return distanceInFeet;
}
function calculatesFarePrice(startBlock, endBlock){
    const feet = 264;
    const freeSample =400;
    const shortDistance = 2000;
    const longDistance = 2500;
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    let fare;
  if (distanceInFeet<=freeSample) {
    fare = 0;
  } else if(distanceInFeet <= shortDistance){
    fare = (distanceInFeet-freeSample)*0.02;
  } else if(distanceInFeet < longDistance){
    fare = 25;
  } else {
    return 'cannot travel that far';
  }
  return fare;
}
