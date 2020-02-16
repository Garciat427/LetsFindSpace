const Users = require("../models/users");
const Codes = require("../models/codes");
const fetch = require("node-fetch");
const generalController = require("../controllers/generalController");

// Helper functions
const getGeo = async function(address) {
  address = address.replace(" ", "+");
  var link = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

  link += "&key=AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI";

  var result = await fetch(link);
  let data = await result.json();

  return data.results[0].geometry.location;
};

const findSpace = async function(long, lat) {
  var apiLink =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    long +
    "," +
    lat +
    "&rankby=distance&type=" +
    areaType +
    "&key=AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI";

  var result = await fetch(apiLink);
  let data = await result.json();
  return data.results[0].geometry.location;
};

module.exports = {
  /* ------------------ Creating a group ------------------ */
  createGroup: async function(req, res) {
    var name = req.body.name;
    var geoLocation = await getGeo(req.body.location);
    var generatedCode = Math.floor(100000 + Math.random() * 900000);

    Codes.find({ code: generatedCode }, "code", function(err, docs) {
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
  joinGroup: async function(req, res) {
    var name = req.body.name;
    var code = parseInt(req.body.code);
    var geoLocation = await getGeo(req.body.location);

    Codes.find({ code: code }, (err, result) => {
      if (result.length > 0) {
        var newUser = new Users({
          name: name,
          code: code,
          location: geoLocation
        });

        newUser.save().then(() => res.json(newUser));
      } else {
        res.json({
          message: "Code does not exist"
        });
      }

      if (err) {
        res.json({
          message: "Error"
        });
      }
    });
  },

  /* ------------------ Refreshing a group ------------------- */
  refreshGroup: (req, res) => {
    var getCode = req.body.code;

    Users.find({ code: getCode }, function (err, docs) {
      res.json(docs);
    });
  }
};
