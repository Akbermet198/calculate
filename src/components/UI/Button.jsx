import { useContext } from "react";
import styled from "styled-components";
import { ThemesContext, useTodoContext } from "../../store/ThemeProvider";

export const Button = ({ children, color, dispatchState }) => {
 
  const { theme } = useTodoContext();
 
   
  const onClickButton = (event) => {
    event.preventDefault();
    dispatchState({
      type: "operation",
      operation: children,
    });
  };
  return (
    <>
      <StyledButton
        style={
         theme === "dark"
         ? {
             backgroundColor:  "#4c2f15",
             color:"white"
           }
         : {
             backgroundColor: "#87edb0",
             color:"black"  

           }
        }
        onClick={onClickButton}
      >
        {children}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  border: none;
  padding: 0 20px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;
