import ExerciseDetailsCard from "@/components/exercise/ExerciseDetailsCard";
import { getData } from "@/lib/GetData";
import { IExercise } from "@/types/data.type";
import React from "react";

interface IExerciseParams {
  params: {
    id: string;
  };
}

const ExerciseDetailsPage = async ({ params }: IExerciseParams) => {
  const { id } = await params;
  const data = await getData();

  const exercise = data.find(
    (exercise: IExercise) => exercise.id === Number(id),
  );

  return (
    <div>
      <ExerciseDetailsCard exercise={exercise} />
    </div>
  );
};

export default ExerciseDetailsPage;
