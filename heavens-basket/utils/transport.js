import {createTransport} from "nodemailer"
import {config} from "dotenv"
config()
export const transport= createTransport({
    service:"Gmail",
    port: 587,
    secure: false,
    requireTLS: true,
    auth:{
        user:"basketheavens0@gmail.com",
        pass:"barcskhsidyuwtbm"
}
}
)

export const sentOTPEmail=async(to, subject, message)=>{
    await transport.sendMail({
        to,
        subject,
        text:message
    })
}