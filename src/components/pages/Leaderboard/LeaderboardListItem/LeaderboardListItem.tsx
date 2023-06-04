// Imports
import classNames from "classnames";
import Image from "next/image";

// Functions
const LeaderboardListItem = ({
  variant,
  name,
  number,
  img,
}: TLeaderboardListItemProps) => (
  <li
    className={classNames("flex items-center gap-6 rounded-2xl px-6 py-2 ", {
      "bg-[#F39D10] text-white": variant === "winner",
    })}
  >
    <p className="text-2xl font-semibold">{number}</p>
    <Image
      src={img}
      alt="Student"
      width={40}
      height={40}
      className="h-[40px] w-[40px] rounded-full object-cover"
    />
    <h3 className="font-semibold">{name}</h3>
  </li>
);

// Exports
export default LeaderboardListItem;
