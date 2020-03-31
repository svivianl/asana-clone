import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

interface Assignee {
  id: string;
  name: string;
  job: string;
  about: string;
  phone: string;
  userName: string;
  email: string;
  image: string;
  country: string;
}
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
  const [assignee, setAssignee] = useState({} as Assignee);
  const [dueDate, setDueDate] = useState(moment(task.dueDate));
  const [focused, setFocused] = useState(null);

  const {
    // id,
    title,
    description,
    // status,
    // creationDate,
    project
  } = task;

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    setAssignee({} as Assignee);
  }, [task.assignee]);

  const name = (assignee && assignee.name) || "";
  const assigneeButton = name || "Select an assignee";

  return (
    <form className="ml-0 mt-3 mb-3" onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="title">
          Title
        </label>
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
        <label className="col-sm-2 col-form-label" htmlFor="dueDate">
          Due date
        </label>
        <div className="col-sm-12">
          <SingleDatePicker
            date={dueDate} // momentPropTypes.momentObj or null
            onDateChange={(date: any) => setDueDate(date)} // PropTypes.func.isRequired
            focused={focused} // PropTypes.bool
            onFocusChange={({ focused }: any) => setFocused(focused)} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="assignee">
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
            <DropdownButton
              title={assigneeButton}
              variant="secondary"
              id="assigneeButton"
              onSelect={(assigneeId: string) => {
                // setAssignee(data.target.value);
              }}
            >
              <Dropdown.Item eventKey="1">Assignee 1</Dropdown.Item>
              <Dropdown.Item eventKey="2">Assignee 2</Dropdown.Item>
              <Dropdown.Item eventKey="3">Assignee 3</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Project</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="project"
            placeholder="Project"
            defaultValue={project}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="description"
            rows={3}
            placeholder={description}
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default TaskDetails;
