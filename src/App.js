import "nes.css/css/nes.min.css";
import styled from "styled-components";
import Title from "./components/title";
import SkillsAndObjectives from "./components/skills-and-objectives";
import AppSetup from "./components/tutorial/app-setup";

// Create a global wrapper around the entire app -- here we can apply some page specific styling
const AppContainer = styled.div`
  margin-top: 1rem;
`;
const CenteredH2 = styled.h2`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Title />
      <SkillsAndObjectives />
      <CenteredH2>Tutorial</CenteredH2>
      <AppSetup />
    </AppContainer>
  );
}

export default App;
