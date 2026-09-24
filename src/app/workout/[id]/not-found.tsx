import Link from "next/link";
import { Dumbbell } from "lucide-react";

const ExerciseNotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-[#171920]">
          <Dumbbell size={38} className="text-[#b6ff00]" />
        </div>

        <h1 className="text-7xl font-black tracking-tight text-white">404</h1>

        <h2 className="mt-4 text-2xl font-bold uppercase text-white">
          Exercise Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
          The exercise you are looking for doesn't exist or may have been
          removed from our workout library.
        </p>

        <Link
          href="/workout"
          className="mt-7 inline-flex items-center rounded-lg bg-[#b6ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#c8ff3d]"
        >
          ← Back to Exercises
        </Link>
      </div>
    </main>
  );
};

export default ExerciseNotFound;
