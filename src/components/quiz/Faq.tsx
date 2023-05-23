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

const FaqItem = () => (
  <li className="border-b border-[#eee] py-6">
    <p className="font-semibold">Faq vraag voorbeeld placeholder</p>
  </li>
);

export default Faq;
