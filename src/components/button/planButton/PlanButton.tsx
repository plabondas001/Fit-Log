"use client";

import { ExerciseContext } from "@/context/ExerciseProvider";
import { IExercise } from "@/types/data.type";
import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ exercisePlan }: { exercisePlan: IExercise }) => {
  const { plan, setPlan } = useContext(ExerciseContext);

  const handleExercisePlan = () => {
    const alreadyExists = plan.find(
      (exercise) => exercise.id === exercisePlan.id,
    );

    if (alreadyExists) {
      toast.warning(`${exercisePlan.name} is already in today's plan.`);
      return;
    }

    setPlan([...plan, exercisePlan]);
    toast.success(`${exercisePlan.name} added to today's plan.`);
  };

  return (
    <div>
      <button
        onClick={() => handleExercisePlan()}
        type="button"
        className="flex items-center gap-2 rounded-lg bg-[#b6ff00] px-4 py-2.5 cursor-pointer text-[12px] font-bold text-black transition hover:bg-[#c8ff3d]"
      >
        <CalendarPlus size={15} />
        Add to today's plan
      </button>
    </div>
  );
};

export default PlanButton;
