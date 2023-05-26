// Imports
import QuestionListItem from "../QuestionListItem/QuestionListItem";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";

// Functions
const QuestionList = () => (
  <section className="w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">Vragenlijst</h2>
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
      <Link href="/question">
        <button className="w-fit rounded-2xl bg-[#F39D10] px-8 py-4 font-semibold text-white">
          <AiOutlinePlusCircle className="mr-4 inline-block text-2xl" />
          Nieuwe vraag
        </button>
      </Link>
    </section>
  </section>
);

// Exports
export default QuestionList;
