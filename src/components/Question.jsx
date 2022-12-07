import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addQuestion } from "../store/reducer/testSlice";
import Option from "./Option";

const Question = ({ title, id, questions }) => {
  const [inputQuestion, setInputQuestion] = useState("");
  const dispatch = useDispatch();
  console.log(questions, "question");
  console.log(id, "question");
  const newQuestion = {
    question: inputQuestion,
    testId: id,
    id: Date.now().toString(),
    options: [],
  };
  console.log(newQuestion);
  const addQuestionHandler = () => {
    dispatch(addQuestion({ newQuestion, titleId: id }),setInputQuestion(''));
  };
  return (
    <div>
      <h1>{title}</h1>
      <input
        value={inputQuestion}
        onChange={(e) => setInputQuestion(e.target.value)}
      />
      <button onClick={addQuestionHandler} >add question</button>
      {questions.map((question) => (
        <Option key={question.id} {...question} />
      ))}
    </div>
  );
};

export default Question;
