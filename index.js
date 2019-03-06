// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(pickup) {
  return Math.abs(hq - pickup); 
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet)*264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((start - destination)*264);
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) > 400 && < 2000 {
   return (fare-400)*2;
  }
  else if () {
  if (distanceTravelledInFeet(start, destination) > 2000 && < 2500 {
  return "$25";
    }
  }
  else {
    return "cannot travel that far";
  }
}