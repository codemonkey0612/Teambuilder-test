import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "zm8elvf0",
  dataset: "production",
  apiVersion: "2022-01-05",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const bulider = imageUrlBuilder(client);

export const urlFor = (source) => bulider.image(source);
