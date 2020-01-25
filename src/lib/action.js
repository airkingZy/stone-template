import { shallowEqual, useSelector } from "react-redux";
const TestChangeName1 = (state, initialState, action) => {
  return {
    ...state,
    name: action.name + "sb"
  };
};
const TestChangeName2 = (state, playload) => {};

// export default TestChangeName;
module.exports = {
  TestChangeName1,
  TestChangeName2
};
