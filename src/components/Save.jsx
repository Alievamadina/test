import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import Test from "./Test";
const Save = () => {
  const { tests } = useSelector((state) => state.tests);
  console.log(tests);
  return (
    <>
      <Link to="/Test"></Link>

      {tests.map((test) => (
        <TestStyled key={test.id}>
          <h1>Name {test.title}</h1>
          {test.questions.map((question) => (
            <QuestionStyled>
              <h1>Question: {question.question}</h1>
              {question.options.map((option) => (
                <VariantsStyled>
                  <h2>
                    <input type="radio" name="question"/>
                    {option.option}
                  </h2>
                </VariantsStyled>
              ))}
            </QuestionStyled>
          ))}
        </TestStyled>
      ))}
    </>
  );
};

export default Save;

const TestStyled = styled.div`
  & {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background-color: #91ded4;
    margin: 50px;
    border-radius: 15px;
  }
`;

const VariantsStyled = styled.div`
  & {
    width: 80%;
    margin: 0 auto;
  }
  & h2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const QuestionStyled = styled.div`
  & {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
`;
