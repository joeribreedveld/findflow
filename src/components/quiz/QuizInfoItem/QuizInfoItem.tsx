// Functions
const QuizInfoItem = ({ title, answer }: TQuizInfoItemProps) => (
  <li>
    <h3 className="text-2xl font-bold">{answer}</h3>
    <p className="font-bold text-[#2B8585]">{title}</p>
  </li>
);

// Exports
export default QuizInfoItem;
