/*
 * mailer.js
 * Send email
 */

import nodemailer from "nodemailer";

const from = '"Books" <info@books.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to books",
    text: `
    Welcome to Bookworm. please, confirm your email.
    ${user.generateConfirmationUrl()}
    `
  };
  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Reset Password",
    text: `
    To reset password follow this link
    ${user.generateResetPasswordLink(user)}
    `
  };

  tranport.sendMail(email);
}
