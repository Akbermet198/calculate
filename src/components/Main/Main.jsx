import { useReducer } from "react";
import styled from "styled-components";
import { useTodoContext } from "../../store/ThemeProvider";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

const stateReducer = (state, action) => {
  if (action.type === "changeFirstInput") {
    return {
      ...state,
      firstValue: action.firstValue,
    };
  }
  if (action.type === "changeSecondInput") {
    return {
      ...state,
      secondValue: action.secondValue,
    };
  }
  if (action.type === "operation" && action.operation === "+") {
    return {
      ...state,
      operation: action.operation,
      result: Number(state.firstValue) + Number(state.secondValue),
    };
  }
  if (action.type === "operation" && action.operation === "-") {
    return {
      ...state,
      operation: action.operation,
      result: Number(state.firstValue) - Number(state.secondValue),
    };
  }
  if (action.type === "operation" && action.operation === "*") {
    return {
      ...state,
      operation: action.operation,
      result: Number(state.firstValue) * Number(state.secondValue),
    };
  }
  if (action.type === "operation" && action.operation === "/") {
    return {
      ...state,
      operation: action.operation,
      result: Number(state.firstValue) / Number(state.secondValue),
    };
  }
};

export const Main = () => {
  const { theme } = useTodoContext();

  const [inputState, dispatchState] = useReducer(stateReducer, {
    firstValue: "",
    secondValue: "",
    operation: "",
  });

  const onChangeFirstInput = (event) => {
    dispatchState({ type: "changeFirstInput", firstValue: event.target.value });
    console.log(inputState);
  };

  const onChangeSecondInput = (event) => {
    dispatchState({
      type: "changeSecondInput",
      secondValue: event.target.value,
    });
  };

  return (
    <>
      <StyledMainDiv
        style={
          theme === "dark"
            ? {
                backgroundColor: "#726f32",
              }
            : {
                backgroundColor: "#a2ccf1",
              }
        }
      >
        <StyledDiv>
          <Input value={inputState.firstValue} onChange={onChangeFirstInput} />
          <Input
            value={inputState.secondValue}
            onChange={onChangeSecondInput}
          />
        </StyledDiv>

        <StyledDiv>
          <Button dispatchState={dispatchState}>+</Button>
          <Button dispatchState={dispatchState}>-</Button>
          <Button dispatchState={dispatchState}>*</Button>
          <Button dispatchState={dispatchState}>/</Button>
        </StyledDiv>
        <p
          style={
            theme === "dark"
              ? {
                  color: "white",
                }
              : {
                  color: "black",
                }
          }
        >
          {inputState.result}
        </p>
      </StyledMainDiv>
    </>
  );
};

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledMainDiv = styled.div`
  margin: 0 auto;
  width: 500px;

  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;
