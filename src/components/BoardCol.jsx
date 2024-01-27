import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

const BoardCol = (props) => {
  const [taskArray, setTaskArray] = useState([]);

  const FilterData = () => {
    setTaskArray(props.tasks.filter((task) => task.status.toLowerCase() === props.title.toLowerCase()));
  }

  useEffect(() => {
    FilterData();
  }, [props.tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
  } = useDroppable({
    id: props.title.toLowerCase(),
    data: taskArray,
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : "",
        transition: transition ? transition : "",
      }}
      className="bg-gray-50 px-2 text-text-secondary"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">{props.title}</h3>
        <Icon
          className="bg-theme-bg rounded-[50%] p-1 text-2xl"
          icon="material-symbols:add"
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {taskArray.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default BoardCol;
