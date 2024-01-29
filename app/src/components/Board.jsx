import React, { useState } from "react";
import BoardCol from "./BoardCol";
import { DndContext, useSensor, MouseSensor, useSensors } from "@dnd-kit/core";
import { useAtom } from "jotai";
import { tasksAtom } from "../states/Task";

const Board = () => {
  const [cols, setCols] = useState(["Backlog", "InProgress", "Completed"]);

  const [tasks, setTasks] = useAtom(tasksAtom);

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
