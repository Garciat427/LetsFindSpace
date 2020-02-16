const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema and model

const MeetingPlaceSchema = new Schema({
  code: Number,
  lat: Number,
  lng: Number
});

const MeetingPlace = mongoose.model("meetingPlace", MeetingPlaceSchema);

module.exports = MeetingPlace;
