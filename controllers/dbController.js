const Users = require('../models/users');
const Codes = require('../models/codes');

module.exports = { 

   /* ------------------ Customer Types (Get and Post) ------------------ */
   //Get CusType(Find all Types)
   createCode: (req,res) => {
      var getName = req.body.name;
      
      Users.find({name: getName}, 'name', function(err, docs) {
         res.json(docs)
         if (docs.length == 0) {
            console.log("YESSS!!!");
         } else {
            console.log(docs);
         }
      });
      
      // var user = new Users({
      //    name: "Viet",
      //    code: 29459});

      // user.save().then(()=> res.json(user));
   },

}
