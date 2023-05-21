import classNames from "classnames";

type TQuestionProps = {
  variant?: "selected";
};

const QuestionList = () => (
  <section className="w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Vragenlijst</h2>
    <ul className="flex flex-col gap-4">
      <Question variant="selected" />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </ul>
  </section>
);

const Question = ({ variant }: TQuestionProps) => (
  <li
    className={classNames(
      "flex items-center justify-between rounded-2xl px-6 py-4",
      {
        "bg-[#eee]": variant === "selected",
      }
    )}
  >
    <div className="flex items-center gap-8">
      <p>1.</p>
      <p>Hoe oud is Karel Appel</p>
    </div>
    <div className="flex items-center gap-4">
      <button className="rounded-lg bg-[#B2CEEE] px-4 py-2 text-xs font-bold text-[#054B7D]">
        Edit
      </button>
      <button className="rounded-lg bg-[#EFC4C4] px-4 py-2 text-xs font-bold text-[#A71616]">
        Delete
      </button>
    </div>
  </li>
);

export default QuestionList;
