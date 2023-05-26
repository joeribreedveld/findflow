// Imports
import classNames from "classnames";

// Functions
const AnswerListItem = ({ option, answer, correct }: TAnswerListItemProps) => (
  <li
    className={classNames({
      "flex items-center gap-8 rounded-2xl bg-[#eee] p-4 text-lg": !correct,
      "flex items-center gap-8 rounded-2xl bg-[#F39D10] p-4 text-lg font-bold text-white":
        correct,
    })}
  >
    <section className="flex aspect-square w-[53px] items-center justify-center rounded-2xl bg-white text-2xl font-bold text-[#2B8585]">
      {option}
    </section>
    <p>{answer}</p>
  </li>
);

// Exports
export default AnswerListItem;
