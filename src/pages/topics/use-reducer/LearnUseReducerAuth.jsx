import LessonShell, { Section, Callout } from "./LessonShell.jsx";
import CodeSnippet, { DemoBlock } from "../../../components/learn/CodeSnippet.jsx";
import UserAuthDemo from "../../../components/topics/use-reducer/UserAuthDemo.jsx";
import { authReducer, authUsage } from "./snippets.js";

function LearnUseReducerAuth() {
  return (
    <LessonShell title="Auth state with LOGIN / LOGOUT" nextTo="/topics/use-reducer/fetch">
      <Section title="In plain English">
        <p style={{ margin: "0 0 0.75rem" }}>
          Login flows touch several related values: <code>isLoggedIn</code>, <code>userName</code>,{" "}
          and <code>error</code>. Putting them in one <code>auth</code> object and one reducer keeps
          updates consistent.
        </p>
        <p style={{ margin: 0 }}>
          The reducer never checks passwords — the component validates, then dispatches the outcome.
        </p>
      </Section>

      <Section title="Code — authReducer">
        <CodeSnippet title="LOGIN, LOGOUT, SET_AUTH_ERROR" filename="src/reducers/userReducer.js">
          {authReducer}
        </CodeSnippet>
      </Section>

      <Section title="Code — component dispatches result">
        <CodeSnippet
          title="Validate in component, update in reducer"
          filename="UserAuthDemo.jsx"
          caption="Form typing uses local useState; auth outcome uses the reducer."
        >
          {authUsage}
        </CodeSnippet>
      </Section>

      <Section title="Live demo">
        <DemoBlock
          title="Try it yourself"
          hint="Log in with demo / react123. Try wrong credentials to see SET_AUTH_ERROR."
        >
          <UserAuthDemo />
        </DemoBlock>
      </Section>

      <Callout title="Common mistakes" variant="warning">
        <p style={{ margin: 0 }}>
          Do not put <code>fetch</code> or <code>localStorage</code> inside the reducer. Side
          effects belong in event handlers or <code>useEffect</code>.
        </p>
      </Callout>
    </LessonShell>
  );
}

export default LearnUseReducerAuth;
