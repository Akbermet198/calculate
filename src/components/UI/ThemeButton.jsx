import { useContext } from "react";
import styled from "styled-components";
import { ThemesContext, useTodoContext } from "../../store/ThemeProvider";

export const ThemeButton = ({ children, onClick }) => {
  const { theme } = useTodoContext();

  console.log(theme);

  return (
    <>
      <StyledButton
        style={
          theme === "dark"
            ? {
                backgroundColor: "#4c2f15",
                color:"white"
                
              }
            : {
                backgroundColor: "#87edb0",
                color:"black"  
              }
        }
        onClick={onClick}
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
