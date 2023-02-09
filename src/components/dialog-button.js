import styled from "styled-components";
const InlineButton = styled.button`
  transform: scale(0.5);

  left: -3rem;
`;

const DialogButton = ({ dialogId, children }) => {
  return (
    <InlineButton
      type="button"
      className="nes-btn is-primary"
      onClick={() => {
        document.getElementById(dialogId).showModal();
      }}
    >
      {children}
    </InlineButton>
  );
};

export default DialogButton;
