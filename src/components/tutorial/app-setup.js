import styled from "styled-components";
import Dialog from "../modal";

const IconRight = styled.i`
  float: right;
`;
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

const NewProjDialog = () => {
  return (
    <Dialog
      id="new-project-dialog"
      title="Run the rollowing command"
      command="npx create-react-app yourProjectNameHere"
    />
  );
};

const DevDepDialog = () => {
  return (
    <Dialog
      id="dev-dep-dialog"
      title="Run the rollowing command"
      description="These devDependences will make our editor smarter and allow us to
    automatically format code and other dev experience benefits."
      command="npm install eslint-config-prettier eslint-plugin-prettier prettier
    gh-pages eslint --save-dev"
    />
  );
};

const DepDialog = () => {
  return (
    <Dialog
      id="dep-dialog"
      title="Run the rollowing command"
      description="These dependences will help us with some common development tasks."
      command="npm install styled-components"
    />
  );
};

const ScriptsDialog = () => {
  return (
    <Dialog
      id="scripts-dialog"
      title="Ensure your package.json scripts matches the following"
      command={`
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build",
          "lint": "eslint .",
          "lint:fix": "eslint --fix",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        },
        `}
    />
  );
};
const ESlintDialog = () => {
  return (
    <Dialog
      id="eslint-dialog"
      title="Run the rollowing command"
      description="These dependences will help us with some common development tasks."
      command={`"eslintConfig": {
        "extends": [
          "eslint:recommended",
          "plugin:react/recommended",
          "plugin:prettier/recommended"
        ],
        "parserOptions": {
          "ecmaFeatures": {
            "jsx": true
          },
          "ecmaVersion": "latest",
          "sourceType": "module"
        },
        "env": {
          "browser": true,
          "es2021": true,
          "jest": true
        },
        "rules": {
          "react/react-in-jsx-scope": "off",
          "react/prop-types": 0
        }
      }`}
    />
  );
};

const GitDialog = () => {
  return (
    <Dialog
      id="git-dialog"
      title="Follow Github's instructions"
      command={
        <a
          target="_blank"
          href="https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github"
          rel="noreferrer"
        >
          Github Documentation Link
        </a>
      }
    />
  );
};

const AppSetup = () => {
  return (
    <section className="nes-container with-title">
      <NewProjDialog />
      <DepDialog />
      <DevDepDialog />
      <GitDialog />
      <ScriptsDialog />
      <ESlintDialog />
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
          <li>
            Install Dev Dependencies
            <DialogButton dialogId="dev-dep-dialog">Code Snippet</DialogButton>
          </li>
          <li>
            Install Dependencies
            <DialogButton dialogId="dep-dialog">Code Snippet</DialogButton>
          </li>

          <li>
            Setup git for your project, and connect to github.
            <DialogButton dialogId="git-dialog">Instructions</DialogButton>
          </li>

          <li>
            Configure Package.json scripts
            <DialogButton dialogId="scripts-dialog">Instructions</DialogButton>
          </li>

          <li>
            Configure package.json eslint
            <DialogButton dialogId="eslint-dialog">Instructions</DialogButton>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AppSetup;

<section></section>;
