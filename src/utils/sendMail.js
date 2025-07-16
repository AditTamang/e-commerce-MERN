import nodemailer from "nodemailer";
import constant from "../config/constant.js";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: constant.EMAIL_USER,
    pass: constant.EMAIL_PASSWORD,
  },
});

//
const sendMail = async (email, otp) => {
  const info = await transporter.sendMail({
    from: '"Adit Tamang" <tamangadit86@gmail.com>',
    to: email,
    subject: "Your OTP code",
    // text: "Your OTP code is ", // plain‑text body
    html: `<b>Your OTP code is </b> ${otp}`, // HTML body
  });
  console.log(info);
};

// sendMail("kanchantamang18@gmail.com",otp)

export { sendMail };
