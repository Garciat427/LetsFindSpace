const Users = require("../models/users");
const Codes = require("../models/codes");
const fetch = require("node-fetch");
const generalController = require("../controllers/generalController");

const getGeo = async function(address) {
  address = address.replace(" ", "+");
  var link = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`; //1600+Amphitheatre+Parkway,+Mountain+View,+CA//&key=YOUR_API_KEY"

  link += "&key=AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI";

  var result = await fetch(link);
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
  joinGroup: (req, res) => {
    console.log("asdfasdf");
    var getName = req.body.name;
    var getCode = req.body.code;
    console.log(getName);
    console.log(getCode);
    console.log("Going to DB");

    Users.find({}).then((err, res) => {
      console.log("AAAA");
      if (err) {
        console.log(err);
      } else {
        res.json();
      }
    });

    //  Codes.find({ code: getCode }, function(err, docs) {
    //    if (docs != 0) {
    //      Users.find({ code: getCode }, "name", function(err2, docs2) {
    //        var newUser = new Users({
    //          name: getName,
    //          code: getCode
    //        });
    //        newUser.save().then(() => {
    //          res.json(docs2);
    //        });
    //      });
    //    } else {
    //      res.json({
    //        message: "No code"
    //      });
    //    }
    //  });
  }
};
