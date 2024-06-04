import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
const sendMessages = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).send({ message: "please provide all the details" });
  }

  const registeredUser = await Message.findOne({email, firstName});

  if(registeredUser){
    return res.status(409).send({message:"user already exists"})
  }

  const createNewUser = await Message.create({firstName, lastName, phone, email, message})
  return res.status(200).json({success: true, message:" message sent successfully"})
})

export { sendMessages };
