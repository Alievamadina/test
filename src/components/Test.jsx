import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTest } from "../store/reducer/testSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Question from "./Question";
import "./Test.css";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [value, setValue] = useState("");
  const { tests } = useSelector((state) => state.tests);
  console.log(tests);
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const newTests = {
    id: Math.random().toString(),
    title: value,
    questions: [],
  };

  const addTestHandler = (e) => {
    e.preventDefault();
    dispatch(addTest(newTests), setValue(''));
  };

  const saveDataHandler = () => {
    nagivate("/test");
  };

  return (
    <div className="submit">
      <form onSubmit={addTestHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {tests.map((test) => (
        <Question key={test.id} {...test} />
      ))}
      <button onClick={saveDataHandler}>Сохранить</button>
    </div>
  );
};

export default Test;
