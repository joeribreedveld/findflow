type TQuizInfoItemProps = {
  title: string;
  answer: string;
};

const QuizInfo = () => (
  <section className="w-[30rem] rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Quiz informatie</h2>
    <ul className="mb-12 flex flex-col gap-8">
      <QuizInfoItem title="Aantal vragen" answer="20 vragen" />
      <QuizInfoItem title="Gemiddelde score" answer="16/20" />
      <QuizInfoItem title="Gemaakt door" answer="Gert Jan" />
      <QuizInfoItem title="Quiz code" answer="#LKAWA3492083" />
    </ul>
    <button className="rounded-2xl bg-[#F39D10] px-8 py-4 font-bold text-white">
      Resultaten
    </button>
  </section>
);

const QuizInfoItem = ({ title, answer }: TQuizInfoItemProps) => (
  <li>
    <h3 className="text-2xl font-bold">{answer}</h3>
    <p className="font-bold text-[#2B8585]">{title}</p>
  </li>
);

export default QuizInfo;
