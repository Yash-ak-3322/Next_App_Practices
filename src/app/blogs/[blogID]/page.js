import Navbar from "@/components/navbar";

export default async function blogDetails({ params }) {
  const { blogID } = await params;
  return (
    <>
      <div className="flex justify-center text-amber-950 text-xl font-bold">
        Blog #{blogID} Page :-)
      </div>
    </>
  );
}

export async function generateStaticParams() {
  // Define your static paths here if necessary
  return [];
}
