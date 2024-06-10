import Image from "next/image";

export default function TestimonialCard({ entry }) {
  return (
    <>
      <div className="flex items-start gap-2 bg-gray-900 hover:scale-105 transition cursor-pointer p-5 rounded-md">
        <Image
          src={`https:${entry.imageUrl}`}
          alt={entry.username}
          width={90}
          height={90}
          loading="lazy"
          className="aspect-square w-12 h-12 rounded-full object-cover"
        />
        <div className="space-y-1">
          <h1>{entry.username}</h1>
          <p className="text-gray-400 text-sm">
            {new Date(entry.createdAt).getMonth()} -{" "}
            {new Date(entry.createdAt).getFullYear()}
          </p>
          <p className="text-gray-400 line-clamp-3">{entry.comment}</p>
        </div>
      </div>
    </>
  );
}
