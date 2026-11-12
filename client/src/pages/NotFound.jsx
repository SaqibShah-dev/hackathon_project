import { Link } from "react-router-dom";
import { Home, SearchX } from "lucide-react";

import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <SearchX size={32} />
      </div>

      <h1 className="text-6xl font-extrabold tracking-tight text-slate-900">
        404
      </h1>

      <h2 className="mt-2 text-xl font-semibold text-slate-800">
        Page not found
      </h2>

      <p className="mt-2 max-w-sm text-slate-500">
        The page you are looking for may have been moved, removed, or never
        existed.
      </p>

      <Link to="/" className="mt-6">
        <Button>
          <Home size={16} className="mr-2 inline" />
          Back to home
        </Button>
      </Link>
    </section>
  );
}