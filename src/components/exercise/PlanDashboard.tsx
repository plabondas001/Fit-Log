"use client";

import PlanExerciseList from "@/components/exercise/PlanExerciseList";
import PlanTabButton from "@/components/button/planTabButton/PlanTabButton";
import PlanSortSelect from "@/components/button/planSortSelect/PlanSortSelect";
import { ExerciseContext } from "@/context/ExerciseProvider";
import { Flame } from "lucide-react";
import { useContext, useMemo } from "react";

const PlanDashboard = () => {
  const { plan, saved, activePlanTab, planSortBy } = useContext(ExerciseContext);
  const exercises = activePlanTab === "today" ? plan : saved;

  const sortedExercises = useMemo(() => [...exercises].sort((a, b) => {
    if (planSortBy === "rating") return b.rating - a.rating;
    if (planSortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    return a.duration - b.duration;
  }), [exercises, planSortBy]);

  const totalMinutes = exercises.reduce((total, exercise) => total + exercise.duration, 0);
  const totalCalories = exercises.reduce((total, exercise) => total + exercise.caloriesBurned, 0);

  return (
    <>
      <section aria-label="Workout totals" className="stats stats-vertical mt-7 w-full border border-zinc-800 bg-[#12151b] text-white shadow-none md:stats-horizontal">
        <div className="stat px-6 py-5">
          <div className="stat-title text-zinc-400">Exercises</div>
          <div className="stat-value text-[#b6ff00]">{exercises.length}</div>
        </div>
        <div className="stat border-zinc-800 px-6 py-5">
          <div className="stat-title text-zinc-400">Minutes</div>
          <div className="stat-value">{totalMinutes}</div>
        </div>
        <div className="stat border-zinc-800 px-6 py-5">
          <div className="stat-title text-zinc-400">Calories</div>
          <div className="stat-value flex items-center gap-2"><Flame size={24} className="text-[#b6ff00]" />{totalCalories}</div>
        </div>
      </section>

      <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div role="tablist" className="tabs tabs-box w-fit border border-zinc-800 bg-[#14171d] p-1">
          <PlanTabButton tab="today">Today&apos;s Plan</PlanTabButton>
          <PlanTabButton tab="saved">Saved</PlanTabButton>
        </div>
        <PlanSortSelect />
      </div>

      <section className="mt-5 space-y-4" aria-live="polite">
        {sortedExercises.length ? sortedExercises.map((exercise) => (
          <PlanExerciseList key={exercise.id} exercise={exercise} list={activePlanTab} />
        )) : (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-[#12151b] px-6 py-12 text-center">
            <p className="font-semibold text-white">{activePlanTab === "today" ? "Your plan is empty" : "No saved exercises yet"}</p>
            <p className="mt-2 text-sm text-zinc-400">{activePlanTab === "today" ? "Add an exercise from its details page to start your plan." : "Save an exercise from its details page and it will appear here."}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default PlanDashboard;
