import Image from "next/image";

export default function TestimonialCard({ entry }) {
  return (
    <>
      <div className="flex items-start gap-3 bg-gray-900 hover:scale-105 transition cursor-pointer p-5 rounded-md">
        <Image
          src={`https:${entry.imageUrl}`}
          alt={entry.username}
          width={90}
          height={90}
          loading="lazy"
          className="aspect-square w-16 h-1w-16 rounded-full object-cover"
        />
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">{entry.username}</h1>
          <time className="text-gray-400 text-base italic">
            {new Date(entry.createdAt).getMonth()} -{" "}
            {new Date(entry.createdAt).getFullYear()}
          </time>
          <p className="text-gray-400 line-clamp-3 text-lg">{entry.comment}</p>
        </div>
      </div>
    </>
  );
}
