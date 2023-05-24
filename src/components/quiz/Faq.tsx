import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

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

const FaqItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b border-[#eee] py-6">
      <p
        className="cursor-pointer font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlinePlusCircle className="mr-4 inline-block text-2xl text-[#2B8585]" />
        Faq vraag voorbeeld placeholder
      </p>
      {isOpen && <p className="mt-4">Faq text uitklapbaar</p>}
    </li>
  );
};

export default Faq;
