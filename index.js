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

function calculatesFarePrice(fare) {
  if (distanceTravelledInFeet(fare) > 400 && < 2000 {
   return (fare-400)*2;
  }
  else if () {
  if (distanceTravelledInFeet(fare) > 2000 && < 2500 {
  return "$25";
    }
  }
  else {
    return "";
  }
}