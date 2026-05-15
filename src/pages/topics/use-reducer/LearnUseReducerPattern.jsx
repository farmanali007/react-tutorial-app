import LessonShell, { Section, Callout } from "./LessonShell.jsx";
import CodeSnippet, { DemoBlock } from "../../../components/learn/CodeSnippet.jsx";
import PatternCounterDemo from "../../../components/topics/use-reducer/PatternCounterDemo.jsx";
import { patternReducer, patternDispatch } from "./snippets.js";

function LearnUseReducerPattern() {
  return (
    <LessonShell title="The reducer pattern" nextTo="/topics/use-reducer/form">
      <Section title="In plain English">
        <p style={{ margin: "0 0 0.75rem" }}>
          A <strong>reducer</strong> is a pure function: given the current state and an{" "}
          <strong>action</strong>, it returns the <em>next</em> state. It must not mutate the old
          state, call APIs, or read <code>localStorage</code>.
        </p>
        <p style={{ margin: 0 }}>
          An <strong>action</strong> is a plain object, usually with a <code>type</code> string and
          optional <code>payload</code>. It describes <em>what happened</em>, not how to update
          state — that logic lives in the reducer.
        </p>
      </Section>

      <Section title="Code — the reducer function">
        <CodeSnippet
          title="Pure reducer with action types"
          filename="counterReducer.js"
          caption="Each case returns a new value. Never mutate state."
        >
          {patternReducer}
        </CodeSnippet>
      </Section>

      <Section title="Code — wiring the hook">
        <CodeSnippet title="useReducer + dispatch" filename="Counter.jsx">
          {patternDispatch}
        </CodeSnippet>
      </Section>

      <Section title="Live demo">
        <DemoBlock
          title="Try it yourself"
          hint="Watch the State Inspector below the buttons — state updates after each dispatch."
        >
          <PatternCounterDemo />
        </DemoBlock>
      </Section>

      <Callout title="Common mistakes" variant="warning">
        <CodeSnippet title="Wrong vs right" caption="Mutating state breaks React — always return a new value.">
{`// WRONG — mutates state
case ACTIONS.INCREMENT:
  state.count++;
  return state;

// RIGHT — returns new state
case ACTIONS.INCREMENT:
  return state + 1;`}
        </CodeSnippet>
      </Callout>
    </LessonShell>
  );
}

export default LearnUseReducerPattern;
