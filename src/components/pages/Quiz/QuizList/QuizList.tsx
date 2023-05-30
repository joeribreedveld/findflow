// Imports
import { log } from "console";
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
      setQuizData(data.quizData);
    };

    fetchData();
  }, []);

  return (
    <ul className="grid h-full grid-cols-3 gap-6 p-6">
      {quizData.map((quiz: TQuiz) => (
        <QuizListItem
          id={quiz.id}
          title={quiz.title}
          date={quiz.date}
          img={quiz.img}
          key={quiz.id}
        />
      ))}
    </ul>
  );
};

// Exports
export default QuizList;
