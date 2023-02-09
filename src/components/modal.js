import styled from "styled-components";

const DescSpan = styled.span`
  margin-bottom: 1rem;
  display: block;
`;

const StyledDialog = styled.dialog`
  max-width: 80%;
`;

const Dialog = ({ title, description, command, id }) => {
  return (
    <StyledDialog className="nes-dialog" id={id}>
      <form method="dialog">
        <p className="title nes-text is-primary">{title}</p>
        <DescSpan>{description}</DescSpan>
        <div className="nes-container is-rounded is-dark">
          <p>{command}</p>
        </div>
        <menu className="dialog-menu">
          <button className="nes-btn is-primary">Close</button>
        </menu>
      </form>
    </StyledDialog>
  );
};

export default Dialog;
