'use client';

import { useEffect, useState } from 'react';

export default function PaddleDebugPage() {
  const [info, setInfo] = useState('');
  const [paddleStatus, setPaddleStatus] = useState('');

  useEffect(() => {
    const debug = async () => {
      let output = '';
      
      // Check Paddle token
      const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
      output += `✅ Token exists: ${token ? '✓' : '✗'}\n`;
      output += `Token: ${token?.substring(0, 10)}...\n\n`;

      // Load Paddle script
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
      script.async = true;

      script.onload = () => {
        output += '✅ Paddle script loaded\n';
        
        const checkPaddle = setInterval(() => {
          if (window.Paddle) {
            clearInterval(checkPaddle);
            
            output += '✅ Window.Paddle object exists\n';
            output += `Paddle methods: ${Object.keys(window.Paddle).join(', ')}\n\n`;

            // Try to initialize
            try {
              window.Paddle.Initialize({
                token: token
              });
              output += '✅ Paddle.Initialize() succeeded\n';
              setPaddleStatus('✅ Ready for checkout');
            } catch (err) {
              output += `❌ Paddle.Initialize() failed: ${err.message}\n`;
              setPaddleStatus(`❌ Error: ${err.message}`);
            }

            setInfo(output);
          }
        }, 100);

        setTimeout(() => clearInterval(checkPaddle), 2000);
      };

      script.onerror = () => {
        output += '❌ Failed to load Paddle script\n';
        setInfo(output);
      };

      document.head.appendChild(script);
    };

    debug();
  }, []);

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🔍 Paddle Debug Info</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
        <p className="font-semibold text-blue-900">{paddleStatus}</p>
      </div>

      <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm whitespace-pre-wrap">
        {info || 'Loading...'}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
        <h2 className="font-bold mb-2">⚠️ Troubleshooting:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>If Paddle initializes but checkout fails, it's likely a CORS issue</li>
          <li>Verify your Price IDs exist in Paddle Sandbox</li>
          <li>Check Paddle dashboard for localhost allowlist settings</li>
          <li>Try from a real domain instead of localhost</li>
        </ul>
      </div>

      <a 
        href="http://localhost:3001/pricing"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Pricing
      </a>
    </div>
  );
}
