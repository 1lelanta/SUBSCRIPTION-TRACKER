// emailTemplate.js
import dayjs from "dayjs";

/**
 * Generates an HTML email reminder for subscription renewal.
 * 
 * @param {Object} options
 * @param {string} options.name - The user's name
 * @param {string} options.planName - The subscription plan name
 * @param {string|Date} options.renewalDate - The renewal date
 * @param {number} options.daysLeft - Days left until renewal
 * @returns {string} - HTML email content
 */
export const generateEmailTemplate = ({ name, planName, renewalDate, daysLeft }) => {
  const formattedDate = dayjs(renewalDate).format("MMMM D, YYYY");

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Subscription Reminder</title>
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f4f6f8;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        background-color: #ffffff;
        margin: 40px auto;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }
      .header {
        background-color: #2563eb;
        color: #fff;
        text-align: center;
        padding: 20px;
      }
      .content {
        padding: 25px;
        color: #333;
      }
      h2 {
        color: #2563eb;
        margin-bottom: 15px;
      }
      p {
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        background-color: #2563eb;
        color: #fff;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 6px;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        font-size: 13px;
        color: #888;
        padding: 15px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Subscription Reminder</h1>
      </div>
      <div class="content">
        <h2>Hello ${name || "Subscriber"},</h2>
        <p>This is a friendly reminder that your <strong>${planName || "subscription"}</strong> will renew in <strong>${daysLeft}</strong> day${daysLeft === 1 ? "" : "s"}.</p>
        <p>Your next billing date is <strong>${formattedDate}</strong>.</p>
        <p>If you wish to make changes or cancel before renewal, please visit your account page.</p>
        <a href="https://yourwebsite.com/account" class="button">Manage Subscription</a>
      </div>
      <div class="footer">
        <p>Thank you for being with us 💙</p>
        <p>&copy; ${new Date().getFullYear()} Your Company Name</p>
      </div>
    </div>
  </body>
  </html>
  `;
};
