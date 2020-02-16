module.exports = {
   test1: (req, res) => {
      console.log(req.body)
      res.json({ code: 12345 })
   },
   
   test2: (req, res) => {
      console.log(req.body)
      res.json({
         users: [
            {
               name: "Test User 1",
               lat: 1,
               lon: 2
            },
            {
               name: "Test User 2",
               lat: 3,
               lon: 4
            }
         ]
      })
   }
}