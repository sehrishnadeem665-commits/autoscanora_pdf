const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function testEmail() {
  try {
    await transporter.sendMail({
      from: `"AutoScanOra" <${process.env.SMTP_USER}>`,
      to: 'AutoScanOra@gmail.com',
      subject: 'Test Email',
      html: '<h1>SMTP Working!</h1>',
    });
    console.log('✅ Email sent!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testEmail();