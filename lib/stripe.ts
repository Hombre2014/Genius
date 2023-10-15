import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2023-08-16', // In original tutorial it is 2022-11-15
  telemetry: true,
});
