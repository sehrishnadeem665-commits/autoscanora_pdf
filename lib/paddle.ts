import { initializePaddle, Paddle } from '@paddle/paddle-js';

let paddleInstance: Paddle | undefined;

export async function getPaddle() {
  if (!paddleInstance) {
    paddleInstance = await initializePaddle({
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
    });
  }
  return paddleInstance;
}

// ✅ Correct Sandbox Price IDs
export const PRICE_IDS = {
  basic: 'pri_01kt40zs139mbp1hv7rhpzwmxa',
  premium: 'pri_01kt41380gha533r6162t49wb7',
  standard: 'pri_01kt41237433x7grg91yfm0ygj',
};

// ✅ Correct Sandbox Product IDs
export const PRODUCT_IDS = {
  basic: 'pro_01kt40ygqc7y4vbjdgae52ankd',
  premium: 'pro_01kt412r8g62c4rgqcakxfsmxb',
  standard: 'pro_01kt411fm700j8rz48958y9tsh',
};

export const VENDOR_ID = 343082;