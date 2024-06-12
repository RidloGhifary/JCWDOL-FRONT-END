import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <article>
      <div className="h-80">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="Thumbnail recipe image"
          width={500}
          height={500}
          priority={true}
          className="aspect-square object-cover w-full h-full"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mb-6">⌛ {cookingTime} minutes to make.</p>
        <Link
          href={`/recipes/${slug}`}
          className="border-2 border-black px-6 py-3 dark:border-white">
          Cook this
        </Link>
      </div>
    </article>
  );
}
