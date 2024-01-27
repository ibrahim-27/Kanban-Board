import React from "react";
import { Icon } from "@iconify/react";
import { useDraggable } from "@dnd-kit/core";

const Task = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
    id: task.id.toString(),
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "",
        transition,
      }}
      className="bg-white px-4 py-2 rounded-xl flex flex-col gap-3"
    >
      <div className="flex justify-between">
        <h1 className="text-text-primary text-lg font-semibold">
          {task.title}
        </h1>
        <Icon
          className="bg-tag-red text-red-900 rounded-[50%] p-1 text-2xl"
          icon="material-symbols:delete-outline"
        />
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
