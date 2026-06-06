const nodemailer = require('nodemailer');

async function testEmail() {
  const SMTP_CONFIG = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'AutoScanOra@gmail.com',
      pass: 'jltm jdaw fqzw pbvi',
    },
  };

  console.log('🔧 Config:', {
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: SMTP_CONFIG.secure,
    user: SMTP_CONFIG.auth.user,
    passLength: SMTP_CONFIG.auth.pass.length,
    passBytes: Buffer.from(SMTP_CONFIG.auth.pass).length,
  });

  const transporter = nodemailer.createTransport(SMTP_CONFIG);

  try {
    console.log('\n⏳ Verifying connection...');
    await transporter.verify();
    console.log('✅ Connection verified!');
    
    console.log('\n📧 Sending email...');
    const info = await transporter.sendMail({
      from: '"AutoScanOra" <AutoScanOra@gmail.com>',
      to: 'AutoScanOra@gmail.com',
      subject: '✅ Payment Success Email Test',
      text: 'Test email for payment success confirmation',
      html: '<h1>✅ Test Payment Email</h1><p>This test email confirms your payment system is working!</p>',
    });

    console.log('✅ Email sent successfully!');
    console.log('📨 Message ID:', info.messageId);
    console.log('\n🎉 Payment success emails are now working!');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\n📋 Full error:', error);
  }
}

testEmail();
