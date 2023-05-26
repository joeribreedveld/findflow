import FaqItem from "./FaqItem/FaqItem";

const Faq = () => (
  <section className="h-full rounded-2xl bg-white p-8">
    <h2 className="mb-8 text-xl font-bold">Veelgestelde vragen</h2>
    <ul>
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
    </ul>
  </section>
);

export default Faq;
