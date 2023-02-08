import styled from "styled-components";

const IconRight = styled.i`
  float: right;
`;

const DialogButton = ({ dialogId, children }) => {
  return (
    <button
      type="button"
      className="nes-btn is-primary"
      onClick={() => {
        document.getElementById(dialogId).showModal();
      }}
    >
      {children}
    </button>
  );
};
const NewProjDialog = () => {
  return (
    <dialog className="nes-dialog" id="new-project-dialog">
      <form method="dialog">
        <p className="title">Run the rollowing command</p>
        <div className="nes-container is-rounded is-dark">
          <p>npx create-react-app yourProjectNameHere</p>
        </div>
        <menu className="dialog-menu">
          <button className="nes-btn is-primary">Close</button>
        </menu>
      </form>
    </dialog>
  );
};

const AppSetup = () => {
  return (
    <section className="nes-container with-title">
      <NewProjDialog />
      <p className="title">1. App Setup</p>

      <section className="message-list">
        <section className="message -right">
          <div className="nes-balloon from-right">
            <p>
              Project setup can be hard, with some things just not working right
              as everyones machine is slightly different. Ideally lets do this
              one together.
            </p>
          </div>
          <IconRight className="nes-squirtle"></IconRight>
        </section>
      </section>

      <div className="lists">
        <ul className="nes-list is-disc">
          <li>
            Run create-react-app to create a new project folder.{" "}
            <DialogButton dialogId="new-project-dialog">Get Help</DialogButton>
          </li>

          <li>Open this new project folder inside of VS Code</li>
          <li>Install Miscellanious Dependencies ()</li>
          <li>Good night.</li>
        </ul>
      </div>
    </section>
  );
};

export default AppSetup;

<section></section>;
