console.log("Hello, World!");

let myVariable = 42;

function countToTen() {
  for (let index = 0; index < 10; index++) {
    console.log(index + 1);
    // debugger; // This will pause the execution of the code
  }
}

countToTen();

function countToHundred() {
  for (let index = 0; index < 100; index++) {
    // Breakpoint will be here on chrome at 50 iterations
    // right click on the line number and select "edit breakpoint" here you can add a condition like index === 50
    let message = index + 1;
    console.log(message);
  }
}
