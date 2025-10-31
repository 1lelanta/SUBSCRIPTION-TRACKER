// utils/emailTemplate.js

export const EmailTemplates = {
  // 📅 Reminder Template
  reminder: {
    subject: (vars) => `Reminder: ${vars.title} — ${vars.date}`,
    html: `
    <html>
      <body style="font-family:Arial, sans-serif;background:#f6f7fb;padding:20px;">
        <div style="max-width:600px;margin:auto;background:white;border-radius:10px;padding:20px;">
          <h2>Reminder: {{title}}</h2>
          <p>Hi {{name}},</p>
          <p>This is a reminder for <strong>{{title}}</strong> on <strong>{{date}}</strong> at <strong>{{time}}</strong>.</p>
          <p>Location: {{location}}</p>
          <a href="{{actionUrl}}" style="display:inline-block;padding:10px 15px;background:#2563eb;color:white;border-radius:6px;text-decoration:none;">View Details</a>
          <hr>
          <p style="font-size:12px;color:#9ca3af;">If you didn’t request this, ignore this email.</p>
        </div>
      </body>
    </html>`,
    text: `
Reminder: {{title}} — {{date}}

Hi {{name}},

This is a reminder for "{{title}}" on {{date}} at {{time}}.
Location: {{location}}.

View Details: {{actionUrl}}
`
  },

  // 👋 Welcome Template
  welcome: {
    subject: (vars) => `Welcome to ${vars.appName}, ${vars.name}!`,
    html: `
    <html><body style="font-family:Arial;background:#f2f4f8;padding:20px;">
      <div style="max-width:600px;margin:auto;background:white;padding:20px;border-radius:10px;">
        <h1>Welcome, {{name}} 👋</h1>
        <p>Thanks for joining <strong>{{appName}}</strong>! Please confirm your email below:</p>
        <a href="{{confirmUrl}}" style="padding:10px 15px;background:#10b981;color:white;border-radius:6px;text-decoration:none;">Confirm Email</a>
      </div>
    </body></html>`,
    text: `
Welcome to {{appName}}, {{name}}!
Confirm your email: {{confirmUrl}}
`
  },

  // 🔐 Password Reset Template
  resetPassword: {
    subject: (vars) => `Reset your password — ${vars.appName}`,
    html: `
    <html><body style="font-family:Arial;background:#f8fafc;padding:20px;">
      <div style="max-width:600px;margin:auto;background:white;padding:20px;border-radius:10px;">
        <h2>Reset your password</h2>
        <p>Hi {{name}},</p>
        <p>We received a request to reset the password for your {{appName}} account.</p>
        <a href="{{resetUrl}}" style="display:inline-block;padding:10px 15px;background:#dc2626;color:white;border-radius:6px;text-decoration:none;">Reset Password</a>
        <p>This link expires in {{expiresIn}}.</p>
      </div>
    </body></html>`,
    text: `
Reset your password for {{appName}}

Hi {{name}},
Reset link: {{resetUrl}}
Expires in: {{expiresIn}}
`
  },

  // 🔔 Generic Notification Template
  notification: {
    subject: (vars) => `${vars.title} — ${vars.appName}`,
    html: `
    <html><body style="font-family:Arial;background:#fff;padding:18px;">
      <div style="max-width:600px;margin:12px auto;padding:18px;border:1px solid #eef2f6;border-radius:8px;">
        <h3>{{title}}</h3>
        <p>{{message}}</p>
        <a href="{{actionUrl}}" style="padding:10px 14px;border-radius:6px;text-decoration:none;background:#2563eb;color:#fff;">View</a>
        <hr/><p style="font-size:12px;color:#9aa4b2;">Manage your notification settings: {{settingsUrl}}</p>
      </div>
    </body></html>`,
    text: `
{{title}}

{{message}}

View: {{actionUrl}}
Manage: {{settingsUrl}}
`
  }
};

// 🧩 Simple renderer to replace {{variables}} in the templates
export function renderTemplate(template, vars = {}) {
  return template.replace(/\{\{(\s*[\w.]+\s*)\}\}/g, (_, key) => {
    const k = key.trim();
    return vars[k] !== undefined ? vars[k] : '';
  });
}
