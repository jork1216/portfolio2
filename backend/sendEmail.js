// Import Nodemailer so this file can send emails.
import nodemailer from "nodemailer";

// Load the EMAIL_USER and EMAIL_PASS values from the .env file.
import "dotenv/config";

// Save the email address and password from .env into easy-to-read variables.
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// Stop the script if the email login details are missing.
if (!emailUser || !emailPass) {
  console.error("Missing EMAIL_USER or EMAIL_PASS in your .env file.");
  process.exit(1);
}

// Create the Gmail connection that Nodemailer will use to send the email.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// This function sends one simple test email.
export default async function sendEmail(req) {
  try {
    const data = req.body;

    // Send the email to yourself.
    const info = await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: "NEW MESSAGE FROM PORTFOLIO FORM",
      text: `
Name: ${data.name}
Email: ${data.email}
Project type: ${data["project type"]}
Budget: ${data.budget}

Message:
${data.message}
      `,
    });

    // Show success messages in the terminal.
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    // Show the error message if the email was not sent.
    console.error("Failed to send email.");
    console.error(error.message);
  }
}
