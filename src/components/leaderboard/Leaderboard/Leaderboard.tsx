// Imports
import LeaderboardItem from "../../other/LeaderboardItem/LeaderboardItem";

// Functions
const Leaderboard = () => (
  <section className="h-full w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Leaderboard</h2>
    <ul className="flex flex-col gap-4">
      <LeaderboardItem variant="winner" name="Gert Hak" number="1" />
      <LeaderboardItem name="Young Lil" number="2" />
      <LeaderboardItem name="Rob Hoog" number="3" />
    </ul>
  </section>
);

// Exports
export default Leaderboard;
