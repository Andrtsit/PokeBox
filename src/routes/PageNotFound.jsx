import { Link } from "react-router";

function PageNotFound() {
  return (
    <main className="bg-amber-100 flex flex-col gap-3 items-center justify-center h-dvh">
      <div className="font-semibold text-xl text-black">Page Not Found :(</div>
      <Link
        className="font-semibold text-2xl text-amber-700 hover:text-amber-900"
        to="/"
      >
        Go Home
      </Link>
    </main>
  );
}

export default PageNotFound;
