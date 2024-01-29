import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";
import AddTask from "../ui/AddTask";
import axios from "axios";

const BoardCol = (props) => {
  const [taskArray, setTaskArray] = useState([]);
  const [isAddingTask, setIsAddingTask] = useState(false);

  const FilterData = () => {
    // console.log(props.tasks, props.title);
    setTaskArray(props.tasks.filter((task) => task.status.toLowerCase() === props.title.toLowerCase()));
  }

  const HandleCancel = () => {
    setIsAddingTask(false);
  };

  const HandleAdd= async (task) => {
    task = {...task, status: props.title.toLowerCase()}
    try {
      let newTask = await axios.post('http://localhost:3000/task/', task);
      newTask = newTask.data;
      // console.log(newTask);
      setTaskArray([...taskArray, newTask]);
      
    } catch (error) {
      console.log(error)
    }
    // setTaskArray([...taskArray, task]);
    setIsAddingTask(false);
  }

  const DeleteTask = async (id) => {
    // console.log(id);
    await axios.delete(`http://localhost:3000/task/${id}`);
    setTaskArray(taskArray.filter((task) => task._id !== id));
    // console.log(taskArray);
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
    <>
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
          className="bg-theme-bg rounded-[50%] p-1 text-2xl hover:border-2 cursor-pointer"
          icon="material-symbols:add"
          onClick={() => setIsAddingTask(!isAddingTask)}
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {taskArray.map((task) => (
          <Task key={task._id} task={task} DeleteTask={DeleteTask} />
        ))}
      </div>
    </div> 
    {isAddingTask ?(<>
      <AddTask HandleCancel={HandleCancel} HandleAdd={HandleAdd} />
      <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75"></div>
    </>): ''  }
    </>
  );
};

export default BoardCol;
