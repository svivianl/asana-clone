import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import {
  EditorState,
  convertFromRaw,
  convertToRaw,
  RawDraftContentState,
  RawDraftContentBlock,
} from "draft-js";
import * as userStore from "../../../../../../../../../../../../../../../store/users/store";
// import { taskInitialValues } from "../../types";
import TaskDetailsView from "./TaskDetailsView";
import TaskDetailsProps from "./TaskDetailsProps";
import { User } from "../../../../../../../../../../../../../../../types";
import * as store from "../../store/store";

const TaskDetails = ({
  // task = taskInitialValues,
  assignee,
  onChangeAssignee,
}: TaskDetailsProps) => {
  const [dueDate, setDueDate] = useState(moment());
  const [focused, setFocused] = useState(null);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [isToolbarHidden, setIsToolbarHidden] = useState(true);
  const assignees = useSelector(userStore.userSelectors.getUsers);
  const task = useSelector(store.userSelectors.getTask);
  const dispatch = useDispatch();
  const { description } = task;

  useEffect(() => {
    if (task.dueDate) {
      setDueDate(moment(task.dueDate, "YYYY-MM-DD"));
    }
  }, [task.dueDate]);

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

  const setMentionSuggestions = (users: User[]) =>
    users.map((user) => {
      return { text: user.name, value: user.name, id: user.id };
    });

  const handleTaskChange = (id: string, value: any) => {
    store.putTask(dispatch)({ ...task, [id]: value });
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    handleTaskChange(id, value);
    e.preventDefault();
  };

  const handleDueDateChange = (date: any) => {
    const newDueDate = new Date(date.format("YYYY-MM-DD"));
    handleTaskChange("dueDate", newDueDate.toISOString());
    setDueDate(date);
  };

  const handleAssigneeChange = (assigneeId: string) => {
    handleTaskChange("assigneeId", assigneeId);
    onChangeAssignee(assigneeId);
  };

  const handleTextAreaChange = (editorState: EditorState) => {
    handleTaskChange(
      "description",
      convertToRaw(editorState.getCurrentContent())
    );
    setEditorState(editorState);
  };

  const name = (assignee && assignee.name) || "";
  const assigneeButton = name || "Select an assignee";

  return (
    <TaskDetailsView
      task={task}
      assignees={assignees}
      assignee={assignee}
      dueDate={dueDate}
      focused={focused}
      assigneeButtonTitle={assigneeButton}
      editorState={editorState}
      isToolbarHidden={isToolbarHidden}
      mentionSuggestions={setMentionSuggestions(assignees)}
      onInputChange={handleInputChange}
      onAssigneeChange={handleAssigneeChange}
      onFocusChange={({ focused }: any) => setFocused(focused)}
      onDueDateChange={handleDueDateChange}
      onDescriptionChange={handleTextAreaChange}
      onEditorFocus={() => setIsToolbarHidden(false)}
      onEditorBlur={() => setIsToolbarHidden(true)}
    />
  );
};

export default TaskDetails;
