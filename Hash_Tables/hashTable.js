
// GET:
// 1. Accepts a key
// 2. Hashes the key
// 3. Retrieve the key-value pair in the hash table and return it.
// 4. If the key isn't found, return undefined;
class HashTableEntry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(capacity=8) {
    this.capacity = capacity;
    this.storage = new Array(capacity);
    this.count = 0;
  }

  getNumSlots() {
    return this.capacity;
  }

  getLoadFactor() {
    return this.count / this.capacity;
  }

  // hash with DJB2 32-bit
  djb2(key) {
    let hash = 5381;
    for (let c = 0; c < key.length; c++) {
      const char = key[c];
      let value = char.charCodeAt(0);
      hash = (hash * 33) + value;
    }

    return hash;
  }

  _hash(key) {
    let total = 0;
    let _PRIME = 31;
    // Take math.min (get smaller) to not go over 100 chars
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      // Get the character code
      // If you subtract 96 gives us position in the alphabet
      let value = char.charCodeAt(0) - 96;
      // Use mod array length to get location in array
      total = (total * _PRIME + value) % this.storage.length;
    }

    return total;
  }

  hashIndex(key) {
    return this.djb2(key) % this.capacity;
  }
  // SET or Put: 
  // 1. Accepts the key and a value
  // 2. Hashes the key
  // 3. Stores the key-value pair in the hash table array via separate chaining
  // set(key, value) {
  //   let index = this._hash(key);
  //   if (!this.storage[index]) {
  //     this.storage[index] = [];
  //   }
  //   this.storage[index].push([key, value]);
  // }

  // get(key) {
  //   let index = this._hash(key);
  //   if (this.storage[index]) {
  //     for (let i = 0; i < this.storage[index].length; i++) {
  //       if (this.storage[index][i][0] === key) {
  //         return this.storage[index][i]
  //       }
  //     }
  //   }
  //   return undefined;
  // }

  put(key, value) {
    let index = this.hashIndex(key);
    // insert into empty slot
    if (!this.storage[index]) {
      this.storage[index] = new HashTableEntry(key, value);
      this.count++
    } else {
      let current_node = this.storage[index];

      while (current_node.key !== key && current_node.next) {
        current_node = current_node.next
      }
      // if key found, update current value
      if (current_node.key === key) {
        current_node.value = value;
      } else {
        current_node.next = new HashTableEntry(key, value);
        this.count++;
      }
    }
    // if (this.getLoadFactor() > 0.7) {
    //   this.resizeBy(this.capacity * 2)
    // }
  }

  get(key) {
    let index = this.hashIndex(key);
    if (this.storage[index]) {
      let current_node = this.storage[index];

      // If key does not match move to the next node if any
      while (current_node.key !== key && current_node.next) {
        current_node = current_node.next
      }
      if (condition) {
        
      }
    }
  }
  // KEYS:
  // Loops through the hash table array and returns array of keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          // handle duplicate values
          if (!keysArr.includes(this.storage[i][j][0])) {
            keysArr.push(this.storage[i][j][0])
          }
        }
      }
    }

    return keysArr;
  }
  // VALUES:
  // Loops the hash table and returns an array of values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          // handle duplicate values
          if (!valuesArr.includes(this.storage[i][j][1])) {
            valuesArr.push(this.storage[i][j][1])
          }
        }
      }
    }

    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.put('hello', 'goodbye')
ht.put('what', 'cool')
ht.put('norman', '11245')
ht.put('sunny', 'bye')
ht.put('he', 33)
ht.put('brown', '#45667')
ht.put('yellow', '#99667')
ht.put('yellow', '#99667')
ht.put('yellow', '#99667')
ht.put('yellow', '#678999')

// console.log(ht)

for (let i = 0; i < ht.storage.length; i++) {
  console.log(ht.storage[i])
}

// console.log(ht.storage)
// console.log(ht.get('norman'))
// console.log(ht.get('nor'))
console.log('Values: ', ht.values())

console.log('Keys: ', ht.keys())
console.log('Number of slots: ', ht.getNumSlots())

console.log('hash: ', ht.djb2('eralp'))