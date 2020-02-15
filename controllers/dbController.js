const Users = require('../models/users');
const Codes = require('../models/codes');

module.exports = {

   /* ------------------ Creating a group ------------------ */
   createGroup: (req, res) => {
      var getName = req.body.name;
      generatedCode = Math.floor(100000 + Math.random() * 900000);
      Codes.find({ code: generatedCode }, 'code', function (err, docs) {
         while (docs.length != 0) {
            generatedCode = Math.floor(100000 + Math.random() * 900000);
         }

         var newCode = new Codes({
            code: generatedCode,
            locked: false
         });
         newCode.save().then(() => {
            // Create user and store id of newcode
            var newUser = new Users({
               name: getName,
               code: generatedCode
            });
            newUser.save().then(() => res.json(newUser))
         });
      })


   },

   /* ------------------ Joining a group ------------------- */
   joinGroup: (req, res) => {
      var getName = req.body.name;
      var getCode = req.body.code;
      Codes.find({ code: getCode, locked: false }, 'code', function (err, docs) {
         if (docs != 0) {
            Users.find({ code: getCode }, 'name', function (err2, docs2) {
               var newUser = new Users({
                  name: getName,
                  code: getCode
               })
               newUser.save();
               res.json(docs2);
            })
         } else {
            res.json([]);
         }
      })
   }
}

