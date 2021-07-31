const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("express-async-errors");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));

// Routing
app.use("/api/courses", require("./routes/course.route"));
app.use("/api/categories", require("./routes/category.route"));
app.use("/api/users", require("./routes/user.route"));
app.use("/api/lessons", require("./routes/lesson.route"));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/wishlist", require("./routes/wishlist.route"));

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
