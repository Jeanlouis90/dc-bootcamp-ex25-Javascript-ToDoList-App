var todos = ['Buy New Turtle'];

var input = prompt('What would you like to do?');

while (input !== 'quit') {
    if (input === "list") {
    console.log(todos); 
    } else if (input === "new") {
    var newTodo = prompt('Enter New Todo');
    // adds to todos array
    todos.push(newTodo);
    }
    var input = prompt('What would you like to do?');
}

console.log('OK (in TERRY voice), YOU QUIT THE APP!')