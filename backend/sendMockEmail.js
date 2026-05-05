/* eslint-disable @typescript-eslint/no-require-imports */
// sendMockEmail.js

const path = require("path");
const nodemailer = require("nodemailer");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

// Mock form data
const mockFormData = {
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  subject: "Website Inquiry",
  message: "Hello, I am interested in your services.",
};

async function sendEmail() {
  try {
    // This connects Nodemailer to Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // This is the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Form Submission: ${mockFormData.subject}`,
      text: `
New form submission received:

Name: ${mockFormData.name}
Email: ${mockFormData.email}
Subject: ${mockFormData.subject}

Message:
${mockFormData.message}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("Failed to send email:");
    console.error(error);
  }
}

sendEmail();
