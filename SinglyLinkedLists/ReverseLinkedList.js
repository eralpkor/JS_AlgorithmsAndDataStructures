const SinglyLinkedList = require('./LinkedList');
// const Node = require('./LinkedList');

let list = new SinglyLinkedList()

// create a random linked list
function randomLL(len) {
  for (let i = 0; i < len; i++) {
    list.push(Math.floor(Math.random() * 100) + 1)
  }

  return list;
}

function reverse() {
  // Swap the head and tail
  // Create a variable called node and initialize it to the head property
  let node = list.head;
  list.head = list.tail;
  list.tail = node;
  // Create a variable called next
  let next;
  // Create a variable called prev
  let prev = null;
  // Loop through the list
  for (let i = 0; i < list.length; i++) {
  // Set next to be the next property on whatever node is
    next = node.next;
  // Set the next property on the node to be whatever prev is
    node.next = prev;
  // Set prev to be the value of the node variable
    prev = node;
  // Set the node variable to be the value of the next variable
    node = next;
  }
  return list;
}

function removeFromBack(head, index) {
  head = list.head;
  if (head === null || head.next === null) return null;
  // Check if index is greater then 0
  if (index <= 0 || index > list.length) return head;

  var slow = head;
  var fast = head;

  for (let i = 0; i < index + 1; i++) {
    fast = fast.next;
  }

  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return head;
}

function removeFromBack2(head, n) {
  head = list.head;
  
  if (n <= 0) return head;

  let slow = head;

  for (let i = 0; i <= n - 1; i++) {
    slow = slow.next;
    if (slow === null) return head;
  }
  let fast = null;

  while (slow.next !== null) {
    slow = slow.next;
    if (fast === null) {
      fast = head;
    } else {
      fast = fast.next;
    }
  }

  if (fast === null) return head.next;

  slow.next = slow.next.next;

  return head;
}

function removeNthNodeFromBack(head, k) {
  head = list.head;
  // Handles edge cases. If index (k) is less than 0 index
  if (k <= 0) return head;
  // if we're giving a head that is null, return null
  // if we're giving a length of 1 
  // if (head === null || head.next === null) return null;

  // Moves frontPointer forward by k-1 nodes.  
  let frontPointer = head;

  for (let i = 1; i <= k - 1; i++) {
    frontPointer = frontPointer.next;
    // If frontPointer lands on null,
    // that means k is larger than the list's length.  Leave the linked list
    // untouched in that case.
    // if k is greater than length of the LL return LL
    if (frontPointer == null) return head;
  }

  let backPointer = null;

  // Moves both pointers forward till we reach the last node.
  while (frontPointer.next != null) {
    frontPointer = frontPointer.next;

    if (backPointer === null) {
      backPointer = head;
    } else {
      backPointer = backPointer.next;
    }
    // backPointer = (backPointer == null) ? head : backPointer.next;
  }

  // Removes the node.
  if (backPointer == null) {
    return head.next;
  }
  
  backPointer.next = backPointer.next.next;

  return head;
}

list.push(1)
list.push(2)
list.push(3)
list.push(4)


// list.print()
// // reverse()
// list.print()
// randomLL(7);
list.print()
// removeFromBack2(100, 2)
removeNthNodeFromBack(1, 2)
list.print()

// console.log(list.insert(5, 'FIst'))
// console.log('After Insert : ', list)
// console.log('Remove index: ', list.remove(11))

// console.log(list)
// console.log('this is head ', list.head)
// list.push(999)
// console.log('before reverse', list.print())
// reverse() // reverse the Linked List
// console.log('After reverse', list.print())
// console.log('After reverse ', list)
