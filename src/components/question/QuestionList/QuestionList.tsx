import QuestionListItem from "../QuestionListItem";

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
  </section>
);

export default QuestionList;
