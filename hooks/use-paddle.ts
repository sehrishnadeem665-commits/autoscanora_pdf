import { useEffect, useState } from 'react';
import { initializePaddle } from '@paddle/paddle-js';

export function usePaddle() {
  const [paddleReady, setPaddleReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (window.Paddle?.Initialized) {
      setPaddleReady(true);
      return;
    }

    const loadPaddle = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || 'live_e39ea078a5eb97ea51b86972761';

        // ✅ ONLY TOKEN - NO ENVIRONMENT PARAMETER
        const paddle = await initializePaddle({
          token,
        });

        if (paddle && isMounted) {
          setPaddleReady(true);
        } else if (!paddle && isMounted) {
          setError('Paddle initialization returned no instance');
        }
      } catch (err) {
        if (!isMounted) return;
        console.error('❌ Paddle initialization failed', err);
        setError('Paddle initialization failed: ' + (err instanceof Error ? err.message : String(err)));
      }
    };

    loadPaddle();

    return () => {
      isMounted = false;
    };
  }, []);

  return { paddleReady, error };
}