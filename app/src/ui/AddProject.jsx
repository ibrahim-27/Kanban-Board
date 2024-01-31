import React, { useState } from 'react'

const AddProject = (props) => {
    const [project, setProject] = useState({
        title: '',
    })

    const handleInputChange = (e, field) => {
        setProject({ ...project, [field]: e.target.value })
    }

    const handleAdd = () => {
        setProject({...project, "userId": '65ba7ad3d7373cf1a82039dd'})
        props.HandleAdd({...project, "userId": '65ba7ad3d7373cf1a82039dd'});
    }

  return (
    <div className="fixed flex flex-col bg-white p-4 rounded-lg shadow-md w-[250px] md:w-[550px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <input
        type="text"
        placeholder="Title"
        value={project.title}
        onChange={(e) => handleInputChange(e, 'title')}
        className="mt-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className='flex gap-4'>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Project
      </button>
      <button
        onClick={props.HandleCancel}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        Cancel
      </button>
      </div>
    </div>
  )
}

export default AddProject