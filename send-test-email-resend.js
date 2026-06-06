const { Resend } = require('resend');
require('dotenv').config({ path: '.env.local' });

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  console.log('📧 Sending test email via Resend...');

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['sehrishnadeem39@gmail.com'], // ✅ Apni Resend account wali email
      subject: '✅ AutoScanOra Test Email',
      html: '<h1>Test Successful!</h1><p>Payment emails will work.</p>',
    });

    if (error) {
      console.error('❌ Error:', error);
    } else {
      console.log('✅ Email sent!', data);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

sendTestEmail();