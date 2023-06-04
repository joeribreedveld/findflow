// Imports
import classNames from "classnames";
import Link from "next/link";

// Functions
const QuestionListItem = ({
  variant,
  number,
  question,
}: TQuestionListItemProps) => (
  <li
    className={classNames(
      "flex items-center justify-between rounded-2xl px-6 py-4",
      {
        "bg-[#eee]": variant === "selected",
      }
    )}
  >
    <div className="flex items-center gap-8">
      <p>{number}.</p>
      <p>{question}</p>
    </div>
    <div className="flex items-center gap-4">
      <Link href="/question">
        <button className="rounded-lg bg-[#B2CEEE] px-4 py-2 text-xs font-semibold text-[#054B7D]">
          Wijzigen
        </button>
      </Link>
      <button className="rounded-lg bg-[#EFC4C4] px-4 py-2 text-xs font-semibold text-[#A71616]">
        Verwijderen
      </button>
    </div>
  </li>
);

// Exports
export default QuestionListItem;
