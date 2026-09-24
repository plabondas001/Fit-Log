import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { IExercise } from "@/types/data.type";
import PlanButton from "../button/planButton/PlanButton";
import SaveButton from "../button/saveButton/SaveButton";

interface ExerciseDetailsProps {
  exercise: IExercise;
}

const ExerciseDetails = ({ exercise }: ExerciseDetailsProps) => {
  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Main Details Card */}
        <div className="rounded-2xl border border-zinc-800 bg-[#101216] p-5 md:p-6">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1.05fr]">
            <div className="relative h-[400px] overflow-hidden rounded-xl sm:h-[500px] lg:h-[560px]">
              <Image
                src={exercise.image}
                alt={exercise.name}
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                {exercise.name}
              </h1>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-400">
                {exercise.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exercise.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#b6ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800 bg-[#171920]">
                <InfoRow label="EQUIPMENT" value={exercise.equipment} />

                <InfoRow label="DIFFICULTY" value={exercise.difficulty} />

                <InfoRow label="SETS" value={exercise.sets} />

                <InfoRow label="REPS" value={exercise.reps} />

                <InfoRow label="DURATION" value={`${exercise.duration} min`} />

                <InfoRow
                  label="CALORIES"
                  value={`${exercise.caloriesBurned} kcal`}
                />

                <InfoRow label="RATING" value={exercise.rating} last />
              </div>

              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wide text-white">
                  Instructions
                </h2>

                <ol className="mt-3 space-y-2">
                  {exercise.instructions.map((instruction, index) => (
                    <li
                      key={instruction}
                      className="flex gap-2 text-[13px] leading-4 text-zinc-400"
                    >
                      <span className="shrink-0 text-zinc-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <PlanButton exercisePlan={exercise} />
                <SaveButton exercise={exercise} />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 border-t border-zinc-800 pt-5 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Clock3 size={15} />
              <span>{exercise.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <Flame size={15} />
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={15} />
              <span>{exercise.rating}</span>
            </div>

            <div>
              <span className="text-zinc-500">Equipment:</span>{" "}
              {exercise.equipment}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link
            href="/workout"
            className="text-xs text-zinc-500 transition hover:text-[#b6ff00]"
          >
            ← Back to exercises
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetails;

interface InfoRowProps {
  label: string;
  value: string | number;
  last?: boolean;
}

const InfoRow = ({ label, value, last = false }: InfoRowProps) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        !last ? "border-b border-zinc-800" : ""
      }`}
    >
      <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
        {label}
      </span>

      <span className="text-xs font-medium text-zinc-300">{value}</span>
    </div>
  );
};
