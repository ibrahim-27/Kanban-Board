import {atom} from 'jotai';

export const tasksAtom = atom([
    {
      id: 1,
      title: "Fix Login Page",
      description: "There is an issue with the login page styling.",
      status: "InProgress",
      tags: ["Bug", "Frontend"],
    },
    {
      id: 2,
      title: "Implement Drag and Drop",
      description: "Add drag and drop functionality to the Kanban board.",
      status: "Backlog",
      tags: ["Feature", "Frontend"],
    },
    {
      id: 3,
      title: "Update Documentation",
      description: "Update the project documentation with the latest changes.",
      status: "Completed",
      tags: ["Documentation"],
    },
    {
      id: 4,
      title: "Refactor Backend Code",
      description: "Refactor backend code for better performance and readability.",
      status: "InProgress",
      tags: ["Improvement", "Backend"],
    },
    {
      id: 5,
      title: "Add Unit Tests",
      description: "Write unit tests to ensure code reliability.",
      status: "Backlog",
      tags: ["Feature", "Testing"],
    },
    {
      id: 6,
      title: "Fix Database Connection Issue",
      description: "Resolve the intermittent database connection issue.",
      status: "InProgress",
      tags: ["Bug", "Backend"],
    },
    {
      id: 7,
      title: "Optimize Frontend Performance",
      description: "Improve frontend performance by optimizing code.",
      status: "Backlog",
      tags: ["Improvement", "Frontend"],
    },
    {
      id: 8,
      title: "Write User Guide",
      description: "Create a user guide for the application.",
      status: "Completed",
      tags: ["Documentation"],
    },
  ]);