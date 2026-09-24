"use client";

import { ExerciseContext } from "@/context/ExerciseProvider";
import { useContext } from "react";

const PlanSortSelect = () => {
  const { planSortBy, setPlanSortBy } = useContext(ExerciseContext);

  return (
    <div className="flex  items-center gap-3">
      <h1>Sort by</h1>
      <label className="flex items-center gap-3 text-sm text-zinc-400">
        <select
        aria-label="Sort exercises"
        className="select select-md cursor-pointer select-bordered border-zinc-700 bg-[#14171d] text-white"
        value={planSortBy}
        onChange={(event) => setPlanSortBy(event.target.value as typeof planSortBy)}
      >
        <option value="duration">Duration</option>
        <option value="rating">Rating</option>
        <option value="calories">Calories</option>
      </select>
    </label>
    </div>
  );
};

export default PlanSortSelect;
