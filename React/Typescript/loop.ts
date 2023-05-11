for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
  
  // Using for-of loop
  for (let color of colors) {
    console.log(color);
  }
  
  let arr = [10, 20, 30, 40];
for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3
  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

const myList = [1, 2, 3, 4, 5];
myList.forEach(item => {
    console.log(item);
});
