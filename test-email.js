const nodemailer = require('nodemailer');

// Environment variables from .env.local
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 587;
const SMTP_USER = 'AutoScanOra@gmail.com';
const SMTP_PASS = 'kmybzmmycpcxdcye'; // Removed spaces

// Create transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// Test email
const testEmail = async () => {
  try {
    console.log('🔄 Testing SMTP connection...');
    
    const mailOptions = {
      from: `"AutoScanOra Test" <${SMTP_USER}>`,
      to: 'AutoScanOra@gmail.com',
      subject: '✅ Payment Success - Test Email',
      html: `
        <html>
          <body style="font-family: Arial;">
            <h2>🎉 Test Payment Success Email</h2>
            <p>Dear Customer,</p>
            <p>This is a <strong>test email</strong> to verify your payment success email system is working.</p>
            <div style="font-size: 24px; color: #14B8E6; margin: 20px 0;">
              £99.99
            </div>
            <h3>Plan Details:</h3>
            <ul>
              <li><strong>Plan:</strong> Premium Plan</li>
              <li><strong>Status:</strong> ✅ Completed</li>
              <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
            </ul>
            <p>If you received this email, your email system is working! 🚀</p>
          </body>
        </html>
      `,
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', result.messageId);
    console.log('✔️ Your payment success email system is working correctly.');
    
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    console.error('\n🔍 Troubleshooting:');
    console.error('1. Check SMTP credentials in .env.local');
    console.error('2. Gmail account might need "Less secure apps" enabled');
    console.error('3. Try using an App Password instead of regular password');
    console.error('4. Check firewall/network settings');
  }
};

testEmail();
