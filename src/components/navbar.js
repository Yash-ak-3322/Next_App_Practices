import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="p-5 text-blue-900 font-serif text-3xl flex justify-center underline transition-transform transform hover:text-orange-600">
        {" "}
        <Link href="\"> Jay Shree Swaminarayan :-) </Link>
      </div>
    </>
  );
}
