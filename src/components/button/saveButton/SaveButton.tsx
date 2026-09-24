"use client";

import { ExerciseContext } from "@/context/ExerciseProvider";
import { IExercise } from "@/types/data.type";
import { Bookmark, BookmarkCheck } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const SaveButton = ({ exercise }: { exercise: IExercise }) => {
  const { saved, setSaved } = React.useContext(ExerciseContext);
  const isSaved = saved.some((item) => item.id === exercise.id);

  const handleSave = () => {
    if (isSaved) {
      toast.warning(`${exercise.name} is already saved.`);
      return;
    }

    setSaved((current) => [...current, exercise]);
    toast.success(`${exercise.name} saved for later.`);
  };

  return (
    <div>
      <button
        onClick={handleSave}
        type="button"
        className="flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2.5 cursor-pointer text-[12px] font-medium text-zinc-300 transition hover:bg-zinc-800"
      >
        {isSaved ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default SaveButton;
