import LessonShell, { Section, Callout } from "./LessonShell.jsx";
import CodeSnippet, { DemoBlock } from "../../../components/learn/CodeSnippet.jsx";
import UserFetchDemo from "../../../components/topics/use-reducer/UserFetchDemo.jsx";
import { fetchReducer, fetchEffect } from "./snippets.js";

function LearnUseReducerFetch() {
  return (
    <LessonShell title="Async fetch with useReducer" nextTo="/topics/use-reducer/quiz">
      <Section title="In plain English">
        <p style={{ margin: "0 0 0.75rem" }}>
          Loading data from an API usually means three UI states: idle, loading, and success or
          error. One <code>fetch</code> slice in the reducer tracks <code>status</code>,{" "}
          <code>data</code>, and <code>error</code> together.
        </p>
        <p style={{ margin: 0 }}>
          The <code>fetch()</code> call runs in <code>useEffect</code>. The reducer only receives
          dispatch calls — it stays pure.
        </p>
      </Section>

      <Section title="Code — fetchReducer">
        <CodeSnippet title="FETCH_START, SUCCESS, ERROR" filename="src/reducers/userReducer.js">
          {fetchReducer}
        </CodeSnippet>
      </Section>

      <Section title="Code — fetch in useEffect (not in reducer)">
        <CodeSnippet
          title="Side effect + dispatch"
          filename="UserFetchDemo.jsx"
          caption="API call lives here; reducer only updates status/data/error."
        >
          {fetchEffect}
        </CodeSnippet>
      </Section>

      <Section title="Live demo">
        <DemoBlock
          title="Try it yourself"
          hint="Try id 1 or 5 for success, 99 for error. Watch status change: idle → loading → success/error."
        >
          <UserFetchDemo />
        </DemoBlock>
      </Section>

      <Callout title="Sequence" variant="info">
        <CodeSnippet title="Flow" caption="UI → useEffect → fetch → dispatch → reducer → re-render">
{`1. User clicks "Load"     →  useEffect runs
2. dispatch(fetchStart())  →  status: "loading"
3. fetch(url) completes    →  dispatch(fetchSuccess(data))
4. Reducer returns new state → UI shows user name`}
        </CodeSnippet>
      </Callout>
    </LessonShell>
  );
}

export default LearnUseReducerFetch;
