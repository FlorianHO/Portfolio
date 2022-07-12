const nodemailer = require("nodemailer");

export default async (req: any, res: any) => {
  const { Name, Email, Message, Subject } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
    }
  });

const data= { from: Email,
    to: process.env.NEXT_PUBLIC_SMTP_USER,
    subject: `${Subject} - de ${Name}`,
    html: `<h1>${Name} vous a contacté</h1>
      <p>Vous avez un message de soumission!</p><br>
      <p><strong>Email: </strong> ${Email}</p><br>
      <p><strong>Message: </strong> ${Message}</p><br>
    `};
    
      transporter.sendMail(data, function(err: any, info: any) {
        if(err)
          console.log(err);
        else
          console.log(info);
      })
};