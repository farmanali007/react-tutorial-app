import LessonShell, { Section, Callout } from "./LessonShell.jsx";
import CodeSnippet, { DemoBlock } from "../../../components/learn/CodeSnippet.jsx";
import UserFormDemo from "../../../components/topics/use-reducer/UserFormDemo.jsx";
import { formReducer, formHook, formActionCreator } from "./snippets.js";

function LearnUseReducerForm() {
  return (
    <LessonShell title="User form with SET_FIELD" nextTo="/topics/use-reducer/auth">
      <Section title="In plain English">
        <p style={{ margin: "0 0 0.75rem" }}>
          Forms have several fields that change together. Instead of one <code>useState</code> per
          field, we keep one profile object and dispatch <code>SET_FIELD</code> with the field name
          and new value.
        </p>
        <p style={{ margin: 0 }}>
          The reducer copies the state and updates one key — that is <strong>immutability</strong>.
        </p>
      </Section>

      <Section title="Code — profileReducer">
        <CodeSnippet title="SET_FIELD and RESET" filename="src/reducers/userReducer.js">
          {formReducer}
        </CodeSnippet>
      </Section>

      <Section title="Code — action creator">
        <CodeSnippet
          title="setField helper"
          filename="src/hooks/useUserReducer.js"
          caption="Action creators keep dispatch calls readable."
        >
          {formActionCreator}
        </CodeSnippet>
      </Section>

      <Section title="Code — component usage">
        <CodeSnippet title="Controlled inputs" filename="UserFormDemo.jsx">
          {formHook}
        </CodeSnippet>
      </Section>

      <Section title="Live demo">
        <DemoBlock
          title="Try it yourself"
          hint="Type in the fields and click Reset. The JSON state below shows profile updates in real time."
        >
          <UserFormDemo />
        </DemoBlock>
      </Section>

      <Callout title="Common mistakes" variant="warning">
        <p style={{ margin: 0 }}>
          Do not write <code>state.name = value</code> inside the reducer. Always return a new
          object with spread syntax.
        </p>
      </Callout>
    </LessonShell>
  );
}

export default LearnUseReducerForm;
