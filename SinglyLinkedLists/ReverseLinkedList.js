const SinglyLinkedList = require('./LinkedList');

let list = new SinglyLinkedList()



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



list.push(100)
list.push(201)
list.push(250)
list.push(350)


console.log(list.insert(5, 'FIst'))
console.log('After Insert : ', list)
console.log('Remove index: ', list.remove(11))

console.log(list)
console.log('this is head ', list.head)
list.push(999)
list.print()
reverse() // reverse the Linked List
list.print()
console.log(list)
