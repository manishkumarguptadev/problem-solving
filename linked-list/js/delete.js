deleteAtHead = function () {
  //if list is empty, do nothing
  if (this.isEmpty()) {
    return this;
  }
  //Get the head and first element of the list
  let firstElement = this.head;

  //If list is not empty, link head to the nextElement of firstElement
  this.head = firstElement.nextElement;

  return this;
};
deleteAtTail = function () {
  // check for the case when linked list is empty
  if (this.isEmpty()) {
    return this;
  }
  //if linked list is not empty, get the pointer to first node
  let firstNode = this.head;
  //check for the corner case when linked list has only one element
  if (firstNode.nextElement == null) {
    this.deleteAtHead();
    return this;
  }
  //otherwise traverse to reach second last node
  while (firstNode.nextElement.nextElement != null) {
    firstNode = firstNode.nextElement;
  }
  //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
  firstNode.nextElement = null;
  return this;
};
deleteVal = function (value) {
  //if list is empty return false
  if (this.isEmpty()) {
    return false;
  }

  //else get pointer to head
  let currentNode = this.head;
  // if first node's is the node to be deleted, delete it and return true
  if (currentNode.data == value) {
    this.head = currentNode.nextElement;
    return true;
  }

  // else traverse the list
  while (currentNode.nextElement != null) {
    // if a node whose next node has the value as data, is found, delete it from the list and return true
    if (currentNode.nextElement.data == value) {
      currentNode.nextElement = currentNode.nextElement.nextElement;
      return true;
    }
    currentNode = currentNode.nextElement;
  }
  //else node was not found, return false
  return false;
};
