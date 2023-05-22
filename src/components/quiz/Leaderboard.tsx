import classNames from "classnames";
import { number } from "zod";

type TLeaderboardItemProps = {
  variant?: "winner";
  name: string;
  number: string;
};

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

const LeaderboardItem = ({ variant, name, number }: TLeaderboardItemProps) => (
  <li
    className={classNames("flex items-center gap-6 rounded-2xl px-6 py-2 ", {
      "bg-[#F39D10] text-white": variant === "winner",
    })}
  >
    <p className="text-2xl font-bold">{number}</p>
    <div className="h-[40px] w-[40px] rounded-full bg-gray-500"></div>
    <h3 className="font-bold">{name}</h3>
  </li>
);

export default Leaderboard;
