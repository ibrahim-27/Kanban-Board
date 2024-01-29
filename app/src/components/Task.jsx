import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useDraggable } from "@dnd-kit/core";
import Tag from "../ui/Tag";

const Task = ({ task, DeleteTask }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
    id: task.id.toString(),
  });

  // useEffect(() => {
  //   console.log(task.tags);
  //  }, []);

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "",
        transition,
      }}
      className="bg-white p-4 rounded-xl flex flex-col gap-4 border"
    >
      <div className="flex justify-between">
        <h1 className="text-text-primary text-lg font-semibold">
          {task.title}
        </h1>
        <div className="px-1" onClick={() => DeleteTask(task.id)}>
        <Icon
          className="bg-tag-red text-red-900 rounded-[50%] text-2xl"
          icon="material-symbols:delete-outline"
        />
        </div>
      </div>
      <p>{task.description}</p>
      <div className="flex items-center flex-wrap gap-2">
        {task.tags.map((tag, index) => {
          return <Tag tag={tag} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Task;
