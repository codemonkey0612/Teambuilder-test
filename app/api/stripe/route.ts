import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
  appInfo: {
    name: "nextjs-with-stripe-typescript-demo",
    url: "https://nextjs-with-stripe-typescript-demo.vercel.app",
  },
});

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const urlOrigin = req.headers.get("origin");
    const a = JSON.stringify(reqBody);
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1L4XgjA0wDuDFD5eJqmVTIZj" }],
      line_items: reqBody.map((item) => {
        const img = item.image[0].asset._ref;
        const newImage = img
          .replace(
            "image-",
            "https://cdn.sanity.io/images/zm8elvf0/production/"
          )
          .replace("-webp", ".webp");

        return {
          price_data: {
            currency: "myr",
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${urlOrigin}/success`,
      cancel_url: `${urlOrigin}/canceled`,
    });

    return NextResponse.json(session);
  } catch (err) {
    return NextResponse.json(err.message);
  }
}
