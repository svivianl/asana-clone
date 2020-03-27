import React from "react";

const TaskStatusBar = () => {
  return (
    <div className="container-fluid p-2 d-flex align-items-center justify-content-between border border-dark">
      <div>
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fas fa-check mr-2" />
          Mark Complete
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-sm mr-3">
          <i className="fas fa-paperclip" />
        </button>
        <button type="button" className="btn btn-sm mr-3">
          <i className="fas fa-link" />
        </button>
        <button type="button" className="btn btn-sm mr-3">
          <i className="fas fa-thumbs-up" />
        </button>
        <button type="button" className="btn btn-sm mr-5">
          <i className="fas fa-ellipsis-h" />
        </button>
        <button type="button" className="btn btn-sm">
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
};

export default TaskStatusBar;
