
var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)

bubbleSort(data)

mergeSort(data) // so much faster