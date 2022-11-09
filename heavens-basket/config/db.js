import {connect} from 'mongoose'
require("dotenv").config()
const mongoConnection = async () => {
  try {
    const {connection} = await connect(process.env.MONGO_URL);
    if(connection.readyState == 1){
        console.log("Mongoose connected")
    }
   
  } catch (err) {
    return Promise.reject(err);
  }
};
export default mongoConnection;
