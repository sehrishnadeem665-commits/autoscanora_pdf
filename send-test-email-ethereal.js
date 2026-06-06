const nodemailer = require('nodemailer');

async function sendEtherealTestEmail() {
  // Create a test account (Ethereal)
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

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
    console.log('📧 Sending Ethereal test email...');

    const info = await transporter.sendMail({
      from: '"AutoScanOra Test" <no-reply@AutoScanOra.test>',
      to: testAccount.user,
      subject: '✅ AutoScanOra Payment Success - Ethereal Test',
      html,
    });

    const preview = nodemailer.getTestMessageUrl(info);
    console.log('✅ Ethereal test email sent.');
    console.log('📨 Message ID:', info.messageId);
    if (preview) console.log('🔗 Preview URL:', preview);
    else console.log('⚠️ No preview URL available.');
  } catch (err) {
    console.error('❌ Ethereal send failed:', err);
  }
}

sendEtherealTestEmail();
