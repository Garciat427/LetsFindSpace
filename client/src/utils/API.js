import axios from "axios";

export default {

   //API Call for createGroup
   postUserCreateGroup: (objData) => {
      console.log("Posting")
      return axios.post("/api/test/1", objData);
   },

   //API Call for createGroup
   postUserJoinGroup: (objData) => {
      console.log("Posting")
      return axios.post("/api/test/1", objData);
   },

   //API Call for Refreshing Map
   refreshMap: (objData) => {
      console.log("Posting")
      return axios.get("/api/test/2", objData);
   },
   
  
};