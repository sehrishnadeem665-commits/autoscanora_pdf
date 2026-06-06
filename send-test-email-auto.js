const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function sendAutoTestEmail() {
  let transporter;
  let usingEthereal = false;
  let toAddress = process.env.EMAIL_TO || 'AutoScanOra@gmail.com';

  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('🔒 Using provided SMTP credentials');
  } else {
    console.log('ℹ️ No SMTP env vars found — creating Ethereal test account');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    usingEthereal = true;
    if (!process.env.EMAIL_TO) toAddress = testAccount.user;
    console.log(`ℹ️ Ethereal account: ${testAccount.user}`);
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; padding: 20px 0; background: linear-gradient(135deg, #5B5CEB, #14B8E6); border-radius: 10px 10px 0 0; color: white;">
          <h1>🎉 Payment Successful!</h1>
        </div>
        <div style="padding: 30px 20px;">
          <h2>Dear Customer,</h2>
          <p>Thank you for your purchase! Your payment has been successfully processed.</p>
          <div style="font-size: 36px; font-weight: bold; color: #14B8E6; text-align: center; margin: 20px 0;">£99.99</div>
          <h3>Order Details:</h3>
          <ul>
            <li><strong>Plan:</strong> Premium Plan</li>
            <li><strong>Status:</strong> ✅ Completed</li>
            <li><strong>Access:</strong> Instant</li>
          </ul>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://AutoScanOra.com/dashboard" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #5B5CEB, #14B8E6); color: white; text-decoration: none; border-radius: 5px;">Go to Dashboard</a>
          </div>
          <p>Best regards,<br><strong>AutoScanOra Team</strong></p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    console.log(`📧 Sending email to: ${toAddress}`);
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"AutoScanOra Test" <no-reply@AutoScanOra.test>',
      to: toAddress,
      subject: '✅ AutoScanOra Payment Success - Test',
      html,
    });

    console.log('✅ Email send attempt finished.');
    console.log('📨 Message ID:', info.messageId);

    if (usingEthereal) {
      const preview = nodemailer.getTestMessageUrl(info);
      if (preview) console.log('🔗 Ethereal preview URL:', preview);
    } else {
      console.log('🔔 If SMTP credentials are valid, the recipient should receive the real email.');
    }
  } catch (err) {
    console.error('❌ Error sending email:', err.message || err);
    if (err.response) console.error('SMTP response:', err.response);
  }
}

sendAutoTestEmail();
