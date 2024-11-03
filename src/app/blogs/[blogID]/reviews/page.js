export default async function Reviews({ params }) {
  const { blogID } = await params;
  return (
    <>
      <div className="flex justify-center text-amber-950 text-xl font-bold">
        Blog #{blogID} Reviews Page :-)
      </div>
    </>
  );
}

export async function generateStaticParams() {
  // Define your static paths here if necessary
  return [];
}
