import styled from "styled-components";
import DialogButton from "../dialog-button";
import { GutterListContainer } from "../component-styles";

const IconRight = styled.i`
  float: right;
`;

const GutteredTable = styled(GutterListContainer)`
  margin-bottom: 2rem;
`;

const PageStructure = () => {
  return (
    <section className="nes-container with-title">
      <p className="title">3. Resume Structure</p>

      <section className="message-list">
        <section className="message -right">
          <div className="nes-balloon from-right">
            <p>
              What kinda things would a resume include? What could it look like?
            </p>
          </div>
          <IconRight className="nes-kirby"></IconRight>
        </section>
      </section>

      <GutteredTable className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered">
          <tbody>
            <tr>
              <td>{"    "}</td>
              <td>{"    "}</td>
              <td>{"    "}</td>
              <td>{"    "}</td>
              <td>{"    "}</td>
            </tr>
            <tr>
              <td>{"    "}</td>
              <td colSpan="3">Hero section - big image and name</td>
              <td>{"    "}</td>
            </tr>
            <tr>
              <td>{"    "}</td>
              <td colSpan="3">Achievements / Skills</td>
              <td>{"    "}</td>
            </tr>
            <tr>
              <td>{"    "}</td>
              <td colSpan="3">Previous Work Experience</td>
              <td>{"    "}</td>
            </tr>
            <tr>
              <td>{"    "}</td>
              <td colSpan="3">Testimonials</td>
              <td>{"    "}</td>
            </tr>
            <tr>
              <td>{"    "}</td>
              <td>{"    "}</td>
              <td>{"    "}</td>
              <td>{"    "}</td>
              <td>{"    "}</td>
            </tr>
          </tbody>
        </table>
      </GutteredTable>
      <div className="lists">
        <ul className="nes-list is-circle">
          <li>Content area is centered</li>
          <li>There are 4 main sections</li>
          <li>You can use CSS or styled components</li>
          <li>Challenge yourself and have fun!</li>
        </ul>
      </div>
    </section>
  );
};
export default PageStructure;
