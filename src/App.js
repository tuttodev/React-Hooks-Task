import React, { useState } from 'react';

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [task, setTask] = useState([]);


  const setListTask = () => task.map(item => (
      <div key={item.title} className='border p-3 mb-2'>
        <h3>{item.title}</h3>
        <div>
          {item.description}
        </div>
      </div>
  ));

  const handleSubmit = e => {
    e.preventDefault();
    
    const newTask = {
      title,
      description
    };

    let allNewTasks = [...task, newTask];

    setTask(allNewTasks);

    cleanInputs();
  }

  const cleanInputs = () => {
    setTitle('');
    setDescription('');
  }


  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type='text' 
                  className='form-control' 
                  placeholder='Title' />
              </div>
              <div className='form-group'>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='form-control' 
                  placeholder='Description' />
              </div>     
              <button type='submit' className='btn btn-primary'>Create New Task</button>         
            </form>
          </div>
          <div className='col'>
            {setListTask()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
