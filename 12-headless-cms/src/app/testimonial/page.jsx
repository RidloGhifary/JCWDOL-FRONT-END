import TestimonialCard from "@/components/TestimonialCard";
import client from "@/utils/contentful";
import Link from "next/link";

async function getEntries() {
  try {
    const entries = await client.getEntries({
      content_type: "testimonialCarrental",
    });

    const sanitizedEntries = entries.items.map((entry) => {
      const imageUrl = entry.fields.userImage.fields.file.url;
      const id = entry.sys.id;
      const { username, comment, createdAt } = entry.fields;
      return { id, username, comment, createdAt, imageUrl };
    });

    return sanitizedEntries;
  } catch (err) {
    console.log(err);
  }
}

export default async function Page() {
  const entries = await getEntries();

  return (
    <div className="p-16">
      <h1 className="mb-6 text-center text-4xl">Testimonial Page</h1>
      <div className="grid grid-cols-2 gap-4">
        {entries?.map((entry) => (
          <Link href={`/testimonial/${entry.id}`} key={entry.id}>
            <TestimonialCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
}
