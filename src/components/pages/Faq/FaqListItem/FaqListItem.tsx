// Imports
import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

// Functions
const FaqListItem = ({ question, answer }: TFaqListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b border-[#eee] py-6">
      <p
        className="cursor-pointer font-medium"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <AiOutlineMinusCircle className="mr-4 inline-block text-2xl text-[#2B8585]" />
        ) : (
          <AiOutlinePlusCircle className="mr-4 inline-block text-2xl text-[#2B8585]" />
        )}
        {question}
      </p>
      {isOpen && <p className="mt-4">{answer}</p>}
    </li>
  );
};

// Exports
export default FaqListItem;
