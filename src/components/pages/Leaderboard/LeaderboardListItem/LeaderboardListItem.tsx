// Imports
import classNames from "classnames";

// Functions
const LeaderboardListItem = ({
  variant,
  name,
  number,
}: TLeaderboardListItemProps) => (
  <li
    className={classNames("flex items-center gap-6 rounded-2xl px-6 py-2 ", {
      "bg-[#F39D10] text-white": variant === "winner",
    })}
  >
    <p className="text-2xl font-semibold">{number}</p>
    <div className="h-[40px] w-[40px] rounded-full bg-gray-500"></div>
    <h3 className="font-semibold">{name}</h3>
  </li>
);

// Exports
export default LeaderboardListItem;
