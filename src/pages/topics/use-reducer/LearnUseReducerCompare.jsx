import LessonShell, { Section, Callout } from "./LessonShell.jsx";
import CodeSnippet, { DemoBlock } from "../../../components/learn/CodeSnippet.jsx";
import CounterCompareDemo from "../../../components/topics/use-reducer/CounterCompareDemo.jsx";
import { compareUseState, compareUseReducer } from "./snippets.js";

function LearnUseReducerCompare() {
  return (
    <LessonShell title="useState vs useReducer" nextTo="/topics/use-reducer/pattern">
      <Section title="In plain English">
        <p style={{ margin: "0 0 0.75rem" }}>
          For a single number like a counter, <code>useState</code> is perfect: you call{" "}
          <code>setCount(count + 1)</code> and React stores the new value.
        </p>
        <p style={{ margin: 0 }}>
          <code>useReducer</code> does the same job differently: you call{" "}
          <code>dispatch(&#123; type: 'INCREMENT' &#125;)</code> and a reducer function computes the
          next count. The UI behavior is identical — the organization changes as apps grow.
        </p>
      </Section>

      <Section title="Code — useState approach">
        <CodeSnippet title="Direct state updates" filename="Counter.jsx (useState)">
          {compareUseState}
        </CodeSnippet>
      </Section>

      <Section title="Code — useReducer approach">
        <CodeSnippet
          title="Updates via reducer + dispatch"
          filename="Counter.jsx (useReducer)"
          caption="Logic moves into counterReducer; buttons only dispatch actions."
        >
          {compareUseReducer}
        </CodeSnippet>
      </Section>

      <Section title="Comparative live demo">
        <DemoBlock
          title="Try it yourself"
          hint="Click Increment/Decrement on both sides. Same result — different code structure."
        >
          <CounterCompareDemo />
        </DemoBlock>
      </Section>

      <Callout title="When to prefer useReducer" variant="info">
        <p style={{ margin: 0 }}>
          Choose <code>useReducer</code> when you have several related pieces of state, many event
          types, or the next state depends heavily on the previous state (forms, wizards, auth
          flows).
        </p>
      </Callout>
    </LessonShell>
  );
}

export default LearnUseReducerCompare;
