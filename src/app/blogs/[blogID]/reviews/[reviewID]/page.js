export default async function reviewDetails({ params }) {
  const { reviewID, blogID } = await params;
  return (
    <>
      <div className="flex justify-center text-amber-950 text-xl font-bold">
        Blog #{blogID} Review #{reviewID} Page :-)
      </div>
    </>
  );
}

export async function generateStaticParams() {
  // Define your static paths here if necessary
  return [];
}
