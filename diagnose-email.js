const nodemailer = require('nodemailer');

const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 587;
const SMTP_USER = 'AutoScanOra@gmail.com';
const SMTP_PASS = 'ucejnuflgsufyyfo';

async function diagnoseEmail() {
  console.log('🔍 Gmail SMTP Diagnostic Test\n');
  console.log('Configuration:');
  console.log(`  Host: ${SMTP_HOST}`);
  console.log(`  Port: ${SMTP_PORT}`);
  console.log(`  User: ${SMTP_USER}`);
  console.log(`  Password Length: ${SMTP_PASS.length}`);
  console.log('');

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, // TLS
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    console.log('⏳ Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    console.log('📧 Sending test email...');
    const result = await transporter.sendMail({
      from: `"AutoScanOra" <${SMTP_USER}>`,
      to: SMTP_USER,
      subject: '✅ Gmail SMTP Test - Payment System Working',
      html: `
        <h1>✅ Payment Email System is Working!</h1>
        <p>Time: ${new Date().toLocaleString()}</p>
        <p>If you received this email, your payment success emails will work correctly.</p>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log(`📨 Message ID: ${result.messageId}\n`);
    console.log('🎉 Your payment success email system is configured correctly!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\n🔧 Possible Solutions:\n');
    
    if (error.message.includes('Invalid login') || error.message.includes('BadCredentials')) {
      console.log('❌ ISSUE: Gmail authentication failed');
      console.log('\n✅ SOLUTION 1: Check Gmail 2FA and App Password');
      console.log('   1. Go to: https://myaccount.google.com/apppasswords');
      console.log('   2. Select "Mail" and "Windows Computer"');
      console.log('   3. Generate NEW app password');
      console.log('   4. Copy exactly (WITH spaces): "abcd efgh ijkl mnop"');
      console.log('   5. Update SMTP_PASS in .env.local');
      console.log('   6. Restart development server: npm run dev\n');
      
      console.log('✅ SOLUTION 2: Enable Less Secure Apps');
      console.log('   1. Go to: https://myaccount.google.com/lesssecureapps');
      console.log('   2. Click "Turn on" (if available)');
      console.log('   3. Restart development server\n');
      
      console.log('✅ SOLUTION 3: Use Alternative Email Service (Recommended)');
      console.log('   Try Brevo (formerly Sendinblue):');
      console.log('   - Free tier: 300 emails/day');
      console.log('   - Go to: https://www.brevo.com');
      console.log('   - Get SMTP credentials from account settings');
      console.log('   - Update .env.local with Brevo SMTP settings');
    } else {
      console.log(`Error: ${error.message}`);
    }
  }
}

diagnoseEmail();
