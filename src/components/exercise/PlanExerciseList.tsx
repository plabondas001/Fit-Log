import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { IExercise } from "@/types/data.type";
import DoneButton from "../button/doneButton/DoneButton";
import Remove from "../button/removeButton/Remove";

interface PlanExerciseListProps {
  exercise: IExercise;
  list: "today" | "saved";
}

const PlanExerciseList = ({ exercise, list }: PlanExerciseListProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-[#14171d] p-4 md:flex-row md:items-center md:justify-between">
      
      <div className="flex items-center gap-4">
        
        <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

       
        <div>
          <h2 className="text-base font-bold uppercase text-white">
            {exercise.name}
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            {exercise.equipment}
          </p>

          
          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            
            <span className="flex items-center gap-1">
              <Clock3
                size={15}
                className="text-[#b6ff00]"
              />
              {exercise.duration} min
            </span>

            
            <span className="flex items-center gap-1">
              <Flame
                size={15}
                className="text-[#b6ff00]"
              />
              {exercise.caloriesBurned} kcal
            </span>

            
            <span className="flex items-center gap-1">
              <Star
                size={15}
                className="text-[#b6ff00]"
              />
              {exercise.rating}
            </span>
          </div>
        </div>
      </div>

      
      <div className="flex items-center gap-3">
        
        <Link
          href={`/workout/${exercise.id}`}
          className="rounded-full border border-zinc-700 px-5 py-2.5 text-xs font-medium text-white transition hover:border-zinc-500"
        >
          View Details
        </Link>

        
        {list === "today" && <DoneButton exerciseId={exercise.id} />}

        
        <Remove exerciseId={exercise.id} exerciseName={exercise.name} list={list} />
      </div>
    </div>
  );
};

export default PlanExerciseList;
