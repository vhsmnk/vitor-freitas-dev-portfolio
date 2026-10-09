import "./code-atmosphere.css";

const fragments = [
  {
    className: "code-fragment code-one",
    lines: [
      "const buildExperience = () => {",
      "  return <DigitalSolution />;",
      "};",
    ],
  },
  {
    className: "code-fragment code-two",
    lines: [
      "function createInterface() {",
      "  return responsive && intuitive;",
      "}",
    ],
  },
  {
    className: "code-fragment code-three",
    lines: [
      "const styles = {",
      '  design: "minimal",',
      '  performance: "optimized",',
      "};",
    ],
  },
  {
    className: "code-fragment code-four",
    lines: [
      "import React from 'react';",
      "export default function App() {",
      "  return <Experience />;",
      "}",
    ],
  },
  {
    className: "code-fragment code-five",
    lines: [
      "if (idea) {",
      "  design();",
      "  develop();",
      "  deploy();",
      "}",
    ],
  },
];

export default function CodeAtmosphere() {
  return (
    <div className="code-atmosphere" aria-hidden="true">
      {fragments.map((fragment) => (
        <pre className={fragment.className} key={fragment.className}>
          {fragment.lines.map((line, index) => (
            <span
              className="code-line"
              key={`${fragment.className}-${index}`}
              style={{ "--line-index": index }}
            >
              {line}
            </span>
          ))}
        </pre>
      ))}
    </div>
  );
}