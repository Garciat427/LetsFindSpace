const Users = require('../models/users');
const Codes = require('../models/codes');

const generateCode = () => {
   return Math.floor(100000 + Math.random() * 900000);
};

const generateUniqueCode = () => {
   var generatedCode = generateCode();
   console.log(generatedCode);
   Codes.find({ code: generatedCode }, 'code', function (err, docs) {
      if (docs.length == 0) {
         return generatedCode;
      }
      return generateUniqueCode();
   })
};



module.exports = {
   generateCode: generateCode,
   generateUniqueCode: generateUniqueCode,

   /* ------------------ Customer Types (Get and Post) ------------------ */
   //Get CusType(Find all Types)
   createCode: (req, res) => {
      var getName = req.body.name;
      generatedCode = generateCode();
      console.log(generatedCode);
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
   }
}

