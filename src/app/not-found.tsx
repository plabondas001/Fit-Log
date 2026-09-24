import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4">
      <div className="w-full max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-[#171920]">
          <Dumbbell size={38} strokeWidth={1.8} className="text-[#b6ff00]" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-black leading-none tracking-tight text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-5 text-2xl font-black uppercase tracking-wide text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
          Sorry, the page you are looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-[#b6ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#c8ff3d]"
          >
            <Home size={16} />
            Go Home
          </Link>

          <Link
            href="/workout"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800"
          >
            <Dumbbell size={16} />
            Workouts
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
