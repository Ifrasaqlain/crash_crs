import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import File1 from "./components/File1";
import Tasks from "./components/Tasks";
import CForm from "./components/Addtask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  // const name = "Ifra";
  // const x = true;

  const [showAddTask, setShowAddTask] = useState(true);
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchData();
      setTask(taskFromServer);
    };
    getTask();
  }, []);

  const fetchData = async () => {
    const api = await fetch("http://localhost:5000/task");
    const res = await api.json();
    console.log(res);
    return res;
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/task/${id}`, {
      method: "DELETE",
    });
    setTask(task.filter((eve) => eve.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetch(id);
    const updTask = { ...taskToToggle, reminder: taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/task/${id}`, {
      method: "PUT",
      body: JSON.stringify(updTask),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    setTask(
      task.map((eve) =>
        eve.id === id ? { ...eve, reminder: data.reminder } : eve
      )
    );
  };

  const addTask = async (tsk) => {
    const getRes = await fetch("http://localhost:5000/task", {
      method: "POST",
      body: JSON.stringify(tsk),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await getRes.json();
    setTask([...task, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...tsk };
    // setTask([...task, newTask]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Hello World!</h1>
      <h2>hello {name}</h2>
      <h2>Hey {x ? "Yes" : "No"}</h2> */}

        {/* <File1 /> */}
        <Heading
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          text="Task Tracker"
          title="With Props"
        />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                {task.length ? (
                  <Tasks
                    listItems={task}
                    DeleteFunc={onDelete}
                    ToggleReminder={toggleReminder}
                  />
                ) : (
                  "No Task To Show"
                )}

                {showAddTask && <CForm  onAdd={addTask} />}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
