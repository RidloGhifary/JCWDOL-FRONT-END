import RecipeCard from "@/components/RecipeCard";
import { createClient } from "contentful";

async function getRecipes() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: "recipe" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </section>
  );
}
