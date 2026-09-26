"use client";

import { Check } from "lucide-react";
import { ExerciseContext } from "@/context/ExerciseProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const DoneButton = ({ exerciseId }: { exerciseId: number }) => {
  const { plan, setPlan } = useContext(ExerciseContext);

  const markAsDone = () => {
    const removedExercise = plan.find((exercise) => exercise.id === exerciseId);

    setPlan(plan.filter((exercise) => exercise.id !== exerciseId));

    if (removedExercise) {
      toast.success("Exercise marked as done!");
    }
  };

  return (
    <button
      type="button"
      onClick={markAsDone}
      className="btn btn-sm rounded-full border-0 bg-[#b6ff00] px-5 text-xs font-bold text-black hover:bg-[#c8ff3d]"
    >
      <Check size={15} />
      Mark as Done
    </button>
  );
};

export default DoneButton;
