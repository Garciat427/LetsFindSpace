// Fetch for JSON reference
const fetch = require("node-fetch");

module.exports = {
  /* ------------------ Customer Types (Get and Post) ------------------ */
  //Get CusType(Find all Types)
  getCo: (req, res) => {
    //console.log(req.body.test)
    //res.json({"test":true})

    //precond: coordinates given array is zero or >1

    var coordinates = req.body.coordinates;
    var newCo;
    var coLen = coordinates.length;
    var coX;
    var coY;
    var i;
    if (coLen > 1) {
      coX = coordinates[0].x;
      coY = coordinates[0].y;
      for (i = 1; i < coLen; i++) {
        coX += coordinates[i].x;
        coY += coordinates[i].y;
      }
      newCo = [{ x: coX / coLen, y: coY / coLen }];
    } else {
      console.log("The List is empty or has only 1 coordinate");
    }

    console.log(newCo);

    res.json({ coordinates: newCo });
  },

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
  }
};
