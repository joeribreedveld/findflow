// Imports
import LeaderboardListItem from "../LeaderboardListItem/LeaderboardListItem";

// Functions
const LeaderboardList = () => (
  <section className="h-full w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">LeaderboardList</h2>
    <ul className="flex flex-col gap-4">
      <LeaderboardListItem variant="winner" name="Gert Hak" number="1" />
      <LeaderboardListItem name="Young Lil" number="2" />
      <LeaderboardListItem name="Rob Hoog" number="3" />
    </ul>
  </section>
);

// Exports
export default LeaderboardList;
