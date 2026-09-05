var haveConflict = function (event1, event2) {
  let a, b;
  if (event1[0] < event2[0]) {
    a = event1;
    b = event2;
  } else {
    a = event2;
    b = event1;
  }

  if (a[1] >= b[0]) {
    return true;
  } else {
    return false;
  }
};
