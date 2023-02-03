import { useContext } from "react";
import styled from "styled-components";
import { ThemesContext, useTodoContext } from "../../store/ThemeProvider";
import { ThemeButton } from "../UI/ThemeButton";

export const Header = () => {
  const { theme } = useTodoContext();
  const context = useContext(ThemesContext);

  return (
    <>
      <StyledHeader
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
        <ThemeButton color={"chartreuse"} onClick={context.setDark}>
          Dark Theme
        </ThemeButton>
        <ThemeButton color={"chartreuse"} onClick={context.setLight}>
          Light Theme
        </ThemeButton>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.div`
  margin: 0 auto;

  height: 100px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
