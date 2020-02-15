
module.exports = { 

    /* ------------------ Customer Types (Get and Post) ------------------ */
    //Get CusType(Find all Types)
    test: (req,res) => {
       console.log(req.body.test)
       res.json({"test":true})
    },
 
 }
 