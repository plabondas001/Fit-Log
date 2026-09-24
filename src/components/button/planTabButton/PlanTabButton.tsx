"use client";

import { ExerciseContext } from "@/context/ExerciseProvider";
import { useContext } from "react";

const PlanTabButton = ({ tab, children }: { tab: "today" | "saved"; children: React.ReactNode }) => {
  const { activePlanTab, setActivePlanTab } = useContext(ExerciseContext);
  const active = activePlanTab === tab;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => setActivePlanTab(tab)}
      className={`tab ${active ? "tab-active bg-[#20242d] text-white" : "text-zinc-400"}`}
    >
      {children}
    </button>
  );
};

export default PlanTabButton;
