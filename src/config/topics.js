/**
 * Central registry of React learning topics.
 * Add new topics here as the platform grows.
 */
export const topics = [
  {
    id: "use-reducer",
    title: "useReducer",
    tagline: "Manage complex state with reducers, actions, and dispatch",
    description:
      "Learn the useReducer hook from scratch using a userReducer example: profile forms, auth, and API fetch—with live demos and comparisons to useState.",
    status: "available",
    basePath: "/topics/use-reducer",
    lessons: [
      { path: "", label: "Introduction" },
      { path: "compare", label: "vs useState" },
      { path: "pattern", label: "Reducer pattern" },
      { path: "form", label: "User form" },
      { path: "auth", label: "Auth" },
      { path: "fetch", label: "Fetch API" },
      { path: "quiz", label: "Quiz" },
    ],
  },
  {
    id: "use-state",
    title: "useState",
    tagline: "Component state fundamentals",
    description: "Coming soon — interactive lessons on useState.",
    status: "coming-soon",
    basePath: "/topics/use-state",
    lessons: [],
  },
  {
    id: "use-effect",
    title: "useEffect",
    tagline: "Side effects and data fetching",
    description: "Coming soon — interactive lessons on useEffect.",
    status: "coming-soon",
    basePath: "/topics/use-effect",
    lessons: [],
  },
  {
    id: "use-context",
    title: "useContext",
    tagline: "Share state without prop drilling",
    description: "Coming soon — interactive lessons on useContext.",
    status: "coming-soon",
    basePath: "/topics/use-context",
    lessons: [],
  },
];

export function getTopic(topicId) {
  return topics.find((t) => t.id === topicId);
}

export function getAvailableTopics() {
  return topics.filter((t) => t.status === "available");
}
