import styled from "styled-components";
import DialogButton from "../dialog-button";
import { GutterListContainer } from "../component-styles";

const IconRight = styled.i``;

const Tooling = () => {
  return (
    <section className="nes-container with-title">
      <p className="title">2. Tooling</p>

      <section className="message-list">
        <section className="message -left">
          <div className="nes-balloon from-left">
            <p>
              This section goes in depth a bit more on some of the individual
              tools we are using
            </p>
          </div>
          <IconRight className="nes-ash"></IconRight>
        </section>
      </section>

      <GutterListContainer className="lists">
        <ul className="nes-list is-disc">
          <li>
            The style-system | NES.css
            <DialogButton dialogId="new-project-dialog">
              Learn More
            </DialogButton>
          </li>
          <li>
            The generator | Create React App
            <DialogButton dialogId="dev-dep-dialog">Code Snippet</DialogButton>
          </li>
          <li>
            Static Website Hosting | gh-pages
            <DialogButton dialogId="dep-dialog">Code Snippet</DialogButton>
          </li>
        </ul>
      </GutterListContainer>
    </section>
  );
};
export default Tooling;
