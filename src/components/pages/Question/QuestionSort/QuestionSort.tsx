// Functions
const QuestionSort = () => (
  <section className="rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">Vraag soort</h2>
    <div className="flex gap-6">
      <button className="w-full rounded-2xl bg-[#F39D10] py-6 text-lg font-semibold text-white transition duration-200 ease-in-out hover:brightness-90">
        Meerkeuze
      </button>
      <button className="w-full rounded-2xl bg-[#eee] py-6 text-lg transition duration-200 ease-in-out hover:bg-gray-300 hover:brightness-90">
        Open
      </button>
    </div>
  </section>
);

// Exports
export default QuestionSort;
