const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("express-async-errors");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors("*"));

// Routing
app.use("/courses", require("./routes/course.route"));
app.use("/categories", require("./routes/category.route"));
app.use("/users", require("./routes/user.route"));
app.use("/lessons", require("./routes/lesson.route"));

// Error Handling
app.use(function (req, res, next) {
  res.status(404).json({
    error_message: "Page not found",
  });
});

// Default error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error_message: "Something broke!",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at PORT=${PORT}`));
