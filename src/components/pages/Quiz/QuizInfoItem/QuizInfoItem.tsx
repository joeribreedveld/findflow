// Functions
const QuizInfoListItem = ({ title, answer }: TQuizInfoListItemProps) => (
  <li>
    <h3 className="mb-1 text-xl font-semibold">{answer}</h3>
    <p className="font-semibold text-[#2B8585]">{title}</p>
  </li>
);

// Exports
export default QuizInfoListItem;
