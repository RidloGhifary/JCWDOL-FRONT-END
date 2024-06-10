import client from "@/utils/contentful";

async function getSingleEntry(id) {
  try {
    const entry = await client.getEntry(id);
    const { username, comment, createdAt } = entry.fields;
    const entryId = entry.sys.id;

    return { username, comment, createdAt, entryId };
  } catch (err) {
    console.log(err);
  }
}

export default async function Page({ params }) {
  const entry = await getSingleEntry(params.id);

  return (
    <div className="p-16 container mx-auto space-y-2">
      <h1>Testimonial from {entry.username}</h1>
      <p className="text-gray-400 text-sm w-[50%]">{entry.comment}</p>
    </div>
  );
}
