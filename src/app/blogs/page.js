import Navbar from "@/components/navbar";
import Link from "next/link";

export default async function Blogs() {
  const count = 3;
  return (
    <>
      <div className="flex justify-center text-amber-950 text-xl font-bold">
        Blogs Page :-)
      </div>
      <ul className="p-12 text-blue-500 font-serif text-lg list-disc">
        {Array.from({ length: count }, (_, i) => (
          <li key={i + 1}>
            <Link href={`/blogs/${i + 1}`}>Blog {i + 1}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function generateStaticParams() {
  // Define your static paths here if necessary
  return [];
}
