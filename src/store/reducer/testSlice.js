import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    tests: [],
  },
  reducers: {
    addTest(state, actions) {
      state.tests.push(actions.payload);
      //   console.log(actions.payload);
    },
    addQuestion(state, actions) {
      const findQuestion = state.tests.find(
        (item) => item.id === actions.payload.titleId
      );
      findQuestion.questions.push(actions.payload.newQuestion);
    },
    addOption(state, { payload }) {
      const findTestId = state.tests.find((test) => test.id === payload.testId);
      const findQuationId = findTestId.questions.find(
        (quation) => quation.id === payload.quationId
      );
      findQuationId.options.push(payload);
    },

    // const findOption = state.tests.find(
    //   (item) => item.id === actions.payload.otherId
    // );
    // findOption.options.push(actions.payload.newOption);
    // // console.log(actions.payload);
    // console.log(state.tests.questions.options);
  },
});
export const { addTest, addQuestion, addOption } = testSlice.actions;
export default testSlice;
