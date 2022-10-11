// synchronous and asynchronous

// Synchronous --> sync
// Code will be executed top to bottom line by line
// Step 1
// Step 2 ( step 1 result waiting )
// Step 3
// Step 4
// Step 5

// step n = always waiting for result of step n-1. After obtaining result of step n-1, step n will be executed.

// eg
db_connect();
data_validation();
db_insert();
save_notification();
email();


// advantages
// easy to implement logic
// readable codebase


// disadvantages
// slow execution ==> non blocking task





// Asynchronous

// Step 1
// Step 2 ( it is not dependent on the result of step 1, it will not wait for the result of step 1 )
// Step 3
// Step 4
// Step 5

// step n = step n-1 ko result na parkhi kana aafno kam garxa.

// Advantages 
// fast execution --> For non-blocking tasks

// Disadvantates
// difficulty in implenting logic.
// slightly unreadable code base.

// Challanges
// result handling

// reactive programming



