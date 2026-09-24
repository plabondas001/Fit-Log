"use client";

import { ExerciseContext } from "@/context/ExerciseProvider";
import { X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface RemoveButtonProps {
  exerciseId: number;
  exerciseName: string;
  list: "today" | "saved";
}

const Remove = ({ exerciseId, exerciseName, list }: RemoveButtonProps) => {
  const { setPlan, setSaved, setDoneExerciseIds } = useContext(ExerciseContext);

  const handleRemove = () => {
    const updateList = list === "today" ? setPlan : setSaved;
    updateList((current) => current.filter((exercise) => exercise.id !== exerciseId));
    if (list === "today") {
      setDoneExerciseIds((current) => current.filter((id) => id !== exerciseId));
    }
    toast.success(`${exerciseName} removed successfully!`);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleRemove}
        aria-label={`Remove ${exerciseName}`}
        title={`Remove ${exerciseName}`}
        className="btn btn-ghost btn-square btn-sm text-zinc-500 hover:bg-zinc-800 hover:text-white"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Remove;
