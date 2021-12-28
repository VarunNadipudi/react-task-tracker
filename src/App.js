import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Completing React',
      day: 'December 27th at 6pm',
      reminder: true
    },
    {
      id:2,
      text: 'Learning Next.js',
      day: 'December 28th at 6pm',
      reminder: true
    },
    {
      id:3,
      text: 'Completing Airbnb',
      day: 'December 29th at 6pm',
      reminder: false
    },
  ]);

  //deleting tasks
  const deleteTasks = (id)=>{
    setTasks(tasks.filter((task) => task.id!== id));
  }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      { tasks.length > 0 ?
        <Tasks tasks={ tasks } onDelete={deleteTasks}/> : 'No Tasks to show'
      }
    </div>
  );
}

export default App;
