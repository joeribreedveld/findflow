// Imports
import classNames from "classnames";
import Image from "next/image";

// Functions
const StudentListItem = ({
  variant,
  name,
  score,
  img,
}: TStudentListItemProps) => (
  <li
    className={classNames(
      "flex items-center justify-between rounded-2xl px-6 py-4",
      {
        "bg-[#eee]": variant === "selected",
      }
    )}
  >
    <div className="flex items-center gap-4">
      <Image
        src={img}
        alt="Student"
        width={40}
        height={40}
        className="h-[40px] w-[40px] rounded-full object-cover"
      />
      <p>{name}</p>
    </div>
    <div className="flex items-center gap-4">
      <p>{score}</p>
    </div>
  </li>
);

// Exports
export default StudentListItem;
