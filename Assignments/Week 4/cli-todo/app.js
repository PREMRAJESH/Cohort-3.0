const fs = require("fs");
const { Command } = require("commander");
const program = new Command();
const todosFile = "todos.json";

// Helper functions to read/write todos
const loadTodos = () => {
  try {
    const data = fs.readFileSync(todosFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveTodos = (todos) => {
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
};

// Add a new todo
program
  .command("add <task>")
  .description("Add a new todo")
  .action((task) => {
    const todos = loadTodos();
    const newTodo = { id: todos.length + 1, task, status: "pending" };
    todos.push(newTodo);
    saveTodos(todos);
    console.log(`Added: "${task}"`);
  });

// Delete a todo by ID
program
  .command("delete <id>")
  .description("Delete a todo by ID")
  .action((id) => {
    let todos = loadTodos();
    todos = todos.filter((todo) => todo.id !== parseInt(id));
    saveTodos(todos);
    console.log(`Deleted todo with ID: ${id}`);
  });

// Mark a todo as done by ID
program
  .command("done <id>")
  .description("Mark a todo as done")
  .action((id) => {
    const todos = loadTodos();
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (todo) {
      todo.status = "done";
      saveTodos(todos);
      console.log(`Marked todo with ID ${id} as done`);
    } else {
      console.log(`Todo with ID ${id} not found`);
    }
  });

// List all todos
program
  .command("list")
  .description("List all todos")
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log("No todos found.");
    } else {
      todos.forEach((todo) => {
        console.log(`${todo.id}. [${todo.status}] ${todo.task}`);
      });
    }
  });

program.parse(process.argv);
