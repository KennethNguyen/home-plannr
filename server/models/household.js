const mongoose = require("mongoose");

const householdSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  members: {
    type: [String],
  },
  chores: [{ unassigned: { type: [String], default: [] } }],
  notices: {
    type: [String],
  },
  penalties: {
    type: [String],
  },
});

const Household = mongoose.model("Household", householdSchema);

module.exports = Household;
