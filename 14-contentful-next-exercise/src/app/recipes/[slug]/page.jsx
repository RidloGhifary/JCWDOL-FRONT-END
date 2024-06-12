import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getRecipe(slug) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({
      content_type: "recipe",
      "fields.slug": slug,
    });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }) {
  const [recipe] = await getRecipe(params.slug);
  const { title, cookingTime, ingredients, method, featuredImage } =
    recipe.fields;

  return (
    <section>
      <div>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt="Featured image."
          loading="lazy"
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
      </div>
      <div>
        <h5>Method</h5>
        <div className="rich-text">{documentToReactComponents(method)}</div>
      </div>
    </section>
  );
}
