// Fetch for JSON reference
const fetch = require("node-fetch");
const Codes = require("../models/codes");
const users = require("../models/users");

const getCo = function (coordinates) {
   //console.log(req.body.test)
   //res.json({"test":true})

   //precond: coordinates given array is zero or >1

   //var coordinates = req.body.coordinates;
   var newCo;
   var coLen = coordinates.length;
   var coX;
   var coY;
   var i;
   if (coLen > 1) {
     coX = coordinates[0].location.lat;
     coY = coordinates[0].location.lng;
     for (i = 1; i < coLen; i++) {
       coX += coordinates[i].location.lat;
       coY += coordinates[i].location.lng;
     }
     newCo = [{ lat: coX / coLen, lng: coY / coLen }];
   } else {
     console.log("The List is empty or has only 1 coordinate");
   }

   //console.log(newCo);

   //res.json({ coordinates: newCo });
   return newCo;
 };
module.exports = {
  /* ------------------ Customer Types (Get and Post) ------------------ */
  //Get CusType(Find all Types)
  getGeo: (req, res) => {
    var adrs = req.body.adrs;
    var adrsArr = adrs.split(" ");
    var arrLen = adrsArr.length;
    var i;
    var link = "https://maps.googleapis.com/maps/api/geocode/json?address="; //1600+Amphitheatre+Parkway,+Mountain+View,+CA//&key=YOUR_API_KEY"
    for (i = 0; i < arrLen; i++) {
      //console.log(adrsArr[i]);
      if (i == arrLen - 1) {
        link += adrsArr[i];
      } else {
        link += adrsArr[i] + "+";
      }
    }

    link += "&key=AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI";

    //jQuery.getJSON(link, function(data) {
    //data is the JSON string
    //});

    console.log(link);

    fetch(link)
      .then(response => response.json())
      .then(data => {
        res.json(data.results[0].geometry.location);
      });
  },
  midpoint: (req, res) => {
     var code = req.body.code;
     var midpoint;

     users.find({code: code}, "location", function(err, docs) {
        if (docs.length > 1) {
            //console.log(docs[0].location.lat);
            midpoint = getCo(docs);
            res.json({midpoint:midpoint});
        } else {
           res.json({
              message: "Not enough users to find the mid point"
           });
        }
     });
   }
};
