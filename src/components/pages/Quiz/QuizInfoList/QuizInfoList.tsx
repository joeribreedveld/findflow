// Imports
import Link from "next/link";
import QuizInfoListItem from "../QuizInfoItem/QuizInfoListItem";

// Functions
const QuizInfoList = () => (
  <section className="w-[30rem] rounded-2xl bg-white p-8">
    <h2 className="mb-2 text-xl font-semibold">Quiz informatie</h2>
    <p className="mb-6">01-01-2023</p>
    <ul className="mb-10 flex flex-col gap-4">
      <QuizInfoListItem title="Aantal vragen" answer="20 vragen" />
      <QuizInfoListItem title="Gemiddelde score" answer="16/20" />
      <QuizInfoListItem title="Gemaakt door" answer="Gert Jan" />
      <QuizInfoListItem title="Quiz code" answer="#LKAWA3492083" />
    </ul>
    <Link href="/results">
      <button className="rounded-2xl bg-[#F39D10] px-8 py-4 font-semibold text-white transition duration-200 ease-in-out hover:brightness-90">
        Resultaten
      </button>
    </Link>
  </section>
);

// Exports
export default QuizInfoList;
