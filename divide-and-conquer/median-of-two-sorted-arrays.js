function findMedianSortedArrays(nums1, nums2) {
  const firstArrayLength = nums1.length;
  const secondArrayLength = nums2.length;

  const findKthElement = (firstIndex, secondIndex, kthElement) => {
    // If we've exhausted all elements in nums1, return from nums2
    if (firstIndex >= firstArrayLength) {
      return nums2[secondIndex + kthElement - 1];
    }

    // If we've exhausted all elements in nums2, return from nums1
    if (secondIndex >= secondArrayLength) {
      return nums1[firstIndex + kthElement - 1];
    }

    // Base case: if looking for the 1st element, return the minimum
    if (kthElement === 1) {
      return Math.min(nums1[firstIndex], nums2[secondIndex]);
    }

    // Calculate the midpoint for binary search
    const halfK = Math.floor(kthElement / 2);

    // Get the element at position (currentIndex + halfK - 1) in each array
    // Use a large value (1 << 30) if index is out of bounds
    const midValueInFirst =
      firstIndex + halfK - 1 < firstArrayLength
        ? nums1[firstIndex + halfK - 1]
        : 1 << 30;

    const midValueInSecond =
      secondIndex + halfK - 1 < secondArrayLength
        ? nums2[secondIndex + halfK - 1]
        : 1 << 30;

    // Eliminate halfK elements from the array with smaller mid value
    if (midValueInFirst < midValueInSecond) {
      return findKthElement(
        firstIndex + halfK,
        secondIndex,
        kthElement - halfK,
      );
    } else {
      return findKthElement(
        firstIndex,
        secondIndex + halfK,
        kthElement - halfK,
      );
    }
  };

  // Calculate the median position(s)
  const totalLength = firstArrayLength + secondArrayLength;

  // For odd total length: find the middle element
  // For even total length: find the two middle elements
  const leftMedian = findKthElement(0, 0, Math.floor((totalLength + 1) / 2));
  const rightMedian = findKthElement(0, 0, Math.floor((totalLength + 2) / 2));

  // Return the average of the two middle values
  return (leftMedian + rightMedian) / 2;
}
