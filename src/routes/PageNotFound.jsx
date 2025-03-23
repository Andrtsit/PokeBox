import { Link } from "react-router";

function PageNotFound() {
  return (
    <main className=" font-display bg-red-600 flex flex-col gap-16 items-center justify-center h-dvh">
      <div className=" text-xl text-black">Page Not Found(404)</div>
      <Link className=" text-2xl text-black hover:text-white" to="/">
        Go Home
      </Link>
    </main>
  );
}

export default PageNotFound;
