import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  div {
    min-height: 500px;
  }
`;

// If you are actually looking at the code -- how can we improve this section?
const LightContainer = ({ children }) => {
  return <div className="nes-container is-rounded">{children}</div>;
};
const DarkContainerWithTitle = ({ children, title }) => {
  return (
    <div className="nes-container with-title is-dark">
      <p className="title">{title}</p>
      {children}
    </div>
  );
};
const LightContainerWithTitle = ({ children, title }) => {
  return (
    <div className="nes-container with-title">
      <p className="title">{title}</p>
      {children}
    </div>
  );
};

// override the dark list style to be make the before white
const DarkList = styled.ul`
  li:before {
    color: white;
  }
`;

const SkillsAndObjectives = () => {
  return (
    <LightContainer>
      <FlexContainer>
        <FlexItem>
          <LightContainerWithTitle title="Skills">
            <div className="lists">
              <ul className="nes-list is-disc">
                <li>Learn React JS</li>
                <li>Setup a project</li>
                <li>Push to public Github</li>
                <li>Deploy to Github Pages</li>
              </ul>
            </div>
          </LightContainerWithTitle>
        </FlexItem>

        <FlexItem>
          <DarkContainerWithTitle title="Objectives">
            <div className="lists">
              <DarkList className="nes-list is-circle">
                <li>Create a Resume site for Mario</li>
                <li>
                  Previous Work Experience (maybe he worked as a barista, or a
                  pokemone gym trainer)
                </li>
                <li>Achievements</li>
                <li>Skills</li>
                <li>Testimonials</li>
              </DarkList>
            </div>
          </DarkContainerWithTitle>
        </FlexItem>
      </FlexContainer>
    </LightContainer>
  );
};

export default SkillsAndObjectives;
