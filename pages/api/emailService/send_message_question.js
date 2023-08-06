import nodemailer from "nodemailer";
import ReactDOMServer from "react-dom/server";
import Email from "../../../components/Email";

export default async function handler(req, res) {
  const { first_name, last_name, email, phone, message, kids, visit } =
    req.body;
  try {
    // Create a transporter object using your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Replace with your SMTP port (usually 587 for non-secure, 465 for secure)
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });
    // Define the email options
    if (!visit) {
      const mailOptions = {
        from: "ASI Website <samilaayouni14@gmail.com>", // sender address
        to: process.env.NEXT_PUBLIC_EMAIL_SEND,
        subject: "ASI Request",
        text: `
        
        To whom it may concern, 
  
        A recent inquiry has been asked by ${first_name} ${last_name} through the ASI website. Below you will find the information on the person and the message sent.
        
            First Name: ${first_name}
            Last name: ${last_name}
            Email address: ${email}
            Phone number: ${phone}
            Number of kids concerned: ${kids.length}
            Kids name and ages (if applies): ${kids
              .map((kid) => `${kid.name} (${kid.age} years old)`)
              .join(",")}
            Message: ${message}
        
        This message was sent on ${new Date()}. 
        
        Please kindly reach out to the email above to address the inquiry and provide the necessary assistance or information.
        
        Best regards, 
        Sami Laayouni,
        Developer of the school website
        `,
        html: ReactDOMServer.renderToString(
          <Email
            first_name={first_name}
            last_name={last_name}
            email={email}
            phone={phone}
            message={message}
            kids={kids}
            visit={false}
          />
        ),
      };
      const info = await transporter.sendMail(mailOptions);
      res.status(200).send(info);
    } else {
      const mailOptions = {
        from: "ASI Website <samilaayouni14@gmail.com>", // sender address
        to: process.env.NEXT_PUBLIC_EMAIL_SEND,
        subject: "ASI Request",
        text: `
        
        To whom it may concern, 
  
        A recent request to visit the school has been made by ${first_name} ${last_name} through the ASI website. Below you will find the information on the person and the message sent.
        
            First Name: ${first_name}
            Last name: ${last_name}
            Email address: ${email}
            Phone number: ${phone}
            Number of kids concerned: ${kids.length}
            Kids name and ages (if applies): ${kids
              .map((kid) => `${kid.name} (${kid.age} years old)`)
              .join(",")}
            Message: ${message}
        
        This request was sent on ${new Date()}. 
        
        Best regards, 
        Sami Laayouni,
        Developer of the school website
        `,
        html: ReactDOMServer.renderToString(
          <Email
            first_name={first_name}
            last_name={last_name}
            email={email}
            phone={phone}
            message={message}
            kids={kids}
            visit={true}
          />
        ),
      };
      const info = await transporter.sendMail(mailOptions);
      res.status(200).send(info);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
