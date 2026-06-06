'use client';

import { useState } from 'react';
import { ShieldCheck, CreditCard, Loader2 } from 'lucide-react';
import { usePaddle } from '../../../hooks/use-paddle';

export default function AltUltimatePage() {
  const { paddleReady, error: paddleError } = usePaddle();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const displayError = error || paddleError || '';

  // ✅ Standard/Ultimate Plan Configuration
  const plan = {
    name: 'Standard Plan',
    price: '£40',
    priceId: 'pri_01kt41380gha533r6162t49wb7', // ✅ Standard Price ID
  };

  const handleCheckout = async () => {
    if (!checked) {
      alert('Please agree to the terms');
      return;
    }

    if (!paddleReady) {
      setError('Payment system not ready. Please wait...');
      return;
    }

    if (!window.Paddle) {
      setError('Paddle not available');
      return;
    }

    setLoading(true);
    setError('');

    try {
      window.Paddle.Checkout.open({
        items: [{ priceId: plan.priceId, quantity: 1 }],
        successUrl: `${window.location.origin}/dashboard?payment=success`,
        cancelUrl: `${window.location.origin}/pricing/alt-ultimate?payment=cancelled`,
        settings: {
          theme: 'light',
          displayMode: 'overlay',
        },
      });
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Checkout error: ' + (err.message || 'Unable to open checkout'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF5F0] to-[#FFFFFF] p-6">
      <div className="w-full max-w-md">
        {/* Orange Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8C42]/5 blur-3xl rounded-full" />

        {/* CARD */}
        <div className="relative bg-white border border-[#FF6B35]/20 rounded-[28px] shadow-2xl shadow-[#FF6B35]/10 overflow-hidden">
          
          {/* Orange Accent Line Top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FF6B35]" />

          {/* HEADER */}
          <div className="text-center px-8 pt-10 pb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Secure Checkout</h1>
            <p className="text-sm text-gray-500 mt-1">One-time payment</p>
            <span className="mt-4 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20">
              STANDARD PLAN
            </span>
          </div>

          {/* ORDER SUMMARY */}
          <div className="px-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Package</span>
                  <span className="text-gray-900 font-medium">Standard Plan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span className="text-gray-900">£0.00</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">Total</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
                    £40.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="px-8 mt-6">
            <label className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1 w-5 h-5 accent-[#FF6B35]"
              />
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-gray-900">Agreement required</p>
                <p className="text-gray-500 text-xs mt-1">
                  I confirm that all information is accurate. I understand that if I am not satisfied, I will first contact support before requesting a chargeback. After payment, your report will be sent to your email within 1-2 hours. If not received, please check your spam or junk folder.
                </p>
              </div>
            </label>
          </div>

          {/* CTA */}
          <div className="px-8 mt-6 pb-8">
            <button
              onClick={handleCheckout}
              disabled={!checked || loading || !paddleReady}
              className={`w-full py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition shadow-lg
              ${
                checked && paddleReady && !loading
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:shadow-[#FF6B35]/30 hover:shadow-xl hover:scale-[1.02] transform transition-all cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard size={18} />
                  Proceed to Payment
                </>
              )}
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              🔒 Secure Payments by Paddle | Digital Reports by AutoScanOra
            </p>
            
            {!paddleReady && (
              <p className="text-center text-xs text-[#FF8C42] mt-2 animate-pulse">
                Loading payment system...
              </p>
            )}
            
            {displayError && (
              <p className="text-center text-xs text-red-500 mt-2">
                {displayError}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}