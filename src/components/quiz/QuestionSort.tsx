const QuestionSort = () => (
  <section className="rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Vraag soort</h2>
    <div className="flex gap-6">
      <button className="w-full rounded-2xl bg-[#F39D10] py-6 text-lg font-bold text-white">
        Meerkeuze
      </button>
      <button className="w-full rounded-2xl bg-[#eee] py-6 text-lg">
        Open
      </button>
    </div>
  </section>
);

export default QuestionSort;
