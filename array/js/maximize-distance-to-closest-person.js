function maxDistToClosest(seats) {
  let firstOccupiedIndex = -1;
  let lastOccupiedIndex = -1;

  let maxDistanceBetweenOccupied = 0;
  const totalSeats = seats.length;

  for (let currentIndex = 0; currentIndex < totalSeats; currentIndex++) {
    if (seats[currentIndex] === 1) {
      // If this is not the first occupied seat,
      // calculate distance from previous occupied seat
      if (lastOccupiedIndex !== -1) {
        const distanceBetweenCurrent = currentIndex - lastOccupiedIndex;
        maxDistanceBetweenOccupied = Math.max(
          maxDistanceBetweenOccupied,
          distanceBetweenCurrent,
        );
      }

      if (firstOccupiedIndex === -1) {
        firstOccupiedIndex = currentIndex;
      }

      lastOccupiedIndex = currentIndex;
    }
  }

  const distanceFromStart = firstOccupiedIndex;
  const distanceFromEnd = totalSeats - lastOccupiedIndex - 1;
  const middleDistance = maxDistanceBetweenOccupied >> 1;

  return Math.max(distanceFromStart, distanceFromEnd, middleDistance);
}
