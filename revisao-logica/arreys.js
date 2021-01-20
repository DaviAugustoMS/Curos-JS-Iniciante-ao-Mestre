const arr = new Array() 

const arr2 = new Array(true, "Davi", 28, new Array(2, 4, 10))

console.log(arr2)


arr[0] = "Davi"
arr[1] = 26

const arr3 = ["davi", 28, [2, 4, 6], true]
arr3[4] = 'a'
arr3[arr3.length] = "b"
arr3.push("push")
arr3.push('a', 'b', 'c')
console.log(arr)
console.log(arr2[3][arr2[3].length - 1])
console.log(arr3)