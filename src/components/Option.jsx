import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addOption } from "../store/reducer/testSlice";
import Answer from "./Answer";

const Option = ({ testId, id, question, options }) => {
  console.log(options, "option");
  const [inputOption, setInputOption] = useState("");
  const dispatch = useDispatch();
  const newOption = {
    id: Math.random().toString(),
    option: inputOption,
    quationId: id,
    testId: testId,
  };

  const addOptionHandler = () => {
    dispatch(addOption(newOption),setInputOption(''));
  };

  return (
    <div>
      <p>{question}</p>
      <input
        value={inputOption}
        onChange={(e) => setInputOption(e.target.value)}
      />
      <button onClick={addOptionHandler}>add option</button>
      {options.map((option) => (
        <Answer key={option.id} {...option} />
      ))}
    </div>
  );
};
export default Option;
