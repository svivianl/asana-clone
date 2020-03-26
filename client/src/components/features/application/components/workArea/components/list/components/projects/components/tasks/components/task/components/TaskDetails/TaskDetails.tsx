import React, { useEffect, useState } from "react";

interface Task {
  id: string;
  assignee: string;
  title: string;
  description: string;
  status: string;
  dueDate: Date;
  creationDate: Date;
  project: string;
}

interface TaskDetailsProps {
  task?: Task;
}

const taskInitialValues: Task = {
  id: "",
  assignee: "",
  title: "",
  description: "",
  status: "",
  dueDate: new Date(),
  creationDate: new Date(),
  project: ""
};

const TaskDetails = ({ task = taskInitialValues }: TaskDetailsProps) => {
  // const [assignee, setAssignee] = useState({})
  const {
    // id,
    assignee,
    title,
    description,
    // status,
    dueDate,
    // creationDate,
    project
  } = task;

  // useEffect(() => {

  // }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="m-3" onSubmit={handleSubmit}>
      <div className="form-group row">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Task's Title"
            defaultValue={title}
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          className="col-sm-2 col-form-label"
          htmlFor="exampleFormControlSelect1"
        >
          Assignee
        </label>
        <div className="col-sm-10">
          <div className="row m-1">
            <div className="pic-area mr-1">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src="https://cangeo-media-library.s3.amazonaws.com/s3fs-public/styles/web_article_slider_image/public/images/web_articles/article_images/3120/eastern_chipmunk.jpg?itok=vpESnz24"
              />
            </div>
            <select
              className="form-control"
              id="assignee"
              style={{ width: "auto", flexGrow: 1 }}
            >
              <option value={1}>Assignee 1</option>
              <option value={2}>Assignee 2</option>
              <option value={3}>Assignee 3</option>
              <option value={4}>Assignee 4</option>
              <option value={5}>Assignee 5</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group row">
        <label
          className="col-sm-2 col-form-label"
          htmlFor="exampleFormControlTextarea1"
        >
          Example textarea
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder={description}
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default TaskDetails;
