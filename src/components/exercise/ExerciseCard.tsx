import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { IExercise } from "@/types/data.type";
import Link from "next/link";

interface ExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link href={`/workout/${exercise.id}`}>
      <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
        {/* Image */}
        <div className="relative h-[190px] w-full overflow-hidden">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b6ff00] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
            {exercise.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-zinc-400">{exercise.equipment}</p>

          {/* Divider */}
          <div className="my-4 h-px bg-zinc-800" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <Clock3 size={16} />
              <span>{exercise.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <Flame size={16} />
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star size={16} />
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
