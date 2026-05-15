import { useState } from "react";
import { Link } from "react-router-dom";
import LessonShell, { Section } from "./LessonShell.jsx";

const QUESTIONS = [
  {
    id: 1,
    text: "What does useReducer return?",
    options: [
      { id: "a", label: "[state, dispatch]", correct: true },
      { id: "b", label: "[dispatch, state]", correct: false },
      { id: "c", label: "A reducer function", correct: false },
    ],
  },
  {
    id: 2,
    text: "Where should you call fetch() when using useReducer?",
    options: [
      { id: "a", label: "Inside the reducer function", correct: false },
      { id: "b", label: "In useEffect or event handlers, then dispatch results", correct: true },
      { id: "c", label: "Inside dispatch()", correct: false },
    ],
  },
  {
    id: 3,
    text: "What must a reducer NEVER do?",
    options: [
      { id: "a", label: "Return the previous state for unknown actions", correct: false },
      { id: "b", label: "Mutate the state argument directly", correct: true },
      { id: "c", label: "Use a switch statement", correct: false },
    ],
  },
  {
    id: 4,
    text: "What is an action?",
    options: [
      { id: "a", label: "A plain object describing what happened", correct: true },
      { id: "b", label: "A React component", correct: false },
      { id: "c", label: "The same thing as state", correct: false },
    ],
  },
  {
    id: 5,
    text: "Why use ACTION_TYPES constants?",
    options: [
      { id: "a", label: "To avoid typos in action.type strings", correct: true },
      { id: "b", label: "They are required by React", correct: false },
      { id: "c", label: "To make reducers run faster", correct: false },
    ],
  },
  {
    id: 6,
    text: "When is useReducer a good choice over useState?",
    options: [
      { id: "a", label: "For a single boolean toggle only", correct: false },
      { id: "b", label: "When you have related state and many update types", correct: true },
      { id: "c", label: "Always — never use useState", correct: false },
    ],
  },
  {
    id: 7,
    text: "What does dispatch do?",
    options: [
      { id: "a", label: "Sends an action to the reducer to compute the next state", correct: true },
      { id: "b", label: "Immediately mutates state in place", correct: false },
      { id: "c", label: "Replaces the reducer function", correct: false },
    ],
  },
  {
    id: 8,
    text: "In our userReducer fetch flow, what does FETCH_START do?",
    options: [
      { id: "a", label: "Calls the API", correct: false },
      { id: "b", label: "Sets status to loading and clears old data/error", correct: true },
      { id: "c", label: "Logs the user out", correct: false },
    ],
  },
];

function LearnUseReducerQuiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId, optionId) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = QUESTIONS.filter((q) => {
    const selected = answers[q.id];
    const correct = q.options.find((o) => o.correct);
    return selected === correct?.id;
  }).length;

  return (
    <LessonShell title="useReducer quiz">
      <Section title="Test your understanding">
        <p style={{ margin: "0 0 1rem" }}>
          Answer all 8 questions, then click Submit. You can retake by refreshing the page.
        </p>

        {QUESTIONS.map((q, index) => (
          <fieldset
            key={q.id}
            style={{
              margin: "0 0 1rem",
              padding: "0.75rem",
              border: "1px solid #e4e4e7",
              borderRadius: "6px",
            }}
          >
            <legend style={{ fontWeight: 600 }}>
              {index + 1}. {q.text}
            </legend>
            {q.options.map((opt) => {
              const selected = answers[q.id] === opt.id;
              const showResult = submitted && selected;
              const isCorrectOption = opt.correct;
              let color;
              if (submitted && selected) {
                color = opt.correct ? "#15803d" : "#b91c1c";
              } else if (submitted && isCorrectOption) {
                color = "#15803d";
              }

              return (
                <label
                  key={opt.id}
                  style={{
                    display: "block",
                    marginTop: "0.35rem",
                    color,
                    cursor: submitted ? "default" : "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    checked={selected}
                    onChange={() => handleSelect(q.id, opt.id)}
                    disabled={submitted}
                  />{" "}
                  {opt.label}
                  {showResult && (opt.correct ? " ✓" : " ✗")}
                </label>
              );
            })}
          </fieldset>
        ))}

        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < QUESTIONS.length}
          >
            Submit answers
          </button>
        ) : (
          <p style={{ fontWeight: 600 }}>
            Score: {score} / {QUESTIONS.length}
            {score === QUESTIONS.length
              ? " — Excellent!"
              : score >= 6
                ? " — Good job! Review the lessons for any misses."
                : " — Review the lessons and try again."}
          </p>
        )}
      </Section>

      <p style={{ marginTop: "1rem" }}>
        <Link to="/topics/use-reducer">← Back to introduction</Link>
      </p>
    </LessonShell>
  );
}

export default LearnUseReducerQuiz;
