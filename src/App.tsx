import type { SidebarProps, TaskCardProps, FooterProps } from "./libs/types";

function Header() {
  return (
    <header className="text-white bg-primary p-2 w-100">
      <h4>Note App</h4>
    </header>
  );
}

function Sidebar(props: SidebarProps) {
  return (
    <aside
      className="d-flex flex-column p-3"
      style={{
        width: "200px",
        backgroundColor: "#f2f2f2",
        justifyContent: "space-between",
      }}
    >
      <nav className="nav flex-column gap-2">
        <h5>เมนู</h5>
        <a className="nav-link active" href="#">
          หน้าแรก
        </a>
        <a className="nav-link" href="#">
          รายการ
        </a>
        <a className="nav-link" href="#">
          เกี่ยวกับ
        </a>
      </nav>

      <div className="fw-bold text-muted">
        <p>
          {props.userName} : {props.type}
        </p>
      </div>
    </aside>
  );
}

function Task(props: TaskCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4">
            <h5 className="card-title">{props.title}</h5>
          </div>
          <div className="col-lg-4">
            <p className="card-text">{props.description}</p>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success me-2">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskInput() {
  return (
    <div className="m-2 p-2">
      <form className="row">
        <h2>Rawiphat Makpheng</h2>
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            placeholder="Insert a task here.."
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}

function Footer(props: FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {props.year} {props.fullName} {props.studentId}
    </footer>
  );
}

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
        <Sidebar userName="Rawiphat" type="admin" />
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <TaskInput />
            {taskcards.map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </main>
        </div>
      </div>
      <Footer year="2025" fullName="Rawiphat Makpheng" studentId="670612128" />
    </div>
  );
}

export default App;
