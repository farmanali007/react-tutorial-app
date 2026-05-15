import { Link } from "react-router-dom";
import LessonShell, { Section, Callout } from "./LessonShell.jsx";
import CodeSnippet from "../../../components/learn/CodeSnippet.jsx";
import { introHook, introUserState } from "./snippets.js";

function LearnUseReducerIntro() {
  return (
    <LessonShell title="useReducer — Introduction" nextTo="/topics/use-reducer/compare">
      <Section title="In plain English">
        <p style={{ margin: "0 0 0.75rem" }}>
          React components need to remember things: a counter value, form fields, whether data is
          loading. That remembered data is called <strong>state</strong>.
        </p>
        <p style={{ margin: "0 0 0.75rem" }}>
          You already know <code>useState</code> for simple values. When state gets more complex —
          many related fields, many buttons, updates that depend on the previous state —{" "}
          <code>useReducer</code> helps you organize updates in one predictable place.
        </p>
        <p style={{ margin: 0 }}>
          Think of it like a mailbox: you send a letter (<strong>action</strong>) describing what
          happened, and a clerk (<strong>reducer</strong>) reads it and returns the new state.
        </p>
      </Section>

      <Section title="The hook — code">
        <CodeSnippet title="useReducer syntax" filename="Component.jsx">
          {introHook}
        </CodeSnippet>
        <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
          <li>
            <code>state</code> — current data
          </li>
          <li>
            <code>dispatch</code> — function to send an action
          </li>
          <li>
            <code>reducer</code> — <code>(state, action) =&gt; newState</code>
          </li>
          <li>
            <code>initialState</code> — starting value
          </li>
        </ul>
      </Section>

      <Section title="This tutorial's example: userReducer">
        <p style={{ margin: "0 0 0.75rem" }}>
          We will build a <code>userReducer</code> step by step: profile form fields, fake login,
          and loading a user from an API. The same ideas power larger apps (and libraries like
          Redux use the same pattern).
        </p>
        <CodeSnippet
          title="Combined state shape"
          filename="src/reducers/userReducer.js"
          caption="Profile, auth, and fetch live in one tree — each lesson focuses on one slice."
        >
          {introUserState}
        </CodeSnippet>
      </Section>

      <Callout title="Advanced (optional)" variant="advanced">
        <CodeSnippet title="Lazy initialization" caption="Runs initFn once on mount — useful for expensive initial state.">
{`const [state, dispatch] = useReducer(reducer, props.initialCount, (n) => ({
  count: n,
  history: [],
}));`}
        </CodeSnippet>
      </Callout>

      <p style={{ marginTop: "1rem" }}>
        <Link to="/topics/use-reducer/compare">Start with useState vs useReducer →</Link>
      </p>
    </LessonShell>
  );
}

export default LearnUseReducerIntro;
