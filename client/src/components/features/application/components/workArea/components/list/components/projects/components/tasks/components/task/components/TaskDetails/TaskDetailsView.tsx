import React from "react";
import classNames from "classnames";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { taskInitialValues } from "../../types";
import TaskDetailsViewProps from "./TaskDetailsViewProps";
import AssigneesDropdown from "../../../../../../../../../../../../../../assigneesDropdown/AssigneesDropdown";
import "../../../../../../../../../../../../../../../css/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/components/TaskDetails/TaskDetails.css";

const TaskDetailsView = ({
  task = taskInitialValues,
  assignees,
  assignee,
  dueDate,
  focused,
  assigneeButtonTitle,
  editorState,
  isToolbarHidden,
  mentionSuggestions,
  onInputChange,
  onAssigneeChange,
  onFocusChange,
  onDueDateChange,
  onDescriptionChange,
  onEditorFocus,
  onEditorBlur,
}: TaskDetailsViewProps) => {
  const { title, projectId } = task;

  return (
    <form className="form-full-width ml-0 mt-3 mb-3">
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
            onChange={onInputChange}
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
            onDateChange={onDueDateChange} // PropTypes.func.isRequired
            focused={focused} // PropTypes.bool
            onFocusChange={onFocusChange} // PropTypes.func.isRequired
            id="task-due-date" // PropTypes.string.isRequired,
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="assignee">
          Assignee
        </label>
        <div className="col-sm-10">
          <AssigneesDropdown
            assignees={assignees}
            assignee={assignee}
            onAssigneeChange={onAssigneeChange}
          />
          {/* <div className="row m-1">
            {assignee && assignee.image && (
              <div className="pic-area mr-1">
                <img
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={assignee.image}
                  alt={assignee.name}
                />
              </div>
            )}
            <DropdownButton
              title={assigneeButtonTitle}
              variant="secondary"
              id="assigneeButton"
              onSelect={onAssigneeChange}
              value={task.assigneeId}
            >
              {assignees &&
                assignees.map((assignee) => (
                  <Dropdown.Item key={assignee.id} eventKey={assignee.id}>
                    {assignee.name}
                  </Dropdown.Item>
                ))}
            </DropdownButton>
          </div> */}
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
            defaultValue={projectId}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          {editorState && (
            <Editor
              toolbarClassName={isToolbarHidden ? "d-none" : undefined}
              onFocus={onEditorFocus}
              onBlur={onEditorBlur}
              editorState={editorState}
              wrapperClassName="editor-wrapper"
              editorClassName={classNames(
                "border rounded pl-2 pr-2",
                isToolbarHidden ? undefined : "editor-focus"
              )}
              onEditorStateChange={onDescriptionChange}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                // image: {
                //   uploadCallback: uploadImageCallBack,
                //   alt: { present: true, mandatory: true },
                // },
              }}
              mention={{
                separator: " ",
                trigger: "@",
                suggestions: mentionSuggestions,
              }}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default TaskDetailsView;
