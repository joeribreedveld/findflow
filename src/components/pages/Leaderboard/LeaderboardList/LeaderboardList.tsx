// Imports
import LeaderboardListItem from "../LeaderboardListItem/LeaderboardListItem";

// Functions
const LeaderboardList = () => (
  <section className="h-full w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">LeaderboardList</h2>
    <ul className="flex flex-col gap-4">
      <LeaderboardListItem
        variant="winner"
        name="Gert Hak"
        number="1"
        img="/img/student-5.jpg"
      />
      <LeaderboardListItem
        name="Koek Dik"
        number="2"
        img="/img/student-4.jpg"
      />
      <LeaderboardListItem
        name="Peter Pannekoek"
        number="3"
        img="/img/student-6.jpg"
      />
    </ul>
  </section>
);

// Exports
export default LeaderboardList;
