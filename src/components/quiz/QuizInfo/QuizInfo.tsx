// Imports
import Link from "next/link";
import QuizInfoItem from "../QuizInfoItem/QuizInfoItem";

// Functions
const QuizInfo = () => (
  <section className="w-[30rem] rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Quiz informatie</h2>
    <ul className="mb-12 flex flex-col gap-8">
      <QuizInfoItem title="Aantal vragen" answer="20 vragen" />
      <QuizInfoItem title="Gemiddelde score" answer="16/20" />
      <QuizInfoItem title="Gemaakt door" answer="Gert Jan" />
      <QuizInfoItem title="Quiz code" answer="#LKAWA3492083" />
    </ul>
    <Link href="/results">
      <button className="rounded-2xl bg-[#F39D10] px-8 py-4 font-bold text-white">
        Resultaten
      </button>
    </Link>
  </section>
);

// Exports
export default QuizInfo;
