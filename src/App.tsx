import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import TaskInput from "./components/TaskInput";
import { Task } from "./components/Task";
import type { TaskCardProps } from "./libs/types";

function App() {
  const taskcards: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar userName="Siriwipha" type="admin" />
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <TaskInput />
            {taskcards.map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </main>
        </div>
      </div>
      <Footer year="2025" fullName="Siriwipha Auddee" studentId="670612131" />
    </div>
  );
}

export default App;
