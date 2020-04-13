import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { User, Task } from "../../../../../../../../../../../../../../../types";
import * as store from "../../../../../../../../../../../../../../../store/users/store";
import "../../../../../../../../../../../../../../../css/components/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/components/TaskDetails/TaskDetails.css";

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
  project: "",
};

const TaskDetails = ({ task = taskInitialValues }: TaskDetailsProps) => {
  const [assignee, setAssignee] = useState({} as User);
  const [dueDate, setDueDate] = useState(moment(task.dueDate));
  const [focused, setFocused] = useState(null);
  const assignees = useSelector(store.userSelectors.getUsers);
  const isLoading = useSelector(store.userSelectors.getIsLoading);
  console.log("TaskDetails -> isLoading", isLoading);

  const {
    // id,
    title,
    description,
    // status,
    // creationDate,
    project,
  } = task;

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    console.log("handleChange -> {id, value}: ", { id, value });

    e.preventDefault();
  };

  useEffect(() => {
    setAssignee({} as User);
  }, [task.assignee]);

  const name = (assignee && assignee.name) || "";
  const assigneeButton = name || "Select an assignee";

  return (
    <form className="form-full-width ml-0 mt-3 mb-3" onChange={handleChange}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="title">
          Title
        </label>
        <div className="col-sm-10">
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
        <div className="col-sm-8">
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
                alt={name}
              />
            </div>
            <DropdownButton
              title={assigneeButton}
              variant="secondary"
              id="assigneeButton"
              onSelect={(assigneeId: string) => {
                const selectedAssignee = assignees.filter(
                  (assignee) => assignee.id === assigneeId
                );
                setAssignee(selectedAssignee[0]);
              }}
            >
              {assignees &&
                assignees.map((assignee) => (
                  <Dropdown.Item key={assignee.id} eventKey={assignee.id}>
                    {assignee.name}
                  </Dropdown.Item>
                ))}
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
            rows={10}
            placeholder={description}
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default TaskDetails;
