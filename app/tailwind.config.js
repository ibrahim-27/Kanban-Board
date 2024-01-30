/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#F2F6FE",
        "theme-primary": "#754BE5",
        "theme-secondary": "#1E0059",
        "text-secondary": "#74707B",
        "text-primary": "#0E0818",
        "tag-design": "#29ABE2",
        "tag-backend": "#546E7A",
        "tag-frontend": "#457B9D",
        "tag-testing": "#F59E0B",
        "tag-urgent": "#D55E00",
        "tag-bug": "#E53935",
        "tag-feature": "#007BFF",
        "tag-improvement": "#27AE60",
        "tag-documentation": "#5E6C84",
        "tag-high-priority": "#DA4453",
        "tag-medium-priority": "#FFC107",
        "tag-low-priority": "#7CB342",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-tag-urgent",
    "bg-tag-frontend",
    "bg-tag-design",
    "bg-tag-backend",
    "bg-tag-testing",
    "bg-tag-bug",
    "bg-tag-feature",
    "bg-tag-improvement",
    "bg-tag-documentation",
    "bg-tag-high-priority",
    "bg-tag-medium-priority",
    "bg-tag-low-priority"
  ],
};
