import React from "react";
import Layout from "./components/features/application/components/workArea/components/layout/Layout";
import Task from "./components/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/Task";

function App() {
  const task = {
    id: "bb1347ee-3170-4e80-9b06-f0a691ca59e8",
    status: "61bc95e9-a861-4c15-b4a7-d88e2f7594f3",
    assignee: "6afc9c9b-afdf-4b8f-b4cf-5dc370ac26ad",
    dueDate: "2021-02-15T06:45:05.076Z",
    creationDate: "2020-03-25T13:58:46.655Z",
    title: "ea aut doloribus",
    description:
      "Iusto dolor dolore vel tempora aut nihil et. Sequi dolorem doloribus quidem culpa explicabo. Asperiores nesciunt eveniet ut vitae et sint natus. Reiciendis sunt qui quae.",
    project: "0cab7ecc-9409-4ebf-8b18-72b523abe9de"
  };

  return (
    <div className="App">
      <Layout />
      {/* <Task task={task} /> */}
    </div>
  );
}

export default App;
