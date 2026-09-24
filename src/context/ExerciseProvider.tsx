'use client'
import { IExercise } from '@/types/data.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IExerciseContext{
    plan:IExercise[],
    setPlan: React.Dispatch<React.SetStateAction<IExercise[]>>,
    saved: IExercise[],
    setSaved: React.Dispatch<React.SetStateAction<IExercise[]>>,
    doneExerciseIds: number[],
    setDoneExerciseIds: React.Dispatch<React.SetStateAction<number[]>>,
    activePlanTab: "today" | "saved",
    setActivePlanTab: React.Dispatch<React.SetStateAction<"today" | "saved">>,
    planSortBy: "duration" | "rating" | "calories",
    setPlanSortBy: React.Dispatch<React.SetStateAction<"duration" | "rating" | "calories">>
}

export const ExerciseContext = createContext<IExerciseContext>({
    plan:[],
    setPlan:() => {},
    saved:[],
    setSaved:() => {},
    doneExerciseIds:[],
    setDoneExerciseIds:() => {},
    activePlanTab:"today",
    setActivePlanTab:() => {},
    planSortBy:"duration",
    setPlanSortBy:() => {},
})

const ExerciseProvider = ({children}:{children:ReactNode}) => {
    const [plan, setPlan] = useState<IExercise[]>([])
    const [saved, setSaved] = useState<IExercise[]>([])
    const [doneExerciseIds, setDoneExerciseIds] = useState<number[]>([])
    const [activePlanTab, setActivePlanTab] = useState<"today" | "saved">("today")
    const [planSortBy, setPlanSortBy] = useState<"duration" | "rating" | "calories">("duration")

    const sharedData = {
        plan, 
        setPlan,
        saved,
        setSaved,
        doneExerciseIds,
        setDoneExerciseIds,
        activePlanTab,
        setActivePlanTab,
        planSortBy,
        setPlanSortBy,
    }

    return <ExerciseContext.Provider value={sharedData}>
        {children}
    </ExerciseContext.Provider>
};

export default ExerciseProvider;
