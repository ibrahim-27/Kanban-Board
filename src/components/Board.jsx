import React, { useState } from "react";
import BoardCol from "./BoardCol";
import { DndContext, useSensor, MouseSensor, useSensors } from "@dnd-kit/core";

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

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);
  

  return (
    <div className="bg-gray-50 px-6 py-3 rounded-2xl">
      <h1 className="text-text-primary text-2xl font-bold my-6">Kanban Board</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <DndContext onDragEnd={OnDragEnd} sensors={sensors}>
          {cols.map((col) => (
            <BoardCol key={col} title={col} tasks={tasks} />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default Board;
