// Imports
import FaqListItem from "../FaqListItem/FaqListItem";

// Functions
const FaqList = () => (
  <section className="h-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-semibold">Veelgestelde vragen</h2>
    <ul>
      <FaqListItem />
      <FaqListItem />
      <FaqListItem />
      <FaqListItem />
      <FaqListItem />
      <FaqListItem />
    </ul>
  </section>
);

// Exports
export default FaqList;
