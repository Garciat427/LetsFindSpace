
module.exports = { 

    /* ------------------ Customer Types (Get and Post) ------------------ */
    //Get CusType(Find all Types)
    getCo: (req,res) => {
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
         newCo = [{x:(coX/coLen), y:(coY/coLen)}];
      } else {
         console.log("The List is empty or has only 1 coordinate")
      }

       console.log(newCo);

       res.json({coordinates: newCo});
    }
 
 }
 