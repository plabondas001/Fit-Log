import React from "react";
import ExerciseCard from "./ExerciseCard";
import { IExercise } from "@/types/data.type";
import { getData } from "@/lib/GetData";
const Exercise = async () => {
  const allData = await getData();

  return (
   
    <div className="container mx-auto my-15">
      <h1 className="font-bold text-3xl">THE LIBRARY</h1>
      <p>Twelve lifts covering every major muscle group.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3 cursor-pointer">
        {allData.map((exercise: IExercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
   
  );
};

export default Exercise;
