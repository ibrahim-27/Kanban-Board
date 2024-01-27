import React, { useState } from "react";
import BoardCol from "./BoardCol";
import { DndContext } from "@dnd-kit/core";

const Board = () => {
  const [cols, setCols] = useState(["Backlog", "InProgress", "Completed"]);

  let dummyTasks = [
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
      description:
        "Refactor backend code for better performance and readability.",
      status: "InProgress",
      tags: ["Improvement", "Backend"],
    },
    {
      id: 5,
      title: "Add Unit Tests",
      description: "Write unit tests to ensure code reliability.",
      status: "Backlog",
      tags: ["Feature", "QA/Testing"],
    },
  ];

  const [tasks, setTasks] = useState(dummyTasks);

  const OnDragEnd = (event) => {
    const { active, over } = event;
  
    if (!over) {
      return;
    }
  
    const taskId = parseInt(active.id);
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId && task.status.toLowerCase() !== over.id) {
        return { ...task, status: over.id };
      }
      return task;
    });
  
    setTasks(updatedTasks);
  };
  

  return (
    <div className="bg-gray-50 px-6 py-3 rounded-lg">
      <h1 className="text-text-primary text-2xl font-bold">Project Name</h1>
      <div className="grid grid-cols-3 gap-8">
        <DndContext onDragEnd={OnDragEnd}>
          {cols.map((col) => (
            <BoardCol key={col} title={col} tasks={tasks} />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default Board;
