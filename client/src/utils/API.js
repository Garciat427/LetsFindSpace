import axios from "axios";

export default {

   //API Call for createGroup
   postUserCreateGroup: (objData) => {
      console.log("Posting")
      return axios.post("/api/db/createGroup", objData);
   },

   //API Call for createGroup
   postUserJoinGroup: (objData) => {
      console.log("Posting")
      return axios.post("/api/db/joinGroup", objData);
   },

   //API Call for Refreshing Map
   refreshMap: (objData) => {
      console.log("Posting")
      return axios.post("/api/db/refreshGroup", objData);
   },

   //API Call for Finding Midpoint
   findMidpoint: (objData) => {
      console.log("Posting")
      return axios.post("/api/general/getMidpoint", objData);
   },

   //API Call for Finding Midpoint
   findPlace: (objData) => {
      console.log("Posting")
      return axios.post("/api/db/findNearestPlace", objData);
   },
   
   
  
};