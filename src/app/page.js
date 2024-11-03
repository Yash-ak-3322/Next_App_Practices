import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="text-cyan-600 flex justify-center items-center space-x-5 font-thin uppercase p-3 transition-transform ">
        <Link href="\profile" className="transform hover:text-green-400">
          {" "}
          Profile{" "}
        </Link>{" "}
        <p> | </p>
        <Link href="\about" className="transform hover:text-green-400">
          {" "}
          About{" "}
        </Link>{" "}
        <p> | </p>
        <Link href="\blogs" className="transform hover:text-green-400">
          {" "}
          Blog{" "}
        </Link>{" "}
        <p> | </p>
      </div>
    </>
  );
}
