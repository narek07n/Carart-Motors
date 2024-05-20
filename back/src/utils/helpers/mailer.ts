import nodemailer from "nodemailer";
import "dotenv/config";

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendResetPasswordEmail(email: string, resetCode: string) {
    try {
      const mailOptions: nodemailer.SendMailOptions = {
        from: "tttttteeeeeesssssttttt@gmail.com",
        to: email,
        subject: "Reset Your Password",
        text: `Your reset code is: ${resetCode} \n\n Visit http://localhost:3000/confirm and login with this one time code`,
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.log("Error sending reset password email:", error);
      throw error;
    }
  }
}

export default EmailService;
