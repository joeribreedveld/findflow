// Imports
import QuestionListItem from "../QuestionListItem/QuestionListItem";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";

// Functions
const QuestionList = ({ empty = false }: TQuestionListProps) => (
  <section className="w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">Vragenlijst</h2>
    {!empty && (
      <ul className="flex flex-col gap-4">
        <QuestionListItem
          variant="selected"
          question="Hoe oud is Karel Appel?"
          number="1"
        />
        <QuestionListItem question="Had Karel Appel een broer?" number="1" />
        <QuestionListItem question="Wat voor beroep had Karel?" number="2" />
        <QuestionListItem question="Waar woonde Karel Appel?" number="3" />
        <QuestionListItem question="Waarom is Karel beroemd?" number="4" />
        <QuestionListItem
          question="Wat is het beroemdste werk van Karel?"
          number="5"
        />
        <QuestionListItem question="Wie is Karel Appel?" number="6" />
        <QuestionListItem question="Hoe oud is Karel Appel?" number="7" />
      </ul>
    )}

    <section className="mt-8 flex w-full items-center justify-center">
      <Link href="/question">
        <button className="w-fit rounded-2xl bg-[#F39D10] px-8 py-4 font-semibold text-white transition duration-200 ease-in-out hover:brightness-90">
          <AiOutlinePlusCircle className="mr-4 inline-block text-2xl" />
          Nieuwe vraag
        </button>
      </Link>
    </section>
  </section>
);

// Exports
export default QuestionList;
