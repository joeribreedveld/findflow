// Imports
import classNames from "classnames";

// Functions
const Student = ({ variant }: TStudentProps) => (
  <li
    className={classNames(
      "flex items-center justify-between rounded-2xl px-6 py-4",
      {
        "bg-[#eee]": variant === "selected",
      }
    )}
  >
    <div className="flex items-center gap-4">
      <div className="h-[40px] w-[40px] rounded-full bg-gray-500"></div>
      <p>Student naam</p>
    </div>
    <div className="flex items-center gap-4">
      <p>14/20</p>
    </div>
  </li>
);

// Exports
export default Student;
