const Users = require("../models/users");
const Codes = require("../models/codes");
const MeetingPlace = require("../models/meetingPlace");
const fetch = require("node-fetch");
const generalController = require("../controllers/generalController");

const getGeo = async function (address) {
  address = address.replace(" ", "+");
  var link = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

  link += "&key=AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI";

  var result = await fetch(link);
  let data = await result.json();

  return data.results[0].geometry.location;
};

const findSpace = async function (long, lat) {
  var apiLink = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + long + "," + lat + "&rankby=distance&type=" + areaType + "&key=AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI";

  var result = await fetch(apiLink);
  let data = await result.json();
  return data.results[0].geometry.location;
}

module.exports = {
  /* ------------------ Creating a group ------------------ */
  createGroup: async function (req, res) {
    var name = req.body.name;
    var geoLocation = await getGeo(req.body.location);
    var generatedCode = Math.floor(100000 + Math.random() * 900000);

    Codes.find({ code: generatedCode }, "code", function (err, docs) {
      while (docs.length != 0) {
        generatedCode = Math.floor(100000 + Math.random() * 900000);
      }

      // save to code table
      var newCode = new Codes({
        code: generatedCode,
        locked: false
      });
      newCode.save().then(() => {
        // Create user and store id of newcode
        var newUser = new Users({
          name: name,
          code: generatedCode,
          location: geoLocation
        });
        newUser.save().then(() => res.json(newUser));
      });
    });
  },

  /* ------------------ Joining a group ------------------- */
  joinGroup: (req, res) => {
    var getName = req.body.name;
    var getCode = req.body.code;

    Users.find({}).then((err, res) => {
      if (err) {
        console.log(err);
      } else {
        res.json();
      }
    });
  },

  /* ------------------ Refreshing a group ------------------- */
  refreshGroup: (req, res) => {
    var getCode = req.body.code;

    Users.find({ code: getCode }, function (err, docs) {
      res.json(docs);
    });
  },

  findNearestPlace: (req, res) => {
    var longitude = req.body.lng;
    var latitude = req.body.lat;
    var areaType = req.body.search;
    var groupNumber = req.body.code;

    var apiLink =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      longitude +
      "," +
      latitude +
      "&rankby=distance&type=" +
      areaType +
      "&key=AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI";


    fetch(apiLink).then(response => response.json()).then(data => {
      if (data.results.length == 0) {
        res.json([]);
        return;
      }
      var newMeetingPlace = new MeetingPlace({
        code: groupNumber,
        location: data.results[0].geometry.location
      })
      newMeetingPlace.save().then(() => {
        let tempObj = {
          location: data.results[0].geometry.location,
          name: data.results[0].name,
          address: data.results[0].vicinity
        }
        res.json(tempObj)
      })
    })
  }
};
