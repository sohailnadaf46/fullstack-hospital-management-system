import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName:{
    type:String,
    requried:true,
    minLength:[3, "fist name must contain at least 3 character"]
  },
  lastName:{
    type:String,
    required:true,
    minLength:[3, "last name must contain atleast 3 character"]
  },
  email:{
    type:String,
    required:true,
    validate:[validator.isEmail, "please provide a valid email address"]
  },
  phone:{
    type:String,
    required:true,
    minLength:[10, "phone number must atleast contain 10 digits"],
  },
  message:{
    type:String,
    requried:true,
    minLength:[10, "message must contain atleast 10 characters"]
  }
})

export const Message = mongoose.model("Message", messageSchema)