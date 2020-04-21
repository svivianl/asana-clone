import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import {
  EditorState,
  convertFromRaw,
  convertToRaw,
  RawDraftContentState,
  RawDraftContentBlock,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { taskInitialValues } from "../../types";
import TaskDetailsViewProps from "./TaskDetailsViewProps";
import "../../../../../../../../../../../../../../../css/features/application/components/workArea/components/list/components/projects/components/tasks/components/task/components/TaskDetails/TaskDetails.css";

const TaskDetailsView = ({
  task = taskInitialValues,
  assignees,
  assignee,
  dueDate,
  focused,
  assigneeButtonTitle,
  onInputChange,
  onAssigneeChange,
  onFocusChange,
  onDueDateChange,
  onDescriptionChange,
}: TaskDetailsViewProps) => {
  const { title, description, projectId } = task;
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [isToolbarHidden, setIsToolbarHidden] = useState(true);

  // TODO: remove once backend id done
  useEffect(() => {
    if (description) {
      let editor: RawDraftContentState;

      if (typeof description === "string") {
        const blocks: RawDraftContentBlock[] = [
          {
            key: "eej24",
            text: description,
            type: "unstyled",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
          },
        ];
        editor = { blocks, entityMap: {} };
      } else {
        editor = description;
      }
      setEditorState(EditorState.createWithContent(convertFromRaw(editor)));
      // setEditorState(convertFromRaw(JSON.parse(editor))))
      // EditorState.createEmpty(decorator?: DraftDecoratorType): EditorState;
    }
  }, [task.id]);

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
          <div className="row m-1">
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
              onFocus={() => {
                setIsToolbarHidden(false);
              }}
              onBlur={() => {
                setIsToolbarHidden(true);
              }}
              editorState={editorState}
              wrapperClassName="wrapperClassName"
              editorClassName="border rounded pl-2 pr-2"
              onEditorStateChange={(editorState) => {
                console.log(
                  "editor: ",
                  convertToRaw(editorState.getCurrentContent())
                );
                onDescriptionChange(
                  convertToRaw(editorState.getCurrentContent())
                );
                setEditorState(editorState);
              }}
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
              // mention={{
              //   separator: " ",
              //   trigger: "@",
              //   suggestions: [
              //     { text: "APPLE", value: "apple", url: "apple" },
              //     { text: "BANANA", value: "banana", url: "banana" },
              //     { text: "CHERRY", value: "cherry", url: "cherry" },
              //     { text: "DURIAN", value: "durian", url: "durian" },
              //     { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
              //     { text: "FIG", value: "fig", url: "fig" },
              //     { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
              //     { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
              //   ],
              // }}
            />
          )}
          {/* <textarea
            className="form-control"
            id="description"
            rows={10}
            placeholder={description}
            onChange={onInputChange}
          ></textarea> */}
        </div>
      </div>
    </form>
  );
};

export default TaskDetailsView;
