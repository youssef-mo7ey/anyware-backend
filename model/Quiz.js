const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
    default: Date.now,
    }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
