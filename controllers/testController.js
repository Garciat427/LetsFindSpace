module.exports = { 

   /* ------------------ Customer Types (Get and Post) ------------------ */
   //Get CusType(Find all Types)
   findCusType: (req,res) => {
      CustomerType.find({})
      .then((cusType) => {
         res.json(cusType)
      })
      .catch((err) => {
         res.json(err);
      });
   }
}