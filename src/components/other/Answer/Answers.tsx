import AnswerOption from "../AnswerOption/AnswerOption";

const Answers = () => (
  <section className="h-full w-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Antwoorden</h2>
    <ul className="flex flex-col gap-6">
      <AnswerOption option="A" answer="20 jaar" correct />
      <AnswerOption option="B" answer="30 jaar" />
      <AnswerOption option="C" answer="24 jaar" />
    </ul>
  </section>
);

export default Answers;
