import React, { useState } from 'react';

const AddTask = (props) => {
  const [task, setTask] = useState({
    id: 12,
    title: '',
    description: '',
    status:'',
    tags: {
      'Design': false,
      'Backend': false,
      'Frontend': false,
      'Testing': false,
      'Urgent': false,
      'Bug': false,
      'Feature': false,
      'Improvement': false,
      'Documentation': false,
      'High-Priority': false,
      'Medium-Priority': false,
      'Low-Priority': false,
    },
  });

  const handleInputChange = (e, field) => {
    setTask({ ...task, [field]: e.target.value });
  };

  const handleCheckboxChange = (tagName) => {
    setTask({
      ...task,
      tags: {
        ...task.tags,
        [tagName]: !task.tags[tagName],
      },
    });
  };

  const handleAddClick = () => {
    // Filter out unchecked tags
    const selectedTags = Object.entries(task.tags)
      .filter(([_, isChecked]) => isChecked)
      .map(([tagName, _]) => tagName);

    // Call handleAddTask with selected tags
    props.HandleAdd({ ...task, tags: selectedTags });
    // console.log({ ...task, tags: selectedTags })

    // Reset task fields after adding
    setTask({
      title: '',
      description: '',
      tags: {
        'Design': false,
        'Backend': false,
        'Frontend': false,
        'Testing': false,
        'Urgent': false,
        'Bug': false,
        'Feature': false,
        'Improvement': false,
        'Documentation': false,
        'High Priority': false,
        'Medium Priority': false,
        'Low Priority': false,
      },
    });
  };

  return (
    <div className="fixed flex flex-col bg-white p-4 rounded-lg shadow-md w-[250px] md:w-[550px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => handleInputChange(e, 'title')}
        className="mb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => handleInputChange(e, 'description')}
        className="mb-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none h-24 p-2"
      ></textarea>
      <div className="mb-2">
        {Object.entries(task.tags).map(([tagName, isChecked]) => (
          <label key={tagName} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(tagName)}
              className="mr-2"
            />
            {tagName}
          </label>
        ))}
      </div>
      <div className='flex gap-4'>
      <button
        onClick={handleAddClick}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Task
      </button>
      <button
        onClick={props.HandleCancel}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        Cancel
      </button>
      </div>
    </div>
  );
};

export default AddTask;
