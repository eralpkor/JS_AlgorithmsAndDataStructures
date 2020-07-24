// piece of data - val
// reference to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  } 
  
  // Push method takes a value
  push(val) {
    // Create a new node using value passed to the function
    let newNode = new Node(val);
    // IF there is no head property on the list, set the head and tail to be the 
  // newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    // Otherwise set the next property on the tail to be new node and
    // set the tail property on the list to be the newly created node
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  // Increment the length by one
    this.length++;
  // Return the linked list
    return this;
  }
 
  // Remove from tail
  pop() {
    // If there is no nodes in the list, return undefined
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // Loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // Set the tail to be the 2nd to last node
    this.tail = newTail;
    // Set the next property or the 2nd to last node to be null
    this.tail.next = null;
    // Decrement the length of the list by 1
    this.length--;
    // if list is empty set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // Return the value of the node removed
    return current;
  }
  // remove from head
  shift() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;
    // Store the current head property in a variable
    let currentHead = this.head;
    // Set the head property to be the current head's next property
    this.head = currentHead.next;
    // Decrement the length by 1
    this.length--;
    // if list is empty set head and tail to null
    if (this.length === 0) {
      this.tail = null;
    }
    // Return the value of the node removed
    return currentHead;
  }
  // Add a node to beginning, takes a value
  unshift(val) {
    // Create a new node using the value passed to the function
    let newNode = new Node(val);
    // If there is no head property on the list, set the head and tail
    // to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    // Otherwise set the newly created node's next property to
    // be the current head property on the list
    // Set the head on the list to be that newly created node
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // Increment the length of the list by 1
    this.length++
    // return the linked list
    return this;
  }
  // Get the index value and return
  get(index) {
    // If the index is less than zero or greater than of equal to
    // the length of the list, return null
    if (index < 0 || index >= this.length) return null;
    // Loop through the list until you reach the index and
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++
    }
    // return the node at that specific index
    return current;
  }
  // Set it to a different value find the value and return true if found
  set(index, val) {
    // Use the get() function to find the specific node
    let foundNode = this.get(index)
    // If node is found, set the value of that node to be
    // the value passed to the function and return true
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    // If the node is not found, return false
    return false;
  }
  // Insert, adding a node to the linked list at specific position
}


let list = new SinglyLinkedList()
console.log(list.push('Hello'))
console.log(list.push('GoodBye'))
console.log(list.push('<3'))
console.log(list.push('!'))

console.log('This is Singly linked list', list)

// console.log('Popped this: ', list.pop())
console.log('Shifting node: ', list.shift())
console.log('After popped: ', list)
console.log('Unshift ', list.unshift('FIRST '))
console.log('Get index ', list.get(0))
console.log('Find something ', list.set(1, '%%%%%%%%'))
console.log('After SET the value: ', list)
