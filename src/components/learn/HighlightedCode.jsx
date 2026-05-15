import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const editorTheme = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    margin: 0,
    padding: "1rem 1.125rem",
    background: "#1e1e1e",
    fontSize: "0.8125rem",
    lineHeight: 1.6,
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: "transparent",
    fontSize: "0.8125rem",
    fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', 'Monaco', monospace",
  },
};

function HighlightedCode({ code, language }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={editorTheme}
      showLineNumbers
      wrapLongLines
      customStyle={{ margin: 0, borderRadius: 0 }}
      lineNumberStyle={{
        minWidth: "2.25em",
        paddingRight: "1em",
        color: "#858585",
        userSelect: "none",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default HighlightedCode;
