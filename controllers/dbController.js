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
            code: generatedCode
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

   }
}

