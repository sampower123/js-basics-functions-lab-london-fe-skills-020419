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
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && < 2500) {
    return distanceTravelledInFeet(start, destination) - 400;
  }
}