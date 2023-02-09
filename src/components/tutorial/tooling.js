import styled from "styled-components";
import DialogButton from "../dialog-button";
import { GutterListContainer } from "../component-styles";
import Dialog from "../modal";

const NesDialog = () => {
  return (
    <Dialog
      id="nes-dialog"
      title="NES CSS"
      command={
        <a
          target="_blank"
          href="https://nostalgic-css.github.io/NES.css/"
          rel="noreferrer"
        >
          NES CSS Link
        </a>
      }
    ></Dialog>
  );
};

const CRADialog = () => {
  return (
    <Dialog
      id="cra-dialog"
      title="Create React App"
      command={
        <a
          target="_blank"
          href="https://create-react-app.dev/"
          rel="noreferrer"
        >
          Create React App Link
        </a>
      }
    ></Dialog>
  );
};

const GHDialog = () => {
  return (
    <Dialog
      id="gh-dialog"
      title="Static Website Hosting"
      command={
        <a
          target="_blank"
          href="https://github.com/tschaub/gh-pages"
          rel="noreferrer"
        >
          Static Website Hosting Link
        </a>
      }
    ></Dialog>
  );
};

const IconLeft = styled.i`
  display: block;
`;

const Tooling = () => {
  return (
    <section className="nes-container with-title">
      <p className="title">2. Tooling</p>
      <GHDialog />
      <NesDialog />
      <CRADialog />

      <section className="message-list">
        <section className="message -left">
          <div className="nes-balloon from-left">
            <p>
              This section goes in depth a bit more on some of the individual
              tools we are using
            </p>
          </div>
          <IconLeft className="nes-ash"></IconLeft>
        </section>
      </section>

      <GutterListContainer className="lists">
        <ul className="nes-list is-disc">
          <li>
            The style-system | NES.css
            <DialogButton dialogId="nes-dialog">Learn More</DialogButton>
          </li>
          <li>
            The generator | Create React App
            <DialogButton dialogId="cra-dialog">Learn More</DialogButton>
          </li>
          <li>
            Static Website Hosting | gh-pages
            <DialogButton dialogId="gh-dialog">Learn More</DialogButton>
          </li>
        </ul>
      </GutterListContainer>
    </section>
  );
};
export default Tooling;
