const express = require("express");
const path = require("path");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/calculate", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;
  let result;

  // Perform the calculation based on the selected operation
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "div":
      result = b !== 0 ? a / b : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operation";
  }

  // Render the result using EJS
  res.render("index", { result });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
