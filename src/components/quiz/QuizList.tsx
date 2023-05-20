const QuizList = () => (
  <ul className="grid h-full grid-cols-3 gap-6 p-6">
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
  </ul>
);

const Quiz = () => (
  <li className="h-full">
    <article className="flex h-full flex-col">
      <section className="h-full rounded-t-2xl bg-gray-200"></section>
      <section className="flex flex-col gap-4 rounded-b-2xl bg-white px-8 py-6">
        <section className="flex h-full w-full justify-between gap-6">
          <h4 className="font-medium">Het leven van Karel Appel lorem ipsum</h4>
          <a href="#" className="text-sm text-[#2B8585] underline">
            Resultaten
          </a>
        </section>
        <section className="flex h-full justify-between">
          <p>08-05-2023</p>
          <button>share</button>
        </section>
      </section>
    </article>
  </li>
);

export default QuizList;
