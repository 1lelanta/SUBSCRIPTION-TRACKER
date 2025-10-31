// emailTemplates.js
import dayjs from "dayjs";

export const emailTemplates = [
  {
    label: "7_days_before",
    generateSubject: ({ subscriptionname }) =>
      `Reminder: Your ${subscriptionname} renews in 7 days`,

    generateBody: ({
      userName,
      subscriptionname,
      renewalDate,
      planName,
      price,
      paymentMethod,
    }) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Subscription Reminder</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9fafb;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          background: #ffffff;
          max-width: 600px;
          margin: 40px auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #2563eb;
          color: white;
          text-align: center;
          padding: 20px;
        }
        .content {
          padding: 25px;
        }
        h2 {
          color: #2563eb;
        }
        p {
          line-height: 1.6;
        }
        .info {
          background: #f3f4f6;
          padding: 10px 15px;
          border-radius: 6px;
          margin: 15px 0;
        }
        .button {
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          margin-top: 20px;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #777;
          padding: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Subscription Renewal Reminder</h1>
        </div>
        <div class="content">
          <h2>Hello ${userName || "Subscriber"},</h2>
          <p>Your <strong>${subscriptionname}</strong> subscription will renew in <strong>7 days</strong>.</p>
          
          <div class="info">
            <p><strong>Plan:</strong> ${planName}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            <p><strong>Renewal Date:</strong> ${renewalDate}</p>
          </div>

          <p>If you wish to make changes, please visit your account settings before ${renewalDate}.</p>
          <a href="https://yourwebsite.com/account" class="button">Manage Subscription</a>
        </div>
        <div class="footer">
          <p>Thank you for staying with us 💙</p>
          <p>&copy; ${new Date().getFullYear()} Your Company</p>
        </div>
      </div>
    </body>
    </html>
    `,
  },

  {
    label: "1_day_before",
    generateSubject: ({ subscriptionname }) =>
      `Your ${subscriptionname} renews tomorrow!`,

    generateBody: ({
      userName,
      subscriptionname,
      renewalDate,
      planName,
      price,
      paymentMethod,
    }) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Renewal Reminder</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #fffaf0;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          background: #ffffff;
          max-width: 600px;
          margin: 40px auto;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #facc15;
        }
        .header {
          background-color: #facc15;
          color: #111;
          text-align: center;
          padding: 20px;
        }
        .content {
          padding: 25px;
        }
        .button {
          display: inline-block;
          background: #facc15;
          color: #111;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          margin-top: 20px;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #555;
          padding: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Just a heads-up!</h1>
        </div>
        <div class="content">
          <p>Hi ${userName || "there"},</p>
          <p>Your <strong>${subscriptionname}</strong> plan renews tomorrow (${renewalDate}).</p>
          <p><strong>Plan:</strong> ${planName}</p>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Payment Method:</strong> ${paymentMethod}</p>

          <p>If you want to update your billing info or cancel before renewal, you can manage it below:</p>
          <a href="https://yourwebsite.com/account" class="button">Manage My Subscription</a>
        </div>
        <div class="footer">
          <p>We're glad to have you with us! 💛</p>
          <p>&copy; ${new Date().getFullYear()} Your Company</p>
        </div>
      </div>
    </body>
    </html>
    `,
  },
];
