// Code your solutions in this file


let arr = ['bob', 'jill', 'rob'];
function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}`)
  }
  return arr
}
