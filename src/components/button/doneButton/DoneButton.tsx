"use client";

import { Check } from "lucide-react";
import { ExerciseContext } from "@/context/ExerciseProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const DoneButton = ({ exerciseId, exerciseName }: { exerciseId: number; exerciseName: string }) => {
  const { doneExerciseIds, setDoneExerciseIds } = useContext(ExerciseContext);
  const isDone = doneExerciseIds.includes(exerciseId);

  const toggleDone = () => {
    if (isDone) {
      setDoneExerciseIds((current) => current.filter((id) => id !== exerciseId));
      toast.info(`${exerciseName} marked as not done.`);
      return;
    }

    setDoneExerciseIds((current) => [...current, exerciseId]);
    toast.success(`${exerciseName} marked as done!`);
  };

  return (
    <button
      type="button"
      onClick={toggleDone}
      className={`btn btn-sm rounded-full border-0 px-5 text-xs font-bold ${
        isDone ? "bg-zinc-700 text-white" : "bg-[#b6ff00] text-black hover:bg-[#c8ff3d]"
      }`}
    >
      <Check size={15} />
      {isDone ? "Completed" : "Mark as Done"}
    </button>
  );
};

export default DoneButton;
