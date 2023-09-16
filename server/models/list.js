const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

module.exports = mongoose.model("List", listSchema);
