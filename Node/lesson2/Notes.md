## NOTES

## Sync
synchronous operations block the execution of the program until the operation completes
**sync** where each line of code is executed one after the other, and the execution of the program is paused until each line of code has completed. sync functions do not return a promise and are not executed in the background, which can lead to blocking behavior if the function takes a long time to complete

## Async
asynchronous operations do not block the execution of the program, but rather continue executing other code while the asynchronous operation completes in the background.

## Defining Async functions in Node
In Node.js, asynchronous operations are implemented using callbacks, promises, or the **async/await** syntax, it provides a way to write asynchronous code in a more synchronous style.
**async** is a keyword that is used to define a function that returns a promise. await is used inside an async function to wait for the resolution of a promise before moving on to the next line of code.

## Conclusion
In general, asynchronous code is preferred in Node.js because it allows for better performance and scalability. However, synchronous code may be necessary in some cases, such as when working with small files or performing operations that do not take long to complete.

