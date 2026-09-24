import PlanDashboard from "@/components/exercise/PlanDashboard";

const PlanPage = () => (
  <main className="container mx-auto my-10 w-full max-w-7xl px-4 text-white sm:my-14">
    <h1 className="text-3xl font-bold">MY PLAN</h1>
    <p className="mt-2 text-sm text-zinc-400">Plan your workout and keep exercises for later.</p>
    <PlanDashboard />
  </main>
);

export default PlanPage;
