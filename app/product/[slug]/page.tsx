import { client } from "../../../lib/client";
import Show from "../Show.jsx";

type PageProps = {
  params: {
    slug: number;
  };
};

async function getProduct(slug) {
  // QUERY
  const oneProduct = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  // GET SINGLE PRODUCT
  const product = await client.fetch(oneProduct);

  // GET RELATED PRODUCTS
  const products = await client.fetch(productsQuery);

  return { product, products };
}

export default async function SingleProduct({ params: { slug } }: PageProps) {
  const { product, products } = await getProduct(slug);

  return <Show product={product} products={products} />;
}

export const generateStaticParams = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

  const products = await client.fetch(query);

  return products.map((e) => ({
    slug: e.slug.current,
  }));
};
