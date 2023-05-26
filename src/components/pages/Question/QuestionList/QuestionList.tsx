// Imports
import QuestionListItem from "../QuestionListItem/QuestionListItem";
import { AiOutlinePlusCircle } from "react-icons/ai";

// Functions
const QuestionList = () => (
  <section className="w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Vragenlijst</h2>
    <ul className="flex flex-col gap-4">
      <QuestionListItem variant="selected" />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
    </ul>
    <section className="mt-8 flex w-full items-center justify-center">
      <button className="w-fit rounded-2xl bg-[#F39D10] px-8 py-4 font-bold text-white">
        <AiOutlinePlusCircle className="mr-4 inline-block text-2xl" />
        Nieuwe vraag
      </button>
    </section>
  </section>
);

// Exports
export default QuestionList;
