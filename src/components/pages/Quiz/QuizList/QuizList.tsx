// Imports
import QuizListItem from "../QuizListItem/QuizListItem";
import { useEffect, useState } from "react";

// Functions
async function getQuizData() {
  const res = await fetch("/api/quiz");
  const data = await res.json();

  return data;
}

const QuizList = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuizData();
      setQuizData(data);

      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <ul className="grid h-full grid-cols-3 gap-6 p-6">
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
    </ul>
  );
};

// Exports
export default QuizList;
