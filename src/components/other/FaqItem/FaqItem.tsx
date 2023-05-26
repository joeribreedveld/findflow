// Imports
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

// Functions
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

// Exports
export default FaqItem;
